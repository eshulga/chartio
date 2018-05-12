<template>
  <div id="app">
    <header />
    <main />
    <router-view/>
  </div>
</template>

<script>
import Header from './../components/header/Header.vue'
import Main from './../components/main/Main.vue'

export default {
  components: {
    Header, Main
  }
}
</script>
