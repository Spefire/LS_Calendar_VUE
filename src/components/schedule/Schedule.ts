import { defineComponent } from "vue";

import ScheduleDate from "./schedule-date/ScheduleDate.vue";
import ScheduleTime from "./schedule-time/ScheduleTime.vue";

export default defineComponent({
  name: "Schedule",
  components: {
    ScheduleDate,
    ScheduleTime,
  },
});