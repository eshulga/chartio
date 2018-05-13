<template>
  <div class="main">
    <h1>{{ name }}</h1>
    <input type="file" name="xlfile" id="xlf" @change="fileInputHandler">
    <v-app id="inspire">
      <div>
        <v-dialog v-model="dialog" max-width="500px">
          <v-btn slot="activator" color="primary" dark class="mb-2">Новая запись</v-btn>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex v-for="value in headers" :key="value.id" xs12 sm6 md4>
                    <v-text-field v-model="editedItem[value.value]" :label="value.value">{{value.value}}</v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click.native="close">Отмена</v-btn>
              <v-btn color="blue darken-1" flat @click.native="save">Сохранить</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogColor" max-width="260">
          <color-picker :currentId="currentColoringId" />
        </v-dialog>
        <v-data-table
          :headers="headers"
          :items="rows"
          hide-actions
          class="elevation-1"
        >
          <template slot="items" slot-scope="props">
            <td v-for="value in props.item" :key="value">{{ value }}</td>
            <td class="justify-center layout px-0">
              <v-btn icon flat color="deep-orange" class="mx-0" @click="coloringItem(props.index)">
                <v-icon>color_lens</v-icon>
              </v-btn>
              <v-btn icon flat color="deep-orange" class="mx-0" @click="editItem(props.item)">
                <v-icon>edit</v-icon>
              </v-btn>
              <v-btn icon flat color="deep-orange" class="mx-0" @click="deleteItem(props.item)">
                <v-icon>delete</v-icon>
              </v-btn>
            </td>
          </template>
          <template slot="no-data">
            <v-btn color="primary" @click="initialize">Reset</v-btn>
          </template>
        </v-data-table>
      </div>
    </v-app>
  </div>
</template>

<script>
import XLSX from 'xlsx'
import ColorPicker from '@/common/color-picker/ColorPicker.vue'

export default {
  name: 'TableArea',
  components: {
    ColorPicker
  },
  data () {
    return {
      name: '',
      dialog: false,
      dialogColor: false,
      headers: [],
      rows: [],
      editedIndex: -1,
      editedItem: {},
      defaultItem: {},
      currentColoringId: null
    }
  },
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Новая строка' : 'Редактировать строку'
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    }
  },

  beforeUpdate () {
    const chartData = {
      labels: [],
      data: []
    }

    this.rows.forEach((item) => {
      let keys = Object.keys(item)
      chartData.labels.push(item[keys[0]])
      chartData.data.push(item[keys[1]])
    })

    this.$eventBus.$emit('chartData', chartData)
  },

  created () {
    this.initialize()
  },

  mounted () {
    this.$eventBus.$on('close-color-picker', this.closeColorPicker)
  },

  methods: {
    fileInputHandler (e) {
      const files = e.target.files
      for (let i = 0, f = files[i]; i !== files.length; ++i) {
        var reader = new FileReader()
        this.name = f.name
        reader.onload = (e) => {
          const data = e.target.result
          const workbook = XLSX.read(data, {type: 'binary'})
          const firstWorksheet = workbook.Sheets[workbook.SheetNames[0]]
          const dataSheet = XLSX.utils.sheet_to_json(firstWorksheet, {header: 1})
          // adding headers
          dataSheet[0].forEach((header) => {
            this.headers.push({
              text: '' + header,
              value: '' + header
            })
          })

          for (let i = 1; i < dataSheet.length; i++) {
            let obj = Object.assign({})
            let objDefault = Object.assign({})

            dataSheet[i].forEach((item, i) => {
              obj[this.headers[i].value] = item
              objDefault[this.headers[i].value] = ''
            })

            this.rows.push(obj)
            this.defaultItem = Object.assign({}, objDefault)
          }
        }
        reader.readAsBinaryString(f)
      }
    },
    initialize () {
      this.rows = []
    },
    coloringItem(item){
      this.dialogColor = true
      this.currentColoringId = item
      // console.log('coloringItem', item)
    },
    editItem (item) {
      this.editedIndex = this.rows.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    deleteItem (item) {
      const index = this.rows.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.rows.splice(index, 1)
    },
    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },
    closeColorPicker () {
      setTimeout(() => {
        this.dialogColor = false
      }, 300)
    },
    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.rows[this.editedIndex], this.editedItem)
      } else {
        this.rows.push(this.editedItem)
      }
      this.close()
    }
  }
}
</script>

<style lang="scss" scoped>
  .main{
    position: relative;
    display:flex;
    flex-direction: column;
    background-color: white;
    width: 100%;
    box-shadow: -5px 6px 16.8px 4.2px rgba(0, 0, 0, 0.15);
    border: 2px solid #3F92D2;
    margin-bottom: 40px;
    .color-picker{
      position: absolute;
    }
  }
</style>
