<template>
<blog-layout>
    <template v-slot:page-content>
        <section class="banner_sec">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-10 col-lg-8">
                        <div class="row">
                            <div class="col-12 col-md-4 col-lg-4" v-for="(category, index) in categories" :key="index">
                                <a href="">
                                    <div class="banner_box">
                                        <img :src="`/uploads/${category.iconImage}`" alt="" style="max-width: 60%;object-fit: cover;">
                                        <h3 class="banner_box_h3">{{ category.categoryName }}</h3>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- BANNER -->

        <!-- BODY -->
        <div class="home_body">
            <div class="container">
                <div class="latest_post">
                    <div class="latest_post_top">
                        <h1 class="latest_post_h1 brdr_line">Latest Blog</h1>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-6 col-lg-4" v-for="(latest, index) in latest_blogs" :key="index">
                            <Link :href="`/post/${latest.slug}`">
                                <div class="home_card">
                                    <div class="home_card_top">
                                        <img :src="`/uploads/blogfeaturedimage/${latest.featuredImage}`" alt="image" style="max-width: 100%;object-fit: cover;">
                                    </div>
                                    <div class="home_card_bottom">
                                        <div class="home_card_bottom_text">
                                            <!--<ul class="home_card_bottom_text_ul" v-for="(categ, index) in latest.blogcategories" :key="index">
                                                <li>
                                                    <a href="blog_post.html">engineering</a>
                                                    <span><i class="fas fa-angle-right"></i></span>
                                                </li>
                                                <li>
                                                    <a href="blog_post.html">data science and database</a>
                                                </li>
                                            </ul>-->
                                            <Link :href="`/post/${latest.slug}`">
                                                <h2 class="home_card_h2">{{ latest.title }}</h2>
                                            </Link>
                                            <p class="post_p">{{ latest.post_excerpt}}</p>
                                            <div class="home_card_bottom_tym">
                                                <div class="home_card_btm_left">
                                                    <img :src="`/uploads/profilepics/${latest.user.profilePic}`" alt="image" style="max-width: 100%;object-fit: cover;">
                                                </div>
                                                <div class="home_card_btm_r8">
                                                    <a href="contact_me.html">
                                                        <p class="author_name">{{ latest.user.name }}</p>
                                                    </a>
                                                    <ul class="home_card_btm_r8_ul">
                                                        <li>{{ latest.created_at }}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <!-- PAGINATION 
            <div class="pagination">
                <ul class="pagination_ul d-flex">
                    <li>
                        <a href="">
                            <i class="fas fa-chevron-left"></i>
                        </a>
                    </li>
                    <li>
                        <a href="">1</a>
                    </li>
                    <li>
                        <a href="">2</a>
                    </li>
                    <li>
                        <a href="">3</a>
                    </li>
                    <li>
                        <a href="">
                            <i class="fas fa-chevron-right"></i>
                        </a>
                    </li>
                </ul>
            </div>-->
            <!-- PAGINATION -->
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
        latest_blogs: Array,
    },
    data() {
        return {

        }
    }
}
</script>
