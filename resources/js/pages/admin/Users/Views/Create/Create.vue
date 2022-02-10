<template>
  <adminLayout>
    <template v-slot:page-content>
      novo usuario
    </template>
  </adminLayout>
</template>

<script>
import { Modal } from "bootstrap";
import adminLayout from "@/layouts/admin/adminLayout.vue";

export default {
  components: {
    adminLayout,
  },
  props: {},
  data() {
    return {
    }
  },
  methods: {
   
  },
  mounted() {

  },
  created() {},
};
</script>
