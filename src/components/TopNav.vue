<template>
  <div class="top-nav">
    <div class="mobile-top-nav">
      <div class="top-nav-logo">
        <img src="../assets/ps-logo.png" alt />
      </div>
      <div class="burgerMenu">
        <img src="../assets/menu.png" alt class="src" />
      </div>
    </div>
    <div class="desktop-top-nav">
      <div class="controls">
        <div>
          <router-link :to="'/materials'">
            <div class="go-back" v-if="hideBtn">
              <img src="../assets/goback.png" alt />
              <p>Назад</p>
            </div>
          </router-link>
        </div>
        <div class="control-btns">
          <img src="../assets/notification.png" alt />

          <router-link :to="'/sign-in'">
            <img src="../assets/logout16.png" alt />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.top-nav {
  width: 100%;
  height: 60px;
  background-color: #fff;
  border-bottom: 1px solid #ebeff2;
}

.desktop-top-nav {
  display: block;
  height: 100%;
}

.mobile-top-nav {
  display: none;
}

.desktop-top-nav .control-btns img {
  margin-right: 26px;
}

.desktop-top-nav .controls {
  margin-left: 292px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

@media screen and (max-width: 768px) {
  .mobile-top-nav {
    display: flex;
    height: 100%;
    padding: 0 36px;
    justify-content: space-between;
    align-items: center;
  }

  .desktop-top-nav {
    display: none;
  }
}
</style>

<script>
export default {
  props: ["hideBtn"],
  computed: {
    notArticle() {
      console.log(this);
      return this.$route.path != "'/article'";
    }
  }
};
</script>