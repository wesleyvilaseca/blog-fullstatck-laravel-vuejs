<template>
  <div id="app">
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
              <li>
                <router-link to="/"
                  ><Icon type="ios-speedometer" /> DashBoard
                </router-link>
              </li>
              <li>
                <router-link to="/tags">
                  <Icon type="ios-speedometer" /> Tags
                </router-link>
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
      <router-view />
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
  data() {
    return {};
  },
  methods: {
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
  mounted() {
    let w = window.innerWidth;
    if (w <= 660) this.btnToggle();
    
  },
};
</script>




