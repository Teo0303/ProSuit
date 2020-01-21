<template>
  <div>
    <div class="container">
      <div class="auth-container">
        <div class="center-block">
          <div class="headline">
            <img src="../../assets/logo-big.png" alt />
            <h1 class="intro">
              Добро пожаловать на портал тестирования
              пригодности кадров Республики Узбекистан
            </h1>
            <ul class="levels-list registration">
              <li class="level-item completed-lvl">
                <div class="level-icon">
                  <img src="../../assets/true2.png" alt />
                </div>
                <span>OneID</span>
              </li>
              <li class="level-item completed-lvl">
                <div class="level-icon">
                  <img src="../../assets/true2.png" alt />
                </div>
                <span>Регистрация</span>
              </li>

              <li class="level-item">
                <div class="level-icon">
                  <img src="../../assets/Lock.png" alt />
                </div>
                <span>Готово</span>
              </li>
            </ul>
          </div>

          <div class="auth main-bg">
            <div class="auth-title">
              <p>Регистрация</p>
            </div>
            <form class="auth-form">
              <label value="Эл. почта" for="email">Введите номер ИНПС</label>
              <input type="number" class="input" id="email" />

              <label value="Эл. почта" for="organization">В какой организации вы работаете?</label>
              <select2 :options="options" v-model="selected">
                <option disabled value="0">Selected one</option>
              </select2>
              <input
                type="password"
                id="organization"
                class="input"
                placeholder="Напишите организацию"
              />
              <label for="adress">Адресс:</label>
              <input type="text" id="adress" class="input" placeholder="Напишите организацию" />
              <router-link :to="'/'">
                <button class="btn btn-primary btn-dark">Зарегистрироваться</button>
              </router-link>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style >
.auth {
  width: 100%;
  text-align: left;
}

.auth-container {
  position: relative;
  width: 450px;
}

.auth-container .center-block {
  position: absolute;
}

.auth-container .auth-form {
  padding: 28px 16px 24px;
}

label {
  margin-bottom: 8px;
}

.auth-info {
  padding: 24px 16px;
  background-color: #f6f8fa;
  font-size: 12px;
  line-height: 12px;
  text-align: center;
  letter-spacing: 0.01em;
}

.auth a {
  font-size: 12px;
  line-height: 12px;
  color: #109cf1;
}

.auth-title {
  padding: 16px;
  border-bottom: 1px solid #ebeff2;
}

.intro {
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  letter-spacing: 0.01em;
  margin: 40px 0;
  color: #192a3e;
}

.input {
  background: #ffffff;
  border: 1px solid #dfdfdf;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 18px 12px;
  width: 100%;
  margin-bottom: 24px;
}

input:focus {
  border: 1px solid #109cf1;
  border-radius: 4px;
}

.registration .level-item {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  /* justify-content: center; */
}

.registration .level-icon:after {
  width: 150px;
}

.registration {
  margin-bottom: 32px !important;
}
</style>

<script>
import select2 from "../Elements/Select";
export default {
  data() {
    return {
      selected: 2,
      options: [{ id: 1, text: "Hello" }, { id: 2, text: "World" }]
    };
  },
  components: {
    select2
  }
};
</script>