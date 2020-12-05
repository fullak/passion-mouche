<template>
  <div id="app">
    <NavBar />
    <Home />
    <Footer />

  </div>
</template>

<script>
import NavBar from './components/navBar.vue'
import Home from './pages/home'
import Footer from './components/footer'

export default {
  name: 'App',
  components: {
    NavBar,
    Home,
    Footer,
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

</style>
