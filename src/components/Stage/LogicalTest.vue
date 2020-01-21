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

        <div class="test-content style">
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

            <draggable
              class="options logical-3"
              tag="ul"
              v-model="quiz.questions[questionIndex].responses"
              v-bind="dragOptions"
              @start="drag = true"
              @end="drag = false"
            >
              <transition-group type="transition" :name="!drag ? 'flip-list' : null">
                <div
                  class="option"
                  v-for="(element, index) in quiz.questions[questionIndex].responses"
                  :key="index"
                  @click="grabbing = !grabbing"
                  :class="{'grabbing' : grabbing}"
                >
                  <span class="option-order">{{ index + 1 }}</span>
                  {{element.text }}
                </div>
              </transition-group>
            </draggable>

            <!-- ////////////LOGICAL

            <div class="options logical-2">
              <div
                class="option"
                v-for="(response, index) in quiz.questions[questionIndex].responses"
                :key="index"
                @click="selectMultiple(index)"
                :class="{'active-option': answerIndex.includes(index)}"
              >
                <span class="option-num">{{showOrder(index)}}</span>
                <p class="option-desc">{{response.text}}</p>
              </div>
            </div>-->
            <!--             
            <div class="options-logical">
              <label class="option">
                <input type="radio" value="23" name="rad" />
                <span class="radio-circle"></span>
              </label>

              <label class="option">
                <input type="radio" value="23" name="rad" />
                <span class="radio-circle"></span>
              </label>

              <label class="option">
                <input type="radio" value="23" name="rad" />
                <span class="radio-circle"></span>
              </label>

              <label class="option">
                <input type="radio" value="23" name="rad" />
                <span class="radio-circle"></span>
              </label>

              <label class="option">
                <input type="radio" value="23" name="rad" />
                <span class="radio-circle"></span>
              </label>

              <label class="option">
                <input type="radio" value="23" name="rad" />
                <span class="radio-circle"></span>
              </label>
            </div>-->

            <div class="center">
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
import draggable from "vuedraggable";

export default {
  data() {
    return {
      quiz: quiz,
      questionIndex: 0,
      userResponses: userResponseSkelaton,
      isActive: false,
      answerIndex: [],
      grabbing: false,
      finished: 0,
      drag: false,
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
    Countdown,
    draggable
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
    },
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  },

  mounted() {
    this.questionIndex = 0;
    this.userResponses = Array(this.quiz.questions.length).fill(null);
    localStorage.clear();
  },

  methods: {
    selectOption(index) {
      if (this.userResponses[this.questionIndex] == index) {
        Vue.set(this.userResponses, this.questionIndex, null);
      } else if (
        this.userResponses[this.questionIndex] == null ||
        this.userResponses[this.questionIndex] != index
      )
        Vue.set(this.userResponses, this.questionIndex, index);
      console.log(this.quiz.questions[questionIndex].responses);
    },

    /// Only for multiple

    selectMultiple(index) {
      if (this.answerIndex.includes(index)) {
        this.answerIndex = this.answerIndex.filter(value => {
          return value != index;
        });
        return;
      }
      this.answerIndex.push(index);

      if (this.answerIndex.length >= 4) {
        Vue.set(this.userResponses, this.questionIndex, this.answerIndex);
      }
    },

    showOrder(index) {
      return this.answerIndex.indexOf(index) + 1;
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

        console.log(this.quiz.questions[this.questionIndex].responses);

        localStorage.setItem(
          this.questionIndex.toString(),
          JSON.stringify(this.answerIndex)
        );
        this.answerIndex = [];
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

      if (this.userResponses[this.questionIndex] != null) {
        this.answerIndex = JSON.parse(
          localStorage.getItem(this.questionIndex.toString())
        );
      }

      console.log(this.questionIndex);
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
