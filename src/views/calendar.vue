<template>
  <div class="calendar-box">
    <img src="../assets/img/calendar.png" alt="#" class="calendar-img">
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
  margin: 1rem auto;
}

.calendar-img{
  opacity: 0.7;
}
</style>