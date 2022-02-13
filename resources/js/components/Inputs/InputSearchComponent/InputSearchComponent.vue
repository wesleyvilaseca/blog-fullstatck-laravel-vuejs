<template>
  <div :class="classes">
    <label for="exampleInputPassword1" class="form-label"
      >{{label}}</label
    >
    <input
      :type="type"
      class="form-control"
      v-model="searching"
      autocomplete="off"
      @keyup="search"
    />
  </div>
</template>

<script>
export default {
  name: "InputSearchComponent",
  props: {
    type: String,
    label: String,
    searchMethod: String,
  },
  data(){
      return{
          searching: ""
      }
  },
  methods: {
      search () {
          this.searchMethod(this.searching);
      }
  }
};
</script>
