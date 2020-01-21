<template>
  <div class="test-content">
    <!-- <transition :duration="{ enter: 200, leave: 5000 }" name="zoom"> -->
    <div class="question-stage" v-if="questionIndex < quiz.questions.length" :key="questionIndex">
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
</template>

<script>
export default {};
</script>