<template>
  <div class="container main">
    <div>
      <div>
        <div class="content">
          <h1 class="page-headline">
            Учебные материалы |
            <span class="stage">Этап 2</span>
          </h1>
          <div class="list">
            <div class="list-title">Вы остановились здесь</div>
            <div class="list-item-container">
              <div class="list-item processing">
                <p class="list-item-title">Содержание указа президента РУз от 18 Апреля 2019 года</p>
                <router-link :to="'/article'" class="link-success">Продолжить</router-link>
              </div>
              <span class="list-icon">
                <img src="../../assets/List.png" alt />
              </span>
            </div>
          </div>
          <div class="list">
            <div class="list-title">Вы остановились здесь</div>
            <div class="list-item">
              <p class="list-item-title">Содержание указа президента РУз от 18 Апреля 2019 года</p>
              <span>
                <img src="Group.svg" alt />
              </span>
            </div>
          </div>
          <div class="list">
            <div class="list-title">Оставшиеся материалы</div>
            <div class="list-item">
              <p class="list-item-title">Содержание указа президента РУз от 18 Апреля 2019 года</p>
              <a href="#" class="link-primary">Открыть</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.main {
  width: 100%;
}

.content {
  padding: 36px;
  text-align: left;
  margin-left: 256px;
}

.page-headline {
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.01em;
  color: #192a3e;
  margin-bottom: 24px;
}

.list {
  margin-bottom: 36px;
  width: 60%;
  min-width: 600px;
}

.list-title {
  font-size: 14px;
  line-height: 17px;
  color: #9b9b9b;
  letter-spacing: 0.01em;
  margin-bottom: 16px;
  display: inline-block;
}

.list-item-container {
  position: relative;
}

.list-icon {
  position: absolute;
  right: -32px;
  top: 22px;
}

.list-item {
  width: 100%;
  padding: 22px 16px;
  background-color: #fff;
  box-sizing: border-box;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.list-item-title {
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.01em;
}

.processing {
  border: 2px solid #2ed47a;
}

@media screen and (max-width: 768px) {
  .list {
    width: 100%;
    min-width: 100%;
  }
}
</style>

<script>
export default {};
</script>