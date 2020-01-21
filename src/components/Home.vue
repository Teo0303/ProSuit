<template>
  <div class="container main">
    <div class="content flex home-blocks">
      <div class="home-block">
        <h1 class="page-headline">Статус:</h1>
        <div class="levels-main main-bg">
          <ul class="levels-list">
            <li class="level-item completed-lvl">
              <div class="level-icon">
                <img src="../assets/true2.png" alt />
              </div>
              <span>1 этап</span>
            </li>
            <li class="level-item completed-lvl">
              <div class="level-icon">
                <img src="../assets/true2.png" alt />
              </div>
              <span>2 этап</span>
            </li>
            <li class="level-item current-lvl">
              <div class="level-icon">
                <img src="../assets/clock-white.png" alt />
              </div>3 этап
            </li>
            <li class="level-item">
              <div class="level-icon">
                <img src="../assets/Lock.png" alt />
              </div>4 этап
            </li>
          </ul>
        </div>
        <div class="main-bg">
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
        </div>
        <router-link :to="'/materials'">
          <button class="btn btn-primary btn-dark">Продолжить обучение</button>
        </router-link>
      </div>
      <div class="home-block">
        <h1 class="page-headline">Результаты тестов:</h1>
        <div class="main-bg home-results">
          <h1 class="page-headline">
            <img src="../assets/tick-sm.png" alt />
            Этап 1
          </h1>
          <ul class="result-stats">
            <li>
              <p>Промежуточные тесты (средний бал)</p>
              <span class="stats-percent">78%</span>
            </li>
            <li>
              <p>Финальный тест</p>
              <span class="stats-percent">78%</span>
            </li>
          </ul>
        </div>
        <div class="home-results main-bg">
          <h1 class="page-headline">
            <img src="../assets/tick-sm.png" alt />
            Этап 2
          </h1>
          <ul class="result-stats">
            <li>
              <p>Промежуточные тесты (средний бал)</p>
              <span class="stats-percent">78%</span>
            </li>
            <li>
              <p>Финальный тест</p>
              <span class="stats-percent">78%</span>
            </li>
          </ul>
        </div>

        <div class="home-results main-bg">
          <h1 class="page-headline">
            <img src="../assets/clock-sm.png" alt />
            Этап 3
          </h1>
          <ul class="result-stats">
            <li>
              <p>Промежуточные тесты (средний бал)</p>
              <span class="stats-percent">78%</span>
            </li>
            <li>
              <p>Финальный тест</p>
              <span class="stats-percent">78%</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style >
.home-block {
  width: 40%;
  margin-right: 64px;
}

.home-results {
  padding: 24px;
  margin-bottom: 24px;
}

.result-stats {
  list-style: none;
  padding: 0;
  margin: 0;
}

.result-stats li {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.01em;
  color: #535353;
}

.result-stats li:not(:last-child) {
  border-bottom: 1px solid #eee;
  margin: 0 0 12px 0;
  padding: 0 0 12px 0;
}

.stats-percent {
  font-size: 18px;
  line-height: 21px;
  text-align: right;
  letter-spacing: 0.01em;
  font-weight: bold;
  color: #2ed47a;
}

.levels-main {
  padding: 32px 12px;
  margin-bottom: 24px;
}

.levels-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
}

.level-icon {
  width: 52px;
  height: 52px;
  margin-bottom: 12px;
  border-radius: 50%;
  position: relative;
  background-color: #d1d5d3;
}

.level-item {
  color: #334d6e;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.01em;
}

.current-lvl {
  color: #109cf1;
}

.completed-lvl .level-icon {
  background-color: #2ed47a;
}

.current-lvl .level-icon {
  background-color: #109cf1;
}

.current-lvl .level-icon:after {
  background-color: #d1d5d3;
}

.level-icon:after {
  content: " ";
  position: absolute;
  top: 26px;
  left: 52px;
  width: 120px;
  height: 2px;
  background-color: #2ed47a;
}

.level-item:last-child > .level-icon:after {
  content: " ";
  width: 0;
  height: 0;
}

.level-icon img {
  position: absolute;
  top: 14.5px;
  left: 18px;
}

.completed-lvl .level-icon img {
  top: 15px;
  left: 16px;
}
.current-lvl .level-icon img {
  top: 13px;
  left: 13.5px;
}

@media screen and (max-width: 320px) {
}

@media screen and (max-width: 480px) {
}

@media screen and (max-width: 768px) {
}

@media screen and (max-width: 1024px) {
  .home-blocks {
    display: flex !important;
    flex-direction: column;
  }

  .home-block {
    width: 100% !important;
  }

  .home-block:not(:last-child) {
    margin-bottom: 24px;
  }

  .level-icon:after {
    width: 150px;
  }
}

@media screen and (max-width: 1200px) {
  .home-block {
    width: 45%;
  }

  .home-block:last-child {
    margin-right: 0;
  }
}
</style>
<script>
export default {};
</script>