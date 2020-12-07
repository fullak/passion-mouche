<template>
  <div class="container">
    <MainHeader />
    <MainContent class="mainContent-box"/>
  </div>
</template>

<script>
import MainHeader from "@/pages/homePage/mainHeader";
import MainContent from "@/pages/homePage/mainContent";

export default{
  name: 'Home',
  components: {
    MainHeader,
    MainContent,
  },
}
</script>

<style>
.mainContent-box{
  margin: 5rem auto 0;
  width: 100%;
}

</style>