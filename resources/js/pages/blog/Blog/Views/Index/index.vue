<template>
<blog-layout>
    <template v-slot:page-content>
        <!-- BANNER -->
        <div class="blog_banner">

        </div>
        <!-- BANNER -->
        <!-- BODY -->
        <div class="blog_post_sec_all">
            <div class="container">
                <div class="row">
                    <div class="cl-12 col-md-12 col-lg-9">
                        <div class="blog_post_left">
                            <div class="blog_post_sec">
                                <div class="blog_post_top">
                                </div>
                                <div class="blog_post">
                                    <h1 class="blog_post_h1">Blog</h1>

                                    <section id="articles">
                                        <!-- Source -->
                                        <div class="card flex-row mb-5" v-for="(blog, index) in list" :key="index">
                                            <img class="card-img-left example-card-img-responsive" :src="`/uploads/blogfeaturedimage/${blog.featuredImage}`" style="max-width: 300px;" />
                                            <div class="card-body">
                                                <h4 class="card-title h5 h4-sm">{{ blog.title }}</h4>
                                                <span><i class="fa-solid fa-eye mt-2 mb-2"></i> {{ blog.views }}</span>
                                                <p class="card-text">{{ blog.post_excerpt }}</p>
                                                <Link :href="`/post/${blog.slug}`" class="btn btn-sm btn-primary mt-5" style="background-color: #6f11f5; border:#6f11f5"> Read More </Link>
                                            </div>
                                        </div>

                                        <div class="text-center d-grid gap-2 d-md-block" v-if="showLoadMore">
                                            <button :disabled="loading" class="btn btn-sm btn-primary mt-5" style="background-color: #6f11f5; border:#6f11f5" v-html="textButton" @click.stop.prevent="loadMorePosts()"></button>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-12 col-lg-3">
                        <div class="blog_post_r8">
                            <h4 class="trnd_artcl_h4">TRENDING ARTICLES</h4>
                            <div class="blog_post_r8_all">
                                <!-- iteam -->
                                <div class="blog_post_r8_item">
                                    <div class="blog_post_item_lft">
                                        <img src="img/man3.jpg" alt="image">
                                    </div>
                                    <div class="blog_post_item_r8">
                                        <a href="">
                                            <h4 class="blog_post_item_r8_h4">
                                                The Upwork 100: 3 Things You May Have Missed
                                            </h4>
                                        </a>
                                        <a href="">
                                            <p class="author_name2">-Amy Sept</p>
                                        </a>
                                    </div>
                                </div>
                                <!-- iteam -->
                            </div>
                            <div class="course_price mar_t60">
                                <div class="course_price_top">
                                    <p>Share this post</p>
                                </div>
                                <div class="course_price_main" style="padding: 30px 0px 30px 17px">
                                    <ul class="share_social_ul dis_flx">
                                        <li>
                                            <a class="fb" href="">
                                                <i class="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="google" href="">
                                                <i class="fab fa-google-plus-g"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="instgrm" href="">
                                                <i class="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="twtr" href="">
                                                <i class="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="skpye" href="">
                                                <i class="fab fa-skype"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="utube" href="">
                                                <i class="fab fa-youtube"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="post_tags">
                                <h3 class="post_tags_h3">Popular Tags</h3>
                                <ul class="post_tags_ul">
                                    <li>
                                        <a href="">Design</a>
                                    </li>
                                    <li>
                                        <a href="">UI/UX</a>
                                    </li>
                                    <li>
                                        <a href="">Database</a>
                                    </li>
                                    <li>
                                        <a href="">PHP</a>
                                    </li>
                                    <li>
                                        <a href="">Lareval</a>
                                    </li>
                                    <li>
                                        <a href="">UI/UX</a>
                                    </li>
                                    <li>
                                        <a href="">Design</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- BODY -->
    </template>
</blog-layout>
</template>

<script>
import blogLayout from "@/layouts/blog/blogLayout.vue";
export default {
    components: {
        blogLayout
    },
    props: {
        title: String,
        categories: Array,
        blogs: Object,
        limit: Number
    },
    data() {
        return {
            loading: false,
            showLoadMore: true,
            textButton: 'Load more posts',
            page: 2,
            list: this.blogs.data
        }
    },
    methods: {
        async loadMorePosts() {
            let vm = this;
            this.loading = true;
            const res = await this.callApi('get', `/moreposts?page=${this.page}`);
            this.loading = false;
            if (res.status !== 200) {
                return this.e('Error');
            }

            if (res.data.data.data.length > 0) { //sorry, I want to sleep
                $.each(res.data.data.data, function (key, value) {
                    vm.list.push(value);
                });
                this.page = this.page + 1;
                return;
            }

            this.showLoadMore = false;
        }
    },
    watch: {
        loading() {
            this.loading ?
                (this.textButton =
                    '<i class="fas fa-spinner fa-spin"></i> Loading...') :
                (this.textButton = 'Load more posts');
        },
    },
}
</script>
