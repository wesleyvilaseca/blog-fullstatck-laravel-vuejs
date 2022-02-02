<template>
<div>
    <div class="modal" tabindex="-1" id="editCategoryModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Edit tag</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.stop.prevent="editCategory()">
                        <div class="mb-3">
                            <label for="name" class="form-label">Category name</label>
                            <input type="text" class="form-control" id="name" v-model="categoryEdit.name" />
                        </div>

                        <div class="mb-3">
                            <Upload v-show="!categoryEdit.iconImage" type="drag" :headers="{ 'X-CSRF-TOKEN': token, 'X-Requested-With' : 'XMLHttpRequest' }" ref="uploads" :multiple="false" :on-success="handleSuccessEdit" :format="['jpg', 'jpeg', 'png']" :max-size="2048" :on-format-error="handleFormatErrorEdit" :on-exceeded-size="handleMaxSizeEdit" action="/app/upload">

                                <div style="padding: 20px 0">
                                    <Icon type="ios-cloud-upload" size="52" style="color: #3399ff" />
                                    <p>Click or drag files here to upload</p>
                                </div>
                            </Upload>
                            <!-- <div class="demo-upload-list" v-if="categoryAdd.iconImage">
                                <img :src="`/uploads/${categoryAdd.iconImage}`" alt="">
                                <div class="demo-upload-list-cover">
                                    <Icon type="ios-trash-outline" @click.prevent="deleteImage()"></Icon>
                                </div>
                            </div> -->
                            <div class="demo-upload-list" v-if="categoryEdit.iconImage">
                                <img :src="`/uploads/${categoryEdit.iconImage}`" alt="">
                                <div class="demo-upload-list-cover">
                                    <Icon type="ios-trash-outline" @click.prevent="deleteImageEdit(false)"></Icon>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary btn-sm" @click.prevent="closeModalEdit()">
                                fechar
                            </button>
                            <button type="submit" class="btn btn-sm btn-success" :disabled="isEditing" :loading="isEditing">
                                {{ isEditing ? "editing..." : "edit" }}
                            </button>
                        </div>
                    </form>
                </div>
                <!-- <div class="modal-body">
                    <div class="mb-3">
                        <label for="tagName" class="form-label">Tag name</label>
                        <input type="text" class="form-control" id="tagName" v-model="editData.tagName" />
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">
                        fechar
                    </button>
                    <button type="button" class="btn btn-sm btn-success" @click.prevent="updateTag()" :disabled="isAdding" :loading="isAdding">
                        {{ isAdding ? "Editing..." : "Edit" }}
                    </button>
                </div> -->
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
    name: "ModalEditCategoryComponent",
    data() {
        return {
            categoryEdit: {
                name: "",
                id: "",
                iconImage: ""
            },
            editModal: "",
            token: "",
            isEditing: "",
            first: true,
        };
    },
    methods: {
        editCategory(obj) {
            this.categoryEdit.name = obj.categoryName;
            this.categoryEdit.iconImage = obj.iconImage;
            this.categoryEdit.id = obj.id;

            this.editModal.show();
            this.first = true;
        },
        closeModalEdit() {
            this.editModal.hide();
            if(!this.first){
                //apaga a imagem do servidor
            }
            this.first = true;
        },
        handleViewEdit(name) {
            this.imgName = name;
            this.visible = true;
        },
        handleRemoveEdit(file) {
            const fileList = this.$refs.upload.fileList;
            this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
        },
        handleSuccessEdit(res, file) {
            this.categoryAdd.iconImage = res;
        },
        handleFormatErrorEdit(file) {
            this.$Notice.warning({
                title: 'The file format is incorrect',
                desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
            });
        },
        handleMaxSizeEdit(file) {
            this.$Notice.warning({
                title: 'Exceeding file size limit',
                desc: 'File  ' + file.name + ' is too large, no more than 2M.'
            });
        },
        async deleteImageEdit() {
            if (this.first) {
                this.categoryEdit.iconImage = "";
                this.first = false;
                return;
            }
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
        this.editModal = new Modal(document.getElementById("editCategoryModal"));
    },
}
</script>
