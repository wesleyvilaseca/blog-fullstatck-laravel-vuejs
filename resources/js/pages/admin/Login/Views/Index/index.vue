<template>
  <div class="back">
    <div class="div-center">
      <div class="content">
        <div class="text-center mb-2">
          <h5>Login</h5>
        </div>
        <hr />
        <form @submit.stop.prevent="login()">
          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input
              type="email"
              class="form-control form-control-sm"
              id="exampleInputEmail1"
              placeholder="Email"
              v-model="data.email"
              required
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Senha</label>
            <input
              type="password"
              class="form-control form-control-sm"
              id="exampleInputPassword1"
              placeholder="Senha"
              v-model="data.password"
              required
            />
          </div>
          <div class="d-grid">
            <button
              type="submit"
              class="btn btn-primary btn-sm mt-2"
              :disabled="loading"
            >
              {{ loading ? "Loading..." : "Login" }}
            </button>
          </div>
          <hr />
          <!-- <button type="button" class="btn btn-link">Signup</button> -->
          <!-- <div align="right">
            <button type="button" class="btn btn-link">Reset Password</button>
          </div> -->
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import "../../Styles/style.css";

export default {
  props: {
    tags: Array,
    error: String,
    warning: String,
    success: String,
  },
  data() {
    return {
      loading: false,
      data: this.$inertia.form({
        email: "",
        password: "",
      }),
    };
  },
  methods: {
    login() {
      //   return console.log(this.data);
      this.loading = true;
      this.data.post("/login", {
        onSuccess: () => {
          this.loading = false;
          if (this.warning) {
            this.warning = "";
            return this.w(this.warning);
          }

          if (this.error) {
            this.error = "";
            return this.e(this.error);
          }
        },
      });
    },
  },
};
</script>