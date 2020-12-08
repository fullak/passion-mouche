<template>
  <div id="app">
    <NavBar />
    <router-view></router-view>
    <Footer />

  </div>
</template>

<script>
import NavBar from './components/navBar.vue'
import Footer from './components/footer'

export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
  }
}
</script>

<style>
body{
  margin: 0;
}

a{
  color: #2c3e50 !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

</style>
