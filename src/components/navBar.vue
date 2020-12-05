<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <h1 class="title main-title">Passion Mouche</h1>
      </a>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-start">
        <a class="navbar-item">
          Accueil
        </a>

        <a class="navbar-item">
          Agenda
        </a>

        <a href="#" class="navbar-item">
          Médias
        </a>

        <a href="#" class="navbar-item">
          Contact
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navBar',
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
