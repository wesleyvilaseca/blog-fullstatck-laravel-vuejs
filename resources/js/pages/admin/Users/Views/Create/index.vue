<template>
  <adminLayout>
    <template v-slot:page-content>
      <section>
        <div>
          <h5>{{ title }}</h5>
        </div>
      </section>

      <section>
        <form @submit.stop.prevent="create()">
          <div class="mt-2 mb-2">
            <button type="submit" class="btn btn-primary btn-sm me-2">
              {{ user ? "Editar" : "Salvar" }} <i class="far fa-save"></i>
            </button>
          </div>
          <div class="row">
            <div class="col-md-7">
              <InputComponent
                :extraclass="'mt-2'"
                :extrainputclass="'form-control-sm'"
                :label="'User name'"
                :type="'text'"
                v-model="data.name"
                :required="'required'"
              />
            </div>

            <div class="col-md-5">
              <SelectBoxComponent
                :extraclass="'mt-2'"
                :extrainputclass="'form-control-sm'"
                :list="user_type_list"
                :label="'User type'"
                v-model="data.userType"
                :indexKey="'id'"
                :title="'name'"
              />
            </div>

            <div class="col-md-6">
              <InputComponent
                :extrainputclass="'form-control-sm'"
                :extraclass="'mt-2'"
                :label="'User Password'"
                :type="'password'"
                v-model="data.password"
              />
            </div>

            <div class="col-md-6">
              <InputComponent
                :extrainputclass="'form-control-sm'"
                :extraclass="'mt-2'"
                :label="'User Email'"
                :type="'email'"
                v-model="data.email"
                :required="'required'"
              />
            </div>
          </div>
        </form>
      </section>
    </template>
  </adminLayout>
</template>

<script>
import adminLayout from "@/layouts/admin/adminLayout.vue";
import InputComponent from "@/components/Inputs/Common/InputComponent.vue";
import SelectBoxComponent from "@/components/Selects/SelectBoxComponent/SelectBoxComponent.vue";

export default {
  components: {
    adminLayout,
    InputComponent,
    SelectBoxComponent,
  },
  props: {
    user: Object,
    title: String,
    error: String,
    warning: String,
    success: String,
  },
  data() {
    return {
      user_type_list: [
        {
          id: 0,
          name: "Admin",
        },
        {
          id: 1,
          name: "Editor",
        },
      ],
      data: this.$inertia.form({
        name: "",
        email: "",
        password: "",
        userType: "",
        id: "",
      }),
    };
  },
  methods: {
    create() {
      if (!this.user && !this.data.password) {
        return this.w("Password is required");
      }
      
      let route = this.user
        ? `/admin/users/update/${this.user.id}`
        : "/admin/users/store";

      this.data.post(route, {
        onSuccess: () => {
          if (this.warning) return this.w(this.warning);

          if (this.error) return this.e(this.error);
        },
      });
    },
  },
  mounted() {},
  created() {
    if (this.user) {
      this.data.name = this.user.name;
      this.data.email = this.user.email;
      this.data.userType = this.user.userType;
      this.data.id = this.user.id;
    }
  },
};
</script>
