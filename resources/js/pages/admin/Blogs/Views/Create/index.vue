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
          <form action="">
            <div class="row">
              <div class="col-md-6">
                <p class="_title0">{{ title }}</p>
              </div>
              <div class="col-md-6 text-right">
                <button
                  class="btn btn-sm btn-success"
                  @click.stop.prevent="save()"
                >
                  Save
                </button>
              </div>

              <div>
                <InputComponent
                  :extraclass="'mt-2'"
                  :extrainputclass="'form-control-sm'"
                  :label="'Title'"
                  :type="'text'"
                  v-model="blog.title"
                  :required="'required'"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label"
                  >Meta description</label
                >
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  v-model="blog.metaDescription"
                ></textarea>
              </div>

              <div class="mt-2 mb-3">
                <Select
                  filterable
                  multiple
                  placeholder="Select category"
                  v-model="blog.category_id"
                >
                  <Option
                    v-for="(category, index) in categories"
                    :key="index"
                    :value="category.id"
                    >{{ category.categoryName }}</Option
                  >
                </Select>
              </div>

              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label"
                  >Post excerpt</label
                >
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  v-model="blog.post_excerpt"
                ></textarea>
              </div>

              <div class="mt-2 mb-3">
                <Select
                  filterable
                  multiple
                  placeholder="Select tags"
                  v-model="blog.tag_id"
                >
                  <Option
                    v-for="(tag, index) in tags"
                    :key="index"
                    :value="tag.id"
                    >{{ tag.tagName }}</Option
                  >
                </Select>
              </div>

              <div>
                Blog
                <div class="blog_editor">
                  <editor
                    :config="config"
                    ref="editor"
                    autofocus
                    holder-id="codex-editor"
                    :init-data="initData"
                    @save="onSave"
                  />
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
      },
      articleHTML: "",
      category: [],
      tag: [],
      isCreating: false,
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

      this.$inertia.post("/admin/blogs/store-blogpost", this.blog, {
         onSuccess: () => {
          this.isAdding = false;
          if (this.warning) return this.w(this.warning);

          if (this.error) return this.e(this.error);

          return this.s(this.success);
        },
      })

      // const res = this.callApi("post", "/admin/post/store-blogpost", this.blog);
      // if (res.status !== 200) {
      //   return this.e(res.data.msg);
      // }
    },
    async save() {
      const res = await this.$refs.editor.save();
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
  created() {},
};
</script>
