<template>
<adminLayout>
    <template v-slot:page-content>
        <div class="container-fluid">
            <!--~~~~~~~ TABLE ONE ~~~~~~~~~-->
            <div class="
            _1adminOverveiw_table_recent
            _box_shadow
            _border_radious
            _mar_b30
            _p20
          ">
                <form action="">
                    <div class="row">
                        <div class="col-md-6">
                            <p class="_title0">{{ title }}</p>
                        </div>
                        <div class="col-md-6 text-right">
                            <button class="btn btn-sm btn-success" @click.stop.prevent="save()">
                                {{ blog.id ? 'Edit' : 'Save'}}
                            </button>
                            <Link class="btn btn-sm btn-darkx" href="/admin/blogs">
                            Voltar
                            </Link>
                        </div>

                        <div>
                            <div style="margin-top: 40px" v-if="blog.id && blog_.featuredImage" align="center">
                                <img :src="`/uploads/blogfeaturedimage/${blog_.featuredImage}`" style="max-width: 100px;" />
                            </div>

                            <div class="row">
                                <div class="col-md-6">
                                    <label for="formFile" class="form-label">Featured Image</label>
                                    <input class="form-control" type="file" id="formFile" @change="change" />
                                </div>
                            </div>

                            <InputComponent :extraclass="'mt-2'" :extrainputclass="'form-control-sm'" :label="'Title'" :type="'text'" v-model="blog.title" :required="'required'" />
                        </div>

                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Meta description</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="blog.metaDescription"></textarea>
                        </div>

                        <div class="mt-2 mb-3">
                            <Select filterable multiple placeholder="Select category" v-model="blog.category_id">
                                <Option v-for="(category, index) in categories" :key="index" :value="category.id">{{ category.categoryName }}</Option>
                            </Select>
                        </div>

                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Post excerpt</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="blog.post_excerpt"></textarea>
                        </div>

                        <div class="mt-2 mb-3">
                            <Select filterable multiple placeholder="Select tags" v-model="blog.tag_id">
                                <Option v-for="(tag, index) in tags" :key="index" :value="tag.id">{{ tag.tagName }}</Option>
                            </Select>
                        </div>

                        <div>
                            Blog
                            <div class="blog_editor">
                                <editor :config="config" ref="editor" autofocus holder-id="codex-editor" :init-data="initData" @save="onSave" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </template>
</adminLayout>
</template>

<script>
import adminLayout from "@/layouts/admin/adminLayout.vue";
import InputComponent from "@/components/Inputs/Common/InputComponent.vue";

import "../../Styles/style.css";

export default {
    components: {
        adminLayout,
        InputComponent,
    },
    props: {
        title: String,
        categories: Array,
        tags: Array,
        error: String,
        warning: String,
        success: String,

        blog_: Object,
        tags_: Array,
        categories_: Array,
    },
    data() {
        return {
            config: {
                image: {},
                field: "image",
                types: "image/*",
            },
            initData: null,
            blog: {
                title: "",
                post: "",
                post_excerpt: "",
                metaDescription: "",
                category_id: [],
                tag_id: [],
                jsonData: null,
                featuredImage: "",
                id: ""
            },
            articleHTML: "",
            category: [],
            tag: [],
            isCreating: false,
            initData: null,
        };
    },
    methods: {
        async onSave(response) {
            var data = response;
            await this.outputHtml(data.blocks);
            this.blog.post = await this.articleHTML;
            this.blog.jsonData = JSON.stringify(data);

            if (this.blog.post.trim() == "") return this.e("Post is required");
            if (this.blog.title.trim() == "") return this.e("Title is required");
            if (this.blog.post_excerpt.trim() == "")
                return this.e("Post exerpt is required");
            if (this.blog.metaDescription.trim() == "")
                return this.e("Meta description is required");
            if (!this.blog.tag_id.length) return this.e("Tag is required");
            if (!this.blog.category_id.length) return this.e("Category is required");

            let route = this.blog.id ? `/admin/blogs/${this.blog.id}/update` : "/admin/blogs/store-blogpost";

            this.$inertia.post(route, this.blog, {
                onSuccess: () => {
                    this.isAdding = false;
                    if (this.warning) return this.w(this.warning);

                    if (this.error) return this.e(this.error);

                    return this.s(this.success);
                },
            });
        },
        async save() {
            const res = await this.$refs.editor.save();
        },

        change(e) {
            if (e.target.files[0]["type"].split('/')[0] !== "image") {
                document.getElementById("formFile").value = "";
                return this.w('Only file image type is permited!');
            }
            let filesize = e.target.files[0].size;
            let filesizeMB = (filesize / (1024 * 1024)).toFixed(2);
            if (filesizeMB > 5) {
                document.getElementById("formFile").value = "";
                return this.w('Max file size permited is 5mb');
            }
            this.blog.featuredImage = e.target.files[0];
        },

        outputHtml(articleObj) {
            articleObj.map((obj) => {
                switch (obj.type) {
                    case "paragraph":
                        this.articleHTML += this.makeParagraph(obj);
                        break;
                    case "image":
                        this.articleHTML += this.makeImage(obj);
                        break;
                    case "header":
                        this.articleHTML += this.makeHeader(obj);
                        break;
                    case "raw":
                        this.articleHTML += `<div class="ce-block">

<div class="ce-block__content">

<div class="ce-code">

<code>${obj.data.html}</code>

</div>

</div>

</div>\n`;
                        break;
                    case "code":
                        this.articleHTML += this.makeCode(obj);
                        break;
                    case "list":
                        this.articleHTML += this.makeList(obj);
                        break;
                    case "quote":
                        this.articleHTML += this.makeQuote(obj);
                        break;
                    case "warning":
                        this.articleHTML += this.makeWarning(obj);
                        break;
                    case "checklist":
                        this.articleHTML += this.makeChecklist(obj);
                        break;
                    case "embed":
                        this.articleHTML += this.makeEmbed(obj);
                        break;
                    case "delimeter":
                        this.articleHTML += this.makeDelimeter(obj);
                        break;
                    default:
                        return "";
                }
            });
        },
    },
    mounted() {},
    created() {
        if (this.blog_) {
            this.blog.title = this.blog_.title;
            this.blog.post_excerpt = this.blog_.post_excerpt;
            this.blog.metaDescription = this.blog_.metaDescription;
            this.blog.jsonData = this.blog_.jsonData;
            this.blog.id = this.blog_.id;

            this.initData = JSON.parse(this.blog_.jsonData);

            for (let t of this.tags_) {
                this.blog.tag_id.push(t.tag_id);
            }

            for (let c of this.categories_) {
                this.blog.category_id.push(c.category_id);
            }
        }
    },
};
</script>
