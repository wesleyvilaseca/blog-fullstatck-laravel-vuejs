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

    <div class="modal" tabindex="-1" id="addTagModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Adicionar tag</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label for="tagName" class="form-label">Tag name</label>
                        <input type="text" class="form-control" id="tagName" v-model="data.tagName" />
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">
                        fechar
                    </button>
                    <button type="button" class="btn btn-sm btn-success" @click.prevent="addTag" :disabled="isAdding" :loading="isAdding">
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
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
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
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    Modal
} from "bootstrap";
export default {
    data() {
        return {
            data: {
                tagName: "",
            },
            editData: {
                tagName: "",
                id: "",
            },
            tags: [],
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
        async addTag() {
            if (this.data.tagName.trim() == "")
                return this.e("tag name is required!");

            this.isAdding = true;
            const res = await this.callApi("post", "/tags/create", this.data);

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
            const res = await this.callApi("get", "/tags/all");
            if (res.status !== 200) return this.e("Error on create the tag list");

            this.tags = res.data.tags;
        },
        defaultFunc() {
            this.myModal.hide();
            this.editModal.hide();
            this.getAll();
            this.data.tagName = "";
            this.isAdding = false;
        },
    },
    mounted() {
        this.myModal = new Modal(document.getElementById("addTagModal"));
        this.editModal = new Modal(document.getElementById("editTagModal"));
    },
    created() {
        this.getAll();
    },
};
</script>
