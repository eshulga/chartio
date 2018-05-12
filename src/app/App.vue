<template>
  <div id="app">
    <Header />
    <Main />
  </div>
</template>

<script>
import Header from '../components/header/Header.vue'
import Main from '../components/main/Main.vue'

export default {
  data () {
    return {
    }
  },
  components: {
    Header, Main
  }
}
</script>
