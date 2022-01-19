import { defineComponent, ref } from "vue";

import ScheduleDateOption from "../schedule-date-option/ScheduleDateOption.vue";

export default defineComponent({
  name: "ScheduleDate",
  components: {
    ScheduleDateOption,
  },
  
  setup() {
    const listDate = [];

    for(let i = 1; i <= 31; i++) {
      listDate.push(i.toString());
    }
    const dates = ref(listDate);

    return {
      dates
    };
  },
});
