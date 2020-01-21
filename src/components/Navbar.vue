<template>
  <div class="container">
    <nav>
      <div class="logo nav-item">
        <router-link :to="'/'">
          <img src="../assets/ps-logo.png" alt />
        </router-link>
      </div>
      <div class="user nav-item">
        <div class="user-info">
          <div class="user-img">
            <img src="../assets/ava.png" alt />
          </div>
          <div class="user-info-details">
            <h4 class="user-name">Джамшид Пулатов</h4>
            <p class="user-email">j.pulatov@gmail.com</p>
          </div>
        </div>
        <div class="user-progress">
          <p class="title">Учебный прогресс</p>
          <p class="progress-info">
            <span class="progress-stage">Этап 2</span>
            <span class="progress-percent">82%</span>
          </p>
          <div class="progress-bar">
            <span class="progress-bar-active"></span>
          </div>
        </div>
        <router-link :to="'/materials'">
          <button class="btn btn-primary btn-dark">Продолжить обучение</button>
        </router-link>
      </div>
      <div class="navigation nav-item">
        <ul>
          <li>
            <img src="../assets/navicons/home-blue.svg" alt />
            <router-link :to="'/'">Главная</router-link>
          </li>
          <li>
            <img src="../assets/navicons/list-blue.svg" alt />
            <router-link :to="'/materials'">Учебный материал</router-link>
          </li>
          <li>
            <img src="../assets/navicons/tests-blue.svg" alt />
            <router-link :to="'/test'">Тесты</router-link>
          </li>
          <li>
            <img src="../assets/navicons/Book.svg" alt />
            <router-link :to="'/portfolio'">Портфолио</router-link>
          </li>
          <li>
            <img src="../assets/navicons/Shop.svg" alt />
            <router-link :to="'/library'">Библиотека</router-link>
          </li>
          <li>
            <!-- <router-link>Портфолио</router-link> -->
          </li>
        </ul>
      </div>
      <div class="bottom-links">
        <ul>
          <li>Настройки</li>
          <li>Справочный центр</li>
          <li>Политика конфиденциальности</li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style>
:root {
  --main-color: brown;
}

nav {
  width: 256px;
  height: 100%;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: 6px 0px 18px rgba(0, 0, 0, 0.06);
  padding-bottom: 25px;
  background-color: #fff;
}

.nav-item {
  padding-right: 24px;
  padding-left: 24px;
}

.navigation {
  font-weight: bold;
  text-align: left;
}

.navigation {
  margin-top: 40px;
}

.navigation ul {
  padding-left: 0;
  list-style: none;
}

.navigation li {
  margin-bottom: 24px;
  display: flex;
  align-items: center;
}

.navigation li img {
  width: 16px;
}

.navigation li > a {
  margin-left: 16px;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.01em;
  color: #334d6e;
}

.navigation li > a:hover {
  text-decoration: none;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.01em;
  color: #334d6e;
  opacity: 0.7;
}

.navigation li .router-link-exact-active {
  color: #109cf1;
}

.navigation li .router-link-exact-active:hover {
  color: #109cf1;
  opacity: 1;
}

.logo {
  padding-top: 18px;
  padding-bottom: 18px;
  border-bottom: 1px solid rgb(230, 230, 230);
}

.logo img {
  float: left;
}

/*  Navbar user info */
.user-info {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-top: 24px;
  padding-bottom: 15px;
}
.user-img img {
  border-radius: 50%;
  vertical-align: middle;
}
.user-info-details {
  padding-left: 12px;
}

.user-name {
  font-size: 14px;
  line-height: 17px;
  color: #192a3e;
  margin-bottom: 6px;
}
.user-email {
  font-size: 11px;
  line-height: 13px;
  letter-spacing: 0.01em;
  color: #90a0b7;
  text-align: left;
}

.progress-bar {
  position: relative;
  width: 100%;
  background: #ebeff2;
  height: 4px;
  border-radius: 3px;
}

.progress-bar-active {
  position: absolute;
  left: 0;
  top: 0;
  width: 70%;
  border-radius: 3px;
  background-color: #2ed47a;
  height: 100%;
}

.user-progress {
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);
  border-radius: 4px;
  padding: 12px 9px 16px 12px;
  margin-bottom: 16px;
}

.user-progress .title {
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.01em;
  color: #334d6e;
  font-weight: bold;
  text-align: left;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}

.progress-percent,
.progress-stage {
  color: #aeaeae;
  font-size: 12px;
}

.bottom-links {
  position: absolute;
  bottom: 34px;
  left: 0;
}

.bottom-links ul {
  list-style: none;
  text-align: left;
  padding-left: 24px;
}

.bottom-links li {
  margin-bottom: 16px;
  font-size: 11px;
  line-height: 13px;
  letter-spacing: 0.01em;
  color: #6accce;
  cursor: pointer;
}

.bottom-links li:hover {
  text-decoration: underline;
}

@media screen and (max-width: 768px) {
  nav .logo {
    display: none;
  }

  nav {
    display: none;
  }

  .content {
    margin-left: 0 !important;
  }
}
</style>



<script>
export default {
  name: "Navbar"
};
</script>