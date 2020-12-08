<template>
  <div>
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

</style>