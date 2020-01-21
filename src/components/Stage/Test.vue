<template>
  <div class="container main">
    <div class="content flex test-block">
      <div class="test main-bg">
        <div class="test-state">
          <!-- <progress
            :value="(questionIndex/quiz.questions.length)*100"
            max="100" 
          >{{(questionIndex/quiz.questions.length)*100}}%</progress>-->
          <div class="test-state-active" v-bind:style="{width: computedWidth}"></div>
        </div>

        <div class="test-content">
          <!-- <transition :duration="{ enter: 200, leave: 5000 }" name="zoom"> -->
          <div
            class="question-stage"
            v-if="questionIndex < quiz.questions.length"
            :key="questionIndex"
          >
            <h1>
              {{questionIndex +1 + ") " + quiz.questions[questionIndex].text}}
              <!-- O’zbekiston Respublikasi prezidentining 2019 yil 18 apreldagi 118 sonli qarorning asosiy maqsadi nimaga qaratilgan? -->
            </h1>

            <div class="options">
              <div
                class="option"
                v-for="(response, index) in quiz.questions[questionIndex].responses"
                :key="index"
                @click="selectOption(index)"
                :class="{'active-option': userResponses[questionIndex] == index} "
              >
                <span class="option-num">
                  {{index+1}}
                  <!-- <img src="../../assets/true-thin.png" alt /> -->
                  <!-- <img src="../../assets/wrong-thin.png" alt /> -->
                </span>
                <p class="option-desc">{{response.text}}</p>
              </div>
            </div>
            <div class="flex space-between">
              <button class="btn btn-primary btn-dark ps-64" @click="prev()">Предыдущий</button>
              <button
                class="btn btn-primary btn-dark ps-64"
                :class="{'btn-success': questionIndex == userResponses.length - 1}"
                @click="next()"
              >{{(questionIndex == userResponses.length - 1) ? 'Проверить' : 'Следющиий'}}</button>
            </div>
          </div>
          <!-- Question Completed -->
          <div class="test-result" v-if="testIsFinished" v-key="questionIndex">
            <h1 class="result-percent">{{score() / quiz.questions.length * 100}}%</h1>
            <p class="result-numbers">
              {{score()}} правильных ответов
              <span>из {{quiz.questions.length}}</span>
              <span>{{`Потрачено: ${spentTime.minute} минут, ${spentTime.seconds} секунды`}}</span>
            </p>
            <button class="btn btn-primary btn-dark">Прейти к следующему этапу</button>
          </div>
          <!-- </transition> -->
        </div>
      </div>
      <div class="sidebars">
        <div class="sidebar main-bg mb-16">
          <div class="timer">
            <p class="timer-title">
              <img src="../../assets/clock.png" alt />
              <span>Оставшееся время:</span>
            </p>
            <Countdown class="time" :is-finished="finished" v-on:stopTimer="showTimeSpent"></Countdown>
          </div>
        </div>
        <div class="sidebar main-bg mb-16">
          <div class="test-navigation">
            <div class="test-theme">
              <p class="theme-subtitle">Тест по теме</p>
              <div class="theme-title flex">
                <div>
                  <img src="../../assets/headphone.png" alt class="icon" />
                </div>
                <p>Содержание указа президента РУз от 18 Апреля 2019 года</p>
              </div>
            </div>
            <div class="test-navigation-bar">
              <ul class="test-navigation-list">
                <li
                  :class="{'completed' : userResponses[index] != null, 'selected' : questionIndex == index}"
                  v-for="(tests, index) in quiz.questions"
                  :key="index"
                  @click="goToTest(index)"
                >{{index+1}}</li>
              </ul>
            </div>
          </div>
        </div>
        <button class="btn btn-primary btn-dark">Пройти обученине снова</button>
      </div>
    </div>
  </div>
</template>


<script>
import { quiz, userResponseSkelaton } from "../modules/tests";
import Vue from "vue";
import Countdown from "./Countdown";

export default {
  data() {
    return {
      quiz: quiz,
      questionIndex: 0,
      userResponses: userResponseSkelaton,
      isActive: false,
      corrects: [],
      finished: 0,
      spentTime: {
        minute: 0,
        seconds: 0
      }
    };
  },

  // mounted() {
  //   this.questionIndex = 0;
  //   this.userResponses = Array(this.quiz.questions.length).fill(null);
  // },

  components: {
    Countdown
  },

  computed: {
    computedWidth() {
      return (this.questionIndex / quiz.questions.length) * 100 + "%";
    },

    testIsFinished() {
      if (this.questionIndex >= this.quiz.questions.length) {
        this.finished = 1;
        return true;
      }
      return false;
    }
  },

  mounted() {
    this.questionIndex = 0;
    this.userResponses = Array(this.quiz.questions.length).fill(null);
  },

  methods: {
    restart() {
      this.questionIndex = 0;
      this.userResponses = Array(this.quiz.questions.length).fill(null);
    },

    selectOption(index) {
      if (this.userResponses[this.questionIndex] == index) {
        Vue.set(this.userResponses, this.questionIndex, null);
      } else if (
        this.userResponses[this.questionIndex] == null ||
        this.userResponses[this.questionIndex] != index
      )
        Vue.set(this.userResponses, this.questionIndex, index);
      console.log(this.userResponses);
    },
    /// Only for multiple
    selectMultiple(index) {
      let responseOrder = Array(4).fill(null);
      let orderIndex = 0;

      if (
        responseOrder[orderIndex] == null ||
        responseOrder[orderIndex] != index
      ) {
        Vue.set(responseOrder, orderIndex, index);
      } else if (responseOrder[orderIndex] == index) {
        Vue.set(responseOrder, orderIndex, null);
        console.log("null");
      }
      //  else if (!responseOrder.includes(null)) {
      //   Vue.set(this.userResponses, this.questionIndex, responseOrder);
      // }
      console.log(responseOrder, this.userResponses);
    },

    showTimeSpent(isRunning, spentTime) {
      let time = spentTime / 60;
      let minutes = parseInt(time);
      let seconds = Math.round((time - minutes) * 60);
      this.spentTime.minute = minutes;
      this.spentTime.seconds = seconds;
    },

    next() {
      if (this.questionIndex < this.quiz.questions.length) {
        this.questionIndex++;
        // this.questionIndex = this.userResponses.indexOf(
        //   this.userResponses.find(value => {
        //     return value == null;
        //   })
        // );
      }
    },

    prev() {
      if (this.quiz.questions.length > 0) this.questionIndex--;
    },

    goToTest(index) {
      this.questionIndex = index;
    },

    score() {
      var score = 0;
      for (let i = 0; i < this.userResponses.length; i++) {
        if (
          typeof this.quiz.questions[i].responses[this.userResponses[i]] !==
            "undefined" &&
          this.quiz.questions[i].responses[this.userResponses[i]].correct
        ) {
          score++;
        }
      }
      console.log(this.testIsFinished);
      return score;
    }
  }
};
</script>

<style lang="scss">
@import "_test.scss";
</style>
