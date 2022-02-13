<template>
  <div class="mb-3" :class="extraclass">
    <label for="disabledSelect" class="form-label">{{ label }}</label>
    <select
      :class="extrainputclass"
      class="form-select"
      :value="value"
      @input="updateValue($event.target.value)"
    >
      <option disabled>Select a option</option>
      <option
        v-for="(item, index) in list"
        :key="index"
        :value="item[indexKey]"
      >
        {{ item[title] }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SelectBoxComponent",
  props: {
    list: Array,
    label: String,
    value: String,
    indexKey: String,
    title: String,
    extrainputclass: String,
    extraclass: String,
  },
  methods: {
    updateValue: function (value) {
      this.$emit("input", value);
    },
  },
};
</script>
