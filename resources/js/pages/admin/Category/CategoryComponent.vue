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
                <button class="btn btn-sm btn-success" @click.prevent="$refs.modalAdd.newCategory()">
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
                            <button class="btn btn-sm btn-info" @click.prevent="$refs.modalEdit.editCategory(item)">
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

    <modal-add-category-component ref="modalAdd" />
    <modal-edit-category-component ref="modalEdit" />
</div>
</template>

<script>
import "./style.css";
import ModalAddCategoryComponent from "./ModalAddCategoryComponent.vue";
import ModalEditCategoryComponent from "./ModalEditCategoryComponent.vue";
export default {
    components: {
        'modal-add-category-component': ModalAddCategoryComponent,
        'modal-edit-category-component': ModalEditCategoryComponent
    },
    data() {
        return {
            categories: [],
            token: "",
        };
    },
    methods: {
        async getAll() {
            const res = await this.callApi("get", "/category/all");
            if (res.status !== 200) return this.e("Error on create the tag list");

            this.categories = res.data.categories;
        },
        async delet(obj) {
            if (confirm("Are you sure you want too delete the tag " + obj.tagName)) {
                const res = await this.callApi("post", "/category/delete", {
                    id: obj.id
                });

                if (res.status !== 200) return this.e("erro na operação");

                this.getAll();
                return this.s(res.data.message);
            }
        }
    },
    mounted() {},
    created() {
        this.getAll();
    },
};
</script>
