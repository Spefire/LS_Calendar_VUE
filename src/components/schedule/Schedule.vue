<template>
  <div class="schedule">
    <h1>Schedule Response</h1>
    <div class="schedule-content">
      <ScheduleDate />
      <ScheduleTime />
    </div>
    <div>
      <button class="primary">Schedule</button>
      <button>Cancel</button>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./Schedule.scss"></style>
<script lang="ts" src="./Schedule.ts"></script>