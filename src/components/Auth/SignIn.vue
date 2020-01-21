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
          </div>
          <div class="auth main-bg">
            <div class="auth-title sign-in">
              <p>Войти через Единую Систему Идентификации</p>
              <router-link :to="'/'">
                <button class="btn btn-primary btn-dark">Войти через OneID</button>
              </router-link>
            </div>

            <div class="auth-info">
              <p>
                Нет аккаунта?
                <router-link :to="'/sign-out'">Зарегистрируйтесь прямо сейчас</router-link>
              </p>
            </div>
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
  padding-top: 55px;
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

.sign-in p {
  margin-bottom: 16px;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.01em;
  color: #192a3e;
}
</style>

<script>
export default {};
</script>