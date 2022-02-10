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
              <p class="_title0">Tags</p>
            </div>
            <div class="col-md-6 text-right">
              <button class="btn btn-sm btn-success" @click.prevent="newTag()">
                Add
              </button>
            </div>
          </div>

          <div v-if="tags.length > 0">
            <div class="_overflow _table_div">
              <table class="_table">
                <!-- TABLE TITLE -->
                <tr>
                  <th>id</th>
                  <th>Tag name</th>
                  <!-- <th>Category</th> -->
                  <th>Action</th>
                </tr>
                <!-- TABLE TITLE -->

                <tr v-for="(item, index) in tags" :key="index">
                  <td>{{ item.id }}</td>
                  <td class="_table_name">
                    {{ item.tagName }}
                  </td>
                  <!-- <td>Economy</td> -->
                  <td>
                    <button
                      class="btn btn-sm btn-info"
                      @click.prevent="editTag(item)"
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

        <div class="modal" tabindex="-1" id="addTagModal">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Adicionar tag</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="mb-3">
                  <label for="tagName" class="form-label">Tag name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="tagName"
                    v-model="data.tagName"
                  />
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary btn-sm"
                  data-bs-dismiss="modal"
                >
                  fechar
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-success"
                  @click.prevent="addTag"
                  :disabled="isAdding"
                  :loading="isAdding"
                >
                  {{ isAdding ? "Adding..." : "Add" }}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="modal" tabindex="-1" id="editTagModal">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Edit tag</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="mb-3">
                  <label for="tagName" class="form-label">Tag name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="tagName"
                    v-model="editData.tagName"
                  />
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary btn-sm"
                  data-bs-dismiss="modal"
                >
                  fechar
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-success"
                  @click.prevent="updateTag()"
                  :disabled="isAdding"
                  :loading="isAdding"
                >
                  {{ isAdding ? "Editing..." : "Edit" }}
                </button>
              </div>
            </div>
          </div>
        </div>
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
    tags: Array,
    error: String,
    warning: String,
    success: String,
  },
  data() {
    return {
      data: this.$inertia.form({
        tagName: "",
      }),
      editData: this.$inertia.form({
        tagName: "",
        id: "",
      }),
      isAdding: false,
      myModal: "",
      editModal: "",
    };
  },
  methods: {
    newTag() {
      this.myModal.show();
    },
    editTag(obj) {
      this.editData.tagName = obj.tagName;
      this.editData.id = obj.id;

      this.editModal.show();
    },
    addTag() {
      if (this.data.tagName.trim() == "")
        return this.e("tag name is required!");

      this.isAdding = true;
      this.data.post("/admin/tags/create", {
        onSuccess: () => {
          this.isAdding = false;
          if (this.warning) return this.w(this.warning);

          if (this.error) return this.e(this.error);

          this.myModal.hide();
          return this.s(this.success);
        },
      });
    },
    updateTag() {
      if (this.editData.tagName.trim() == "")
        return this.e("tag name is required!");

      this.isAdding = true;
      this.editData.post("/admin/tags/edit", {
        onSuccess: () => {
          this.isAdding = false;
          if (this.warning) return this.w(this.warning);

          if (this.error) return this.e(this.error);

          this.editModal.hide();
          return this.s(this.success);
        },
      });
    },
    delet(obj) {
      if (confirm("Are you sure you want too delete the tag " + obj.tagName)) {
        this.$inertia.post(
          "/admin/tags/delete",
          { id: obj.id },
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
  mounted() {
    this.myModal = new Modal(document.getElementById("addTagModal"));
    this.editModal = new Modal(document.getElementById("editTagModal"));
  },
  created() {},
};
</script>
