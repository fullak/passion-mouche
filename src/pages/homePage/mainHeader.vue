<template>
  <div>
    <div class="top-title">
      <img src="../../assets/img/3.png" alt="#" class="head-img"/>
    </div>
    <div class="head-content box">
      <h2 class="title head-title">Etang de Givallois</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi beatae blanditiis culpa explicabo in
        libero
        modi officia temporibus. Adipisci consequatur cum esse incidunt mollitia nemo ullam ut vel voluptas.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  components: {}
}
</script>

<style>
.top-title {
  opacity: 0.7;
}

@media screen and (min-width: 700px){
  .head-content{
    width: 60%;
    margin: 2rem auto;
  }
}

</style>