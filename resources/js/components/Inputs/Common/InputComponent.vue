<template>
  <div class="mb-3" v-bind:class="extraclass">
    <label for="exampleInputEmail1" class="form-label">{{ label }}</label>
    <input
      :type="type"
      class="form-control"
      v-bind:class="extrainputclass"
      :placeholder="placeholder"
      :required="required"
      :value="value"
      @input="updateValue($event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "InputComponent",
  props: {
    type: String,
    label: String,
    value: String,
    extraclass: String,
    placeholder: String,
    required: String,
    extrainputclass: String,
  },
   methods: {
      updateValue: function (value) {
        this.$emit('input', value)
      }
    }
};
</script>
