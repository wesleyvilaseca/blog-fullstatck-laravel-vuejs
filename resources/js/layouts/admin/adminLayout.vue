<template>
<div>
    <div>
        <!--========== ADMIN SIDE MENU one ========-->
        <div class="_1side_menu" id="sidebar">
            <div class="_1side_menu_logo">
                <h3 style="text-align: center">Logo Image</h3>
            </div>

            <div class="_1side_menu_content">
                <div class="_1side_menu_img_name">
                    <p class="_1side_menu_name">Admin</p>
                </div>

                <div class="_1side_menu_list">
                    <ul class="_1side_menu_list_ul">
                        <li v-for="(item, index) in menu" :key="index">
                            <Link :href="item.Link" :class="{ 'router-link-exact-active' : item.Link === url }">
                            <Icon :type="item.Icon" /> {{ item.Title }}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!--========== ADMIN SIDE MENU ========-->

        <!--========= HEADER ==========-->
        <div class="header" id="header">
            <div class="_2menu _box_shadow">
                <div class="_2menu_logo">
                    <ul class="open_button">
                        <li>
                            <Icon type="ios-list" @click.prevent="btnToggle()" />
                        </li>
                        <!--<li><Icon type="ios-albums" /></li>-->
                    </ul>
                </div>
            </div>
        </div>
        <!--========= HEADER ==========-->
    </div>
    <div class="content" id="content">
        <slot name="page-content" />
    </div>
</div>
</template>

<style scoped>
._1side_menu.toggled {
    left: -248px;
}

.header.toggled {
    padding-left: 0px;
}

.content.toggled {
    margin-left: 0px;
}

@media screen and (max-width: 768px) {
    .content {
        margin-left: 0px;
    }
}
</style>

<script>
export default {
    name: "adminLayout",
    data() {
        return {
            url: "",
            menu: [{
                    Link: '/admin/home',
                    Title: 'Dashboard',
                    Icon: 'ios-speedometer'
                },
                {
                    Link: '/admin/tags',
                    Title: 'Tags',
                    Icon: 'ios-speedometer'
                },
                {
                    Link: '/admin/category',
                    Title: 'Category',
                    Icon: 'ios-speedometer'
                },
                {
                    Link: '/admin/users',
                    Title: 'Users',
                    Icon: 'ios-speedometer'
                }
            ]
        };
    },
    methods: {
        getURL() {
            this.url = window.location.pathname;
        },

        btnToggle() {
            let sidebar = document.getElementById("sidebar");
            let header = document.getElementById("header");
            let content = document.getElementById("content");

            if (sidebar.classList.contains("toggled")) {
                sidebar.classList.remove("toggled");
                header.classList.remove("toggled");
                content.classList.remove("toggled");
            } else {
                sidebar.classList.add("toggled");
                header.classList.add("toggled");
                content.classList.add("toggled");
            }
        },
    },
    created() {
        this.getURL();
    },
    mounted() {
        let w = window.innerWidth;
        if (w <= 660) this.btnToggle();
    },
};
</script>
