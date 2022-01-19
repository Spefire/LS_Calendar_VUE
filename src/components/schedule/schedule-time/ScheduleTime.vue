<template>
  <div class="schedule-time">
    <div class="input-element">
      <span>Time</span>
      <input
        type="text"
        v-model="date"
        disabled>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./ScheduleTime.scss"></style>
<script lang="ts" src="./ScheduleTime.ts"></script>