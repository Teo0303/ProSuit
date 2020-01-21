<template>
  <div class="container main">
    <div class="content">
      <div class="portfolio-block">
        <div class="portfolio-block-head">
          <h1 class="portfolio-block-title">Работа</h1>
          <button
            class="btn btn-primary btn-dark ps-64"
            @click="showModal = true"
          >Добавить место работы</button>
        </div>
        <div class="workplace-list main-bg">
          <div class="workplace-item main-bg">
            <span class="worked-from working-date">
              <p>Февраль 2007</p>
              <span class="circle"></span>
            </span>
            <span class="worked-to working-date">
              <p>Январь 2013</p>
              <span class="circle"></span>
            </span>
            <div class="workplace-item-content">
              <h1 class="workplace-title">
                <span class="icon">
                  <img src="../assets/workplace-blue.png" alt />
                </span>
                Университет Инха в г. Ташкенте
              </h1>
              <p class="workplace-job">
                <span class="icon">
                  <img src="../assets/portfolio.png" alt />
                </span>
                Специалист по Маркетингу
              </p>
            </div>
          </div>
          <div class="workplace-item main-bg">
            <span class="worked-from working-date">
              <p>Январь 2013</p>
              <span class="circle"></span>
            </span>
            <span class="worked-to working-date">
              <p>Сентябрь 2016</p>
              <span class="circle"></span>
            </span>
            <div class="workplace-item-content">
              <h1 class="workplace-title">
                <span class="icon">
                  <img src="../assets/workplace-blue.png" alt />
                </span>
                Союз Молодежи Узбекистана
              </h1>
              <p class="workplace-job">
                <span class="icon">
                  <img src="../assets/portfolio.png" alt />
                </span>
                Начальник IT отдела
              </p>
            </div>
          </div>
          <div class="workplace-item main-bg">
            <span class="worked-from working-date">
              <p>Июнь 2019</p>
              <span class="circle"></span>
            </span>
            <span class="worked-to working-date">
              <p>Сейчас</p>
              <span class="circle"></span>
            </span>
            <div class="workplace-item-content">
              <h1 class="workplace-title">
                <span class="icon">
                  <img src="../assets/workplace-blue.png" alt />
                </span>
                Digital Genetation Uzbekistan
              </h1>
              <p class="workplace-job">
                <span class="icon">
                  <img src="../assets/portfolio.png" alt />
                </span>
                Генеральный директор
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="portfolio-block">
        <div class="portfolio-block-head">
          <h1 class="portfolio-block-title">Образование</h1>
          <button
            class="btn btn-primary btn-dark ps-64"
            @click="showModal = true"
          >Добавить место работы</button>
        </div>
        <div class="study-list">
          <div
            class="study-list-item main-bg main-bg-hover"
            v-for="(diploma, index) in diplomas"
            :key="index"
            @click="showLightbox2(diploma.name)"
          >
            <h1 class="study-title">
              <span class="icon">
                <img src="../assets/study.png" alt />
              </span>
              {{diploma.title}}
            </h1>
            <p class="study-years">{{diploma.years}}</p>
          </div>
        </div>
      </div>
      <div class="portfolio-block">
        <div class="portfolio-block-head">
          <h1 class="portfolio-block-title">Образование</h1>

          <button
            @click="showModal = true"
            ref="button"
            class="btn btn-primary btn-dark ps-64"
          >Добавить место работы</button>
        </div>
        <div class="certificates main-bg">
          <div class="certificates-block">
            <h1 class="certificates-title">Академические сертификаты:</h1>
            <div class="certificates-list certificate-simple">
              <div
                class="certificates-item main-bg main-bg-hover"
                v-for="(cert, index) in certificates"
                :key="index"
              >
                <img @click="showLightbox1(cert.name)" :src="cert.name" :alt="cert.alt" />
              </div>
            </div>
          </div>

          <div class="certificates-block">
            <h1 class="certificates-title">Почётные грамоты:</h1>
            <div class="certificates-list certificate-of-honor">
              <div
                class="certificates-item main-bg main-bg-hover"
                v-for="(image, index) in images"
                :key="index"
              >
                <img @click="showLightbox(image.name)" :src="image.name" :alt="image.alt" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ModalWindow v-if="showModal" @close="showModal = false"></ModalWindow>
    <lightbox id="mylightbox2" ref="lightbox2" :images="diplomas"></lightbox>
    <lightbox id="mylightbox1" ref="lightbox1" :images="certificates"></lightbox>
    <lightbox id="mylightbox" ref="lightbox" :images="images"></lightbox>
  </div>
</template>


<script>
import ModalWindow from "./ModalWindow";
import { certificates } from "./modules/certificates";
import lightbox from "vue-my-photos";

export default {
  data() {
    return {
      images: certificates.images,
      certificates: certificates.certificates,
      showModal: false,
      diplomas: certificates.diplomas
    };
  },

  components: {
    ModalWindow,
    lightbox
  },

  methods: {
    showLightbox: function(imageName) {
      this.$refs.lightbox.show(imageName);
    },
    showLightbox1: function(imageName) {
      this.$refs.lightbox1.show(imageName);
    },
    showLightbox2: function(imageName) {
      this.$refs.lightbox2.show(imageName);
    }

    // updateFilter(filterName) {
    //   this.galleryFilter = filterName;
    // }
  }
};
</script>

<style>
.portfolio-block {
  margin-bottom: 32px;
}

.portfolio-block-head {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 13px;
  align-items: center;
}

.portfolio-block-title {
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.01em;
  color: #334d6e;
}

.workplace-list {
  padding: 38px;
  padding-left: 160px;
}

.workplace-item {
  position: relative;
}

.study-list-item {
  padding: 32px;
  margin-bottom: 32px;
}

.main-bg-hover {
  cursor: pointer;
  transition: 0.3s all ease;
}

.main-bg-hover:hover {
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
  transition: 0.3s all ease;
}

.workplace-item:not(:last-child) {
  margin-bottom: 60px;
}

.working-date {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 120px;
  text-align: right;
}

.working-date p {
  font-size: 12px;
  line-height: 14px;
  text-align: right;
  letter-spacing: 0.01em;
  color: #334d6e;
}

.worked-from {
  top: -16px;
  left: -140px;
}

.worked-to {
  bottom: -16px;
  left: -140px;
}

.circle {
  display: block;
  z-index: 1;
  width: 16px;
  height: 16px;
  background-color: #fff;
  border: 4px solid #109cf1;
  border-radius: 50%;
  margin-left: 5px;
}

.workplace-item-content {
  padding: 30px;
}

.workplace-item-content:before {
  content: "";
  display: block;
  position: absolute;
  left: -34px;
  top: 0;
  bottom: 0;
  border: 1px dashed;
  border-color: #109cf1;
  border-width: 0 0 0 3px;
  overflow: hidden;
  z-index: 0;
}

.workplace-title,
.study-title {
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.01em;
  color: #334d6e;
  margin-bottom: 13px;
}

.workplace-job,
.study-years {
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.01em;
  color: #969696;
}

.workplace-item .icon,
.study-item .icon {
  margin-right: 5px;
}

.study-list-item .icon {
  margin-right: 21px;
}
.study-years {
  margin-left: 48px;
}

.certificates {
  display: flex;
}

.certificates-block {
  width: 50%;
  padding: 16px;
}

.certificates-title {
  font-size: 16px;
  line-height: 19px;
  text-align: left;
  letter-spacing: 0.01em;
  margin-bottom: 21px;
  color: #969696;
}

.certificates-list {
  display: flex;
  flex-flow: wrap;
  justify-content: flex-start;
}

.certificates-item {
  padding: 5px;
  margin-right: 20px;
  margin-bottom: 15px;
}

.certificate-of-honor img {
  width: 200px;
}

.certificate-simple img {
  width: 200px;
}
</style>


