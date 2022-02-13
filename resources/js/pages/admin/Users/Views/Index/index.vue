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
              <p class="_title0">Users</p>
            </div>
            <div class="col-md-6 text-right">
              <Link class="btn btn-sm btn-success" href="/admin/users/create">
                Add
              </Link>
            </div>
          </div>

          <div v-if="users.length > 0">
            <div class="_overflow _table_div">
              <table class="_table">
                <!-- TABLE TITLE -->
                <tr>
                  <th>id</th>
                  <th>User Name</th>
                  <th>User Email</th>
                  <th>Action</th>
                </tr>
                <!-- TABLE TITLE -->

                <tr v-for="(user, index) in users" :key="index">
                  <td>{{ user.id }}</td>
                  <td class="_table_name">
                    {{ user.name }}
                  </td>
                  <td class="">
                    {{ user.email }}
                  </td>
                  <td>
                    <Link
                      class="btn btn-sm btn-info"
                      :href="`/admin/users/edit/${user.id}`"
                    >
                      Edit
                    </Link>
                    <button
                      class="btn btn-sm btn-danger"
                      @click.stop.prevent="delet(user)"
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
import adminLayout from "@/layouts/admin/adminLayout.vue";

export default {
  components: {
    adminLayout,
  },
  props: {
    users: Array,
    error: String,
    warning: String,
    success: String,
  },
  data() {
    return {};
  },
  methods: {
    delet(obj) {
      if (confirm("Are you sure you want too delete the user " + obj.name)) {
        this.$inertia.post(
          `/admin/users/delete/${obj.id}`,
          {
            onSuccess: () => {
              if (this.warning) return this.w(this.warning);
              if (this.error) return this.e(this.error);
              return this.s(this.success);
            },
          }
        );
      }
    },
  },
  mounted() {},
  created() {},
};
</script>
