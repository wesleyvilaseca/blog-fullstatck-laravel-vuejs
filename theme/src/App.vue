<template>
  <div id="app">
    <div>
      <!--========== ADMIN SIDE MENU one ========-->
      <div class="_1side_menu">
        <div class="_1side_menu_logo">
          <h3 style="text-align: center">Logo Image</h3>
          <!--<img src="/img/logo.jpg" style="width: 108px;margin-left: 68px;"/>-->
        </div>

        <!--~~~~~~~~ MENU CONTENT ~~~~~~~~-->
        <div class="_1side_menu_content">
          <div class="_1side_menu_img_name">
            <!-- <img class="_1side_menu_img" src="/pic.png" alt="" title=""> -->
            <p class="_1side_menu_name">Admin</p>
          </div>

          <!--~~~ MENU LIST ~~~~~~-->
          <div class="_1side_menu_list">
            <ul class="_1side_menu_list_ul">
              <li>
                <a><Icon type="ios-speedometer" /> Overview</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--========== ADMIN SIDE MENU ========-->

      <!--========= HEADER ==========-->
      <div class="header">
        <div class="_2menu _box_shadow">
          <div class="_2menu_logo">
            <button>
              <ul class="open_button">
                <li>
                  <Icon type="ios-list" />
                </li>
                <!--<li><Icon type="ios-albums" /></li>-->
              </ul>
            </button>
          </div>
        </div>
      </div>
      <!--========= HEADER ==========-->
    </div>
    <router-view />
  </div>
</template>

<style scoped>
._1side_menu.toggled {
  left: 0px;
}

/* @media screen and (min-width: 768px) {
  ._1side_menu.toggled .content {
    padding-left: 250px;
  }
} */
</style>

<script>
export default {
  data() {
    return;
  },
  methods: {
    toggleBtn() {
      console.log("aqui");
    },
  },
};
</script>




