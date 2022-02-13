<template>
  <div class="position-absolute drop-list">
    <div class="list">
      <ul>
        <li
          class="d-block"
          v-for="(item, index) in obj"
          :key="index"
          @click="select(item)"
        >
          {{ item[itenKey] }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import "./Style.css";
export default {
  name: "SearchDropdownListComponent",
  props: {
      obj: Object,
      itenKey: String,
      selectMethod: String
  },
  methods: {
      select(obj) {
          this.selectMethod(obj);
      }
  }
};
</script>
