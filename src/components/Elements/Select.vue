<template>
  <select>
    <slot></slot>
  </select>
</template>

<script>
import jquery from "jquery";
import select2 from "vue-select2";

export default {
  name: "select2",
  props: ["options", "value"],
  mounted() {
    var vm = this;
    $(this.$el)
      .select2({ data: this.options })
      .val(this.value)
      .trigger("change")
      .on("change", () => {
        vm.$emit("input", this.value);
      });
  },

  watch: {
    value(value) {
      $(this.$el)
        .val(value)
        .trigger("change");
    },

    options(options) {
      $(this.$el)
        .empty()
        .select2({ data: options });
    },

    destroyed: function() {
      $(this.$el)
        .off()
        .select2("destroy");
    }
  }
};
</script>