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
        >
          <div class="row">
            <div class="col-md-6">
              <p class="_title0">Title</p>
            </div>
            <div class="col-md-6 text-right">
              <Link class="btn btn-sm btn-success" href="/admin/blogs/create">
                Add
              </Link>
            </div>
          </div>

          <div v-if="blogs.length > 0">
            <div class="_overflow _table_div">
              <table class="_table">
                <!-- TABLE TITLE -->
                <tr>
                  <th>id</th>
                  <th>Name</th>
                  <!-- <th>Category</th> -->
                  <th>Action</th>
                </tr>
                <!-- TABLE TITLE -->

                <tr v-for="(item, index) in blogs" :key="index">
                  <td>{{ item.id }}</td>
                  <td class="_table_name">
                    {{ item.title }}
                  </td>
                  <!-- <td>Economy</td> -->
                  <td>
                    <button
                      class="btn btn-sm btn-info"
                      @click.prevent="edit(item)"
                    >
                      Edit
                    </button>
                    <button
                      class="btn btn-sm btn-danger"
                      @click.prevent="delet(item)"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div v-else class="text-center">Não há registros</div>
        </div>
        <!-- <Page :total="100" /> -->
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
    blogs: Array,
    error: String,
    warning: String,
    success: String,
  },
  data() {
    return {

    };
  },
  methods: {
  },
  mounted() {

  },
  created() {},
};
</script>
