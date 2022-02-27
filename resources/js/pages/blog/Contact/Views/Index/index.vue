<template>
<blog-layout>
    <template v-slot:page-content>

        <!-- BANNER -->
        <div class="blog_banner">
            <div class="container">
                <div class="blog_banner_info">
                    <div class="blog_banner_info_title pad_b20">
                        <h2>Contact</h2>
                    </div>
                    <div class="blog_title_btm">
                        <ul class="blog_title_btm_ul dis_flx">
                            <li>
                                <a href="">
                                    Home<i class="fa fa-angle-right"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- BANNER -->

        <!-- BODY -->
        <div class="contact_page">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-8 col-lg-5">
                        <div class="cmnt_frm">
                            <h2 class="post_dtls_title2 pad_b20" style=" text-align: center;font-size: 28px;">Contact Me</h2>
                            <div class="cmnt_frm_all">
                                <div class="row">
                                    <div class="col-12 col-md-12 col-lg-12">
                                        <div class="cmnt_input">
                                            <p>NAME</p>
                                            <input type="text" placeholder="Enter your name">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-12 col-lg-12">
                                        <div class="cmnt_input">
                                            <p>E-MAIL</p>
                                            <input type="text" placeholder="Enter your E-MAIL">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-12 col-lg-12">
                                        <div class="cmnt_input">
                                            <p class="mar_b10">MESSAGE</p>
                                            <textarea placeholder="Type your comment" name="message" required=""></textarea>
                                        </div>
                                    </div>
                                    <div class="dtls_frm_btn mar_t20">
                                        <button class="btn1">send me</button>
                                    </div>
                                </div>
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
    data() {
        return {
            props: {
                title: String
            }
        }
    }
}
</script>
