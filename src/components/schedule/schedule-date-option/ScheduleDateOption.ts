import { defineComponent } from "vue";

export default defineComponent({
  name: "ScheduleDateOption",
  props: {
    value: {
      type: String,
      required: true
    }
  }
});
