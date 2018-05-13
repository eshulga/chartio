<template>
  <div class="main">
    <v-app id="inspire">
      <div>
        <div class="file-input-wrapper">
          <label for="xlf" class="file-input-button ripple">Загрузить</label>
          <input type="file" name="xlfile" id="xlf" @change="fileInputHandler">
        </div>
        <v-dialog v-model="dialog" max-width="500px" class="data-table">
          <v-btn outline :loading="loading" :disabled="loading" slot="activator" class="activator" color="deep-orange" @click.native="loader = 'loading'">
            Новая запись
          </v-btn>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex v-for="value in headers" :key="value" xs12 sm6 md4>
                    <v-text-field color="deep-orange" v-model="editedItem[value.value]" :label="value.value">{{value.value}}</v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="deep-orange" flat @click.native="close">Отмена</v-btn>
              <v-btn color="deep-orange" flat @click.native="save">Сохранить</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-data-table :headers="headers" :items="rows" hide-actions class="elevation-1">
          <template slot="items" slot-scope="props">
            <td v-for="value in props.item" :key="value">{{ value }}</td>
            <td class="justify-center layout px-0">
              <v-btn icon class="mx-0" @click="editItem(props.item)">
                <font-awesome-icon icon="pencil-alt" />
              </v-btn>
              <v-btn icon class="mx-0" @click="deleteItem(props.item)">
                <font-awesome-icon icon="times-circle" />
              </v-btn>
            </td>
          </template>
          <template slot="no-data" class="no-data">
            <h1>Пожалуйста загрузите .xlsx файл</h1>
          </template>
        </v-data-table>
      </div>
    </v-app>

  </div>
</template>

<script>
import XLSX from 'xlsx'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import { faCoffee } from '@fortawesome/fontawesome-free-solid'

export default {
  name: 'TableArea',
  data () {
    return {
      dialog: false,
      loader: null,
      loading: false,
      headers: [],
      rows: [],
      editedIndex: -1,
      editedItem: {},
      defaultItem: {}
    }
  },
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Новая строка' : 'Редактировать строку'
    },
    icon () {
      return faCoffee
    }
  },

  components: {
    FontAwesomeIcon
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    loader () {
      const load = this.loader
      this[load] = !this[load]
      setTimeout(() => (this[load] = false), 1000)
      this.loader = null
    }
  },

  created () {
    this.initialize()
  },

  methods: {
    fileInputHandler (e) {
      var files = e.target.files
      for (let i = 0, f = files[i]; i !== files.length; ++i) {
        var reader = new FileReader()
        // var name = f.name
        reader.onload = (e) => {
          var data = e.target.result
          var workbook = XLSX.read(data, {type: 'binary'})
          var firstWorksheet = workbook.Sheets[workbook.SheetNames[0]]
          var dataSheet = XLSX.utils.sheet_to_json(firstWorksheet, {header: 1})
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
    editItem (item) {
      console.dir(item)
      this.editedIndex = this.rows.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    deleteItem (item) {
      const index = this.rows.indexOf(item)
      confirm('Вы уверены?') && this.rows.splice(index, 1)
    },
    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
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
  .headline {
    font-family: 'Roboto', sans-serif;
  }

  .main {
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 100%;
    height: auto;
    box-shadow: -5px 5px 15px 5px rgba(0, 0, 0, 0.15);
    margin-bottom: 40px;
    padding: 10px;
    .application--wrap {
      height: auto;
    }
    .data-table {
      &__new-data {
        margin: 10px 0;
        .btn__content {
          &::before {
            background-color: #ff5722;
          }
        }
      }
    }
  }

  .file-input-wrapper {
    display: flex;
    flex-direction: row;
    .file-input-button {
      color: #ff5722;
      border: 1px solid #ff5722;
      background: #fff;
      border-radius: 2px;
      cursor: pointer;
      box-sizing: border-box;
      font-family: "Roboto", sans-serif;
      width: 120px;
      height: 40px;
      font-size: 15px;
      font-weight: 400;
      margin-top: 20px;
      padding-top: 8px;
      text-align: center;
      &:hover {
        transition: .3s cubic-bezier(.25,.8,.5,1);
        background: rgba(#ff5722, 0.12);
      }
    }
    input {
      display: none;
    }
  }

  .no-data {
    font-family: "Roboto", sans-serif;
    &:hover {
      background: #fff;
    }
  }

  .data-table__new-data {
      color: white;
      border: none;
      background: #ff5722;
      border-radius: 2px;
      cursor: pointer;
      box-sizing: border-box;
      font-family: "Roboto", sans-serif;
      width: 120px;
      height: 35px;
      font-size: 15px;
      font-weight: 400;
      margin-top: 20px;
      // padding-top: 9px;
      text-align: center;
  }

  .activator {
    margin: 10px 0;
    text-transform: none;
  }

  .ripple {
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);

  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #ff5722 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10,10);
    opacity: 0;
    transition: transform .5s, opacity 1s;
  }

  &:active:after {
    transform: scale(0,0);
    opacity: .2;
    transition: 0s;
  }
}

.custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
