<template>
<div class="container-fluid">
    <!--~~~~~~~ TABLE ONE ~~~~~~~~~-->
    <div class="
        _1adminOverveiw_table_recent
        _box_shadow
        _border_radious
        _mar_b30
        _p20
      ">
        <div class="row">
            <div class="col-md-6">
                <p class="_title0">Category</p>
            </div>
            <div class="col-md-6 text-right">
                <button class="btn btn-sm btn-success" @click.prevent="newCategory()">
                    Add
                </button>
            </div>
        </div>

        <div v-if="categories.length > 0">
            <div class="_overflow _table_div">
                <table class="_table">
                    <!-- TABLE TITLE -->
                    <tr>
                        <th>id</th>
                        <th>Category name</th>
                        <th>Thumb</th>
                        <th>Action</th>
                    </tr>
                    <!-- TABLE TITLE -->

                    <tr v-for="(item, index) in categories" :key="index">
                        <td>{{ item.id }}</td>
                        <td class="_table_name">
                            {{ item.categoryName }}
                        </td>
                        <td class="table_image">
                            <img :src="`/uploads/${item.iconImage}`" alt="">
                        </td>
                        <td>
                            <button class="btn btn-sm btn-info" @click.prevent="editTag(item)">
                                Edit
                            </button>
                            <button class="btn btn-sm btn-danger" @click.prevent="delet(item)">
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

    <div class="modal" tabindex="-1" id="addCategory">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Adicionar category</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.stop.prevent="addCategory()">
                        <div class="mb-3">
                            <label for="name" class="form-label">Category name</label>
                            <input type="text" class="form-control" id="name" v-model="categoryAdd.name" />
                        </div>

                        <div class="mb-3">
                            <Upload type="drag" :headers="{ 'X-CSRF-TOKEN': token, 'X-Requested-With' : 'XMLHttpRequest' }" ref="uploads" :multiple="false" :on-success="handleSuccess" :format="['jpg', 'jpeg', 'png']" :max-size="2048" :on-format-error="handleFormatError" :on-exceeded-size="handleMaxSize" action="/app/upload">

                                <div style="padding: 20px 0">
                                    <Icon type="ios-cloud-upload" size="52" style="color: #3399ff" />
                                    <p>Click or drag files here to upload</p>
                                </div>
                            </Upload>
                            <div class="demo-upload-list" v-if="categoryAdd.iconImage">
                                <img :src="`/uploads/${categoryAdd.iconImage}`" alt="">
                                <div class="demo-upload-list-cover">
                                    <Icon type="ios-trash-outline" @click.prevent="deleteImage()"></Icon>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">
                                fechar
                            </button>
                            <button type="submit" class="btn btn-sm btn-success" :disabled="isAdding" :loading="isAdding">
                                {{ isAdding ? "Adding..." : "Add" }}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- <div class="modal" tabindex="-1" id="editTagModal">
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
    </div> -->

    <link rel="stylesheet" href="style.css">
</div>
</template>

<script>
import {
    Modal
} from "bootstrap";
export default {
    data() {
        return {
            categoryAdd: {
                name: "",
                iconImage: ""
            },
            categoryEdit: {
                name: "",
                id: "",
            },
            categories: [],
            isAdding: false,
            addModal: "",
            editModal: "",
            token: "",
        };
    },
    methods: {
        newCategory() {
            this.addModal.show();
        },
        editTag(obj) {
            this.editData.tagName = obj.tagName;
            this.editData.id = obj.id;

            this.editModal.show();
        },
        async addCategory() {
            if (this.categoryAdd.name.trim() == "") return this.e("category name is required!");
            if (this.categoryAdd.iconImage.trim() == "") return this.e("Icon is required!");

            this.isAdding = true;
            const res = await this.callApi("post", "/category/create", this.categoryAdd);

            if (res.status !== 200) {
                return this.e("erro na operação");
            }

            this.defaultFunc();
            return this.s(res.data.message);
        },
        async updateTag() {
            if (this.editData.tagName.trim() == "")
                return this.e("tag name is required!");

            this.isAdding = true;
            const res = await this.callApi("post", "/tags/edit", this.editData);

            if (res.status !== 200) {
                return this.e("erro na operação");
            }

            this.defaultFunc();
            return this.s(res.data.message);
        },
        async delet(obj) {
            if (confirm("Are you sure you want too delete the tag " + obj.tagName)) {
                const res = await this.callApi("post", "/tags/delete", {
                    id: obj.id
                });
                if (res.status !== 200) {
                    return this.e("erro na operação");
                }

                this.defaultFunc();
                return this.s(res.data.message);
            }
        },
        async getAll() {
            const res = await this.callApi("get", "/category/all");
            if (res.status !== 200) return this.e("Error on create the tag list");

            this.categories = res.data.categories;
        },
        handleView(name) {
            this.imgName = name;
            this.visible = true;
        },
        handleRemove(file) {
            const fileList = this.$refs.upload.fileList;
            this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
        },
        handleSuccess(res, file) {
            this.categoryAdd.iconImage = res;
        },
        handleFormatError(file) {
            this.$Notice.warning({
                title: 'The file format is incorrect',
                desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
            });
        },
        handleMaxSize(file) {
            this.$Notice.warning({
                title: 'Exceeding file size limit',
                desc: 'File  ' + file.name + ' is too large, no more than 2M.'
            });
        },
        defaultFunc() {
            this.addModal.hide();
            // this.editModal.hide();
            this.getAll();
            this.categoryAdd.name = "";
            this.categoryAdd.iconImage = "";
            this.isAdding = false;
        },
        async deleteImage() {
            let image = this.categoryAdd.iconImage;
            this.categoryAdd.iconImage = '';
            const res = await this.callApi('post', '/app/upload-delete', {
                imagename: image
            });
            this.$refs.uploads.clearFiles();
            if (res.status !== 200) {
                this.categoryAdd.iconImage = image;
                return this.e("erro na operação");
            }
        }
    },
    mounted() {
        this.token = window.Laravel.csrfToken;
        this.addModal = new Modal(document.getElementById("addCategory"));
        // this.editModal = new Modal(document.getElementById("editTagModal"));
    },
    created() {
        this.getAll();
    },
};
</script>
