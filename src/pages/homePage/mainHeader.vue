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
  opacity: 80%;
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
  opacity: 70%;
  border-bottom-left-radius: 5%;
  border-bottom-right-radius: 5%;
}

.scale-up-center {
  -webkit-animation: scale-up-center 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  animation: scale-up-center 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}

@-webkit-keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.25);
    transform: scale(0.25);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.25);
    transform: scale(0.25);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}



</style>