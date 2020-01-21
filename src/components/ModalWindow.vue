<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="close-btn" @click="$emit('close')">
            <img src="../assets/close.png" alt />
          </div>
          <form class="auth-form">
            <label for="organization">
              Выберите организацию
              <select name id="organization">
                <option value>Inha University in Tashkent</option>
                <option value>Tashkent University of Information Technology</option>
              </select>
            </label>

            <label value="Эл. почта" for>Должность</label>
            <input type="text" class="input" id placeholder="На какой вы должности?" />

            <label value="Эл. почта" for="start-date">Дата начала работы</label>
            <input type="text" class="input" id="end-date" placeholder="Дата" />

            <label value="Эл. почта" for="email">Дата конца работы</label>
            <input type="text" class="input" id="email" placeholder="Дата" />


            <router-link :to="'/'">
              <button class="btn btn-primary btn-dark ps-64">Добавить</button>
            </router-link>
          </form>
        </div>
      </div>
    </div>
  </transition>
</template>

<style >
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  text-align: left;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  position: relative;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

select {
  background: #ffffff;
  border: 1px solid #dfdfdf;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 18px 12px;
  width: 100%;
  margin-bottom: 24px;
  margin-top: 12px;
}

input {
  margin-top: 12px;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
}

.close-btn img {
  width: 16px;
  height: 16px;
  cursor: pointer;
}
</style>

<script>
export default {
  computed: {
    closeEvent() {
      return this.$emit("close");
    }
  }
};
</script>