<template>
  <div class="schedule-date">
    <div class="input-element">
      <span>Date</span>
      <input
        type="text"
        v-model="date"
        disabled>
    </div>
    <div class="calendar-header">
      <span class="primary-text">May 2018</span>
      <span>
        <span>left</span>
        <i class="icon" />
        <span>right</span>
      </span>
    </div>
    <div class="calendar-grid">
      <ScheduleDateOption
        v-for="(date, index) in dates"
        :value="date"
        :key="index" />
    </div>
  </div>
</template>

<style lang="scss" scoped src="./ScheduleDate.scss"></style>
<script lang="ts" src="./ScheduleDate.ts"></script>