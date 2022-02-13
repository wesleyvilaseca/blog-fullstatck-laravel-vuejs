<template>
  <div class="card mb-3***">
    <div class="card-header"><h4>{{type}}</h4></div>
    <div class="card-body">
      <p class="card-text mt-4 d-flex justify-content-between">
        <i :class="['fa ico', icon]" style="font-size: 20px"></i>
        <span>{{qtd}}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent1",
  props: {
      type: String,
      qtd: String,
      icon: String
  },
};
</script>