<template>
  <div class="card mt-2 mb-2">
    <div class="card-header">Departamento selecionado</div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item" v-for="(item, index) in obj" :key="index">
          {{ item[itenKey] }}
          <span
            class="ms-5 fs-5 text-danger"
            @click="unselectDepartament(index)"
            v-if="unselect"><i class="fas fa-times"></i
          ></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardListComponent",
  props: {
    list: Object,
    itenKey: String,
    unselect: Boolean,
  },
  data() {
    return {
        obj: this.list,
    };
  },
  methods: {
    unselectDepartament(index) {
      this.obj.splice(index, 1);
      // const filter = this.departaments_selected.filter(element => element !== departament);
      // this.departaments_selected = filter;
    },
  },
};
</script>
