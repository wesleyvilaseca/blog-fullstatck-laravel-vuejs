<template>
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
                        <Upload 
                        v-show="!categoryAdd.iconImage" 
                        type="drag" :headers="{ 'X-CSRF-TOKEN': token, 'X-Requested-With' : 'XMLHttpRequest' }"
                         ref="uploads" :multiple="false"
                         :on-success="handleSuccessAdd" 
                         :format="['jpg', 'jpeg', 'png']" 
                         :max-size="2048" :on-format-error="handleFormatErrorAdd" 
                         :on-exceeded-size="handleMaxSizeAdd" action="/app/upload">

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
</template>
<script>
import "./style.css";
import {
    Modal
} from "bootstrap";
export default {
    name: "ModalAddCategoryComponent",
    data() {
        return {
            categoryAdd: {
                name: "",
                iconImage: ""
            },
            isAdding: false,
            editModal: "",
            token: "",
        };
    },
    methods: {
        newCategory() {
            this.addModal.show();
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
        handleViewAdd(name) {
            this.imgName = name;
            this.visible = true;
        },
        handleRemoveAdd(file) {
            const fileList = this.$refs.upload.fileList;
            this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
        },
        handleSuccessAdd(res, file) {
            this.categoryAdd.iconImage = res;
        },
        handleFormatErrorAdd(file) {
            this.$Notice.warning({
                title: 'The file format is incorrect',
                desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
            });
        },
        handleMaxSizeAdd(file) {
            this.$Notice.warning({
                title: 'Exceeding file size limit',
                desc: 'File  ' + file.name + ' is too large, no more than 2M.'
            });
        },
        defaultFunc() {
            this.addModal.hide();
            this.$parent.getAll();
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
    },
    created() {
    },
};
</script>