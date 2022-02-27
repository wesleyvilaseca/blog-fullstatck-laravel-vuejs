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
                                    <ul class="blog_post_top_ul">
                                        <li>
                                            <Link href="/blog"> Blog </Link>
                                            <i class="ms-2 fa-solid fa-chevron-right"></i>

                                        </li>
                                        <li> {{ post.title }}</li>
                                    </ul>
                                </div>
                                <div class="blog_post_top">
                                    <i class="fa-solid fa-eye"></i> {{ post.views }}
                                </div>
                                <div class="blog_post">
                                    <h1 class="blog_post_h1"></h1>
                                    <div class="post_author_sec">
                                        <div class="post_author_left">
                                            <div class="post_author_img">
                                                <img :src="`/uploads/profilepics/${post.user.profilePic}`" alt="image" style="max-width: 100%;object-fit: cover;">
                                            </div>
                                            <div class="post_author_info">
                                                <a href="contact_me.html">
                                                    <h4 class="post_author_title">{{ post.user.name }}</h4>
                                                </a>
                                                <P>Wesley is a full-stack developer skilled with PHP | Laravel, Javascript and many other language</P>
                                            </div>
                                        </div>
                                        <div class="post_author_r8">
                                            <i class="fas fa-share-alt"></i>
                                        </div>
                                    </div>
                                    <div v-html="post.post"></div>
                                    <div class="riview_post">
                                        <ul class="riview_post_ul">
                                            <li><i class="far fa-thumbs-up"></i>122 Like</li>
                                            <li><i class="far fa-comments"></i>10 Comment</li>
                                            <li><i class="far fa-share-square"></i>4 Share</li>
                                        </ul>
                                    </div>
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
        post: Object,
    },
    data() {
        return {}
    },
    methods: {},
    watch: {},
}
</script>
