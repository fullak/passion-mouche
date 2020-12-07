<template>
  <div class="introduction-container">
    <img src="../../assets/img/3.jpg" class="background-img" alt="background image"/>
    <div class="introduction-box box scale-up-center">
      <h2 class="title">Etang de Givallois</h2>
      <p class="test">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi corporis dolore dolorem eligendi error hic ipsa ipsum laborum, modi natus nobis obcaecati repellendus saepe temporibus. Eos in modi odit.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  components: {
  }
}
</script>

<style>
.introduction-container{
  display: block;
  margin: 0 -10rem;
}

.introduction-box{
  position: absolute;
  top: 0;
  margin-top: 10rem;
  margin-left: 22rem;
  width: 30rem;
}

.title{
  color: black;
  font-family: Castoro;
}

.test{
  color: black;
}

.background-img{
  height: 600px;
  width: max-content;
  opacity: 0.5;
}
</style>