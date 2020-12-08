<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
        <h1 class="title main-title">Passion Mouche</h1>
      </router-link>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" @click="showNavigation = !showNavigation">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-start box" v-if="showNavigation" @click="showNavigation = !showNavigation">
        <router-link to="/" class="navbar-item link">Accueil</router-link>
        <router-link to="/articles" class="navbar-item link">Articles</router-link>
        <router-link to="/calendar" class="navbar-item link">Calendrier</router-link>
        <router-link to="/contact" class="navbar-item link">Contact</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navBar',
  data() {
    return{
      showNavigation: false,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar{
  background-color: transparent;
  position: absolute;
  top: 0;
  width: 100%;
}

.main-title{
  font-family: Castoro;
  color: #2c3e50;
}
</style>
