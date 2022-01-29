<template>
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

      <div v-if="tags.lenth > 0">
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
                <button class="btn btn-sm btn-info">Edit</button>
                <button class="btn btn-sm btn-danger">Delete</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div v-else class="text-center">Não há registros</div>
    </div>
    <!-- <Page :total="100" /> -->

    <div class="modal" tabindex="-1" id="addTagModal">
      <div class="modal-dialog modal-dialog-centered">
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
            <p>Modal body text goes here.</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary btn-sm"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-sm btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from "bootstrap";
export default {
  data() {
    return {
      tags: "",
    };
  },
  methods: {
    newTag() {
      var myModal = new Modal(document.getElementById("addTagModal"));
      myModal.show();
    },
    async getAll() {
      const { data } = await this.callApi("post", "tags/all");
      this.tags = data.tags;
    },
  },
  mounted() {},
  created() {
    this.getAll();
  },
};
</script>
