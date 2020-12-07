<template>
  <div class="calendar-box">
    <h1 class="title event-title">Nos événements</h1>

    <Calendar />
  </div>
</template>

<script>
import Calendar from '../components/Calendar';
export default {
  name: 'calendar',
  components:{
    Calendar,
  }

}
</script>

<style>
.event-title{
  margin: 5rem auto;
}
</style>