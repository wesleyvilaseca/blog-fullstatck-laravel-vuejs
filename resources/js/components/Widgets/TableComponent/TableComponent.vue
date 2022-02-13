<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="(obj, index) in config" :key="index">{{ obj.title }}</th>
        <th v-if="isEdit || isDelet">#</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in data" :key="index">
        <td v-for="(obj, ind) in config" :key="ind">{{ row[obj.key] }}</td>

        <td v-if="isEdit || isDelet">
          <template v-if="isEdit">
            <button
              class="btn btn-outline-primary btn-sm m-1"
              @click="edit(row)"
            >
              <i class="fas fa-pencil-alt"></i>
            </button>
          </template>
          <template v-if="isDelet">
            <button
              class="btn btn-outline-danger btn-sm m-1"
              @click="delet(row)"
            >
              <i class="fas fa-trash"></i>
            </button>
          </template>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import Table from "./Table";
export default Table;
</script>
