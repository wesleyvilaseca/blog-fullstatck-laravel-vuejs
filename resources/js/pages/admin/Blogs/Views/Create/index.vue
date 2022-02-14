<template>
  <adminLayout>
    <template v-slot:page-content>
      <div class="container-fluid">
        <!--~~~~~~~ TABLE ONE ~~~~~~~~~-->
        <div
          class="
            _1adminOverveiw_table_recent
            _box_shadow
            _border_radious
            _mar_b30
            _p20
          "
        ></div>

        <form action="">
          <div class="row">
            <div class="col-md-6">
              <p class="_title0">{{ title }}</p>
            </div>
            <div class="col-md-6 text-right">
              <button class="btn btn-sm btn-success" @click.prevent="create()">
                Save
              </button>
            </div>
          </div>

          <div>
            <QuillEditor
              theme="snow"
              toobal="full"
              v-model:content="data.content"
              contentType="html"
            />
          </div>
        </form>
      </div>
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
  props: {
    title: String,
    error: String,
    warning: String,
    success: String,
  },
  data() {
    return {
      data: this.$inertia.form({
        content: ""
      })
    };
  },
  methods: {
    onSave() {
      console.log("on save");
    },

    save() {
      console.log("save only");
    },
  },
  mounted() {},
  created() {},
};
</script>
