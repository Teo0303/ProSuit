<template>
  <div>
    <div class="timer-block">{{ prettyTime(time)}}</div>
  </div>
</template>

<style>
.timer-block {
  font-weight: bold;
}
</style>

<script>
export default {
  props: {
    isFinished: Number
  },
  data() {
    return {
      isRunning: false,
      minutes: 0,
      seconds: 0,
      timer: null,
      time: 600,
      spentTime: 0,
      tweenedNumber: 0
    };
  },

  watch: {
    isFinished(newValue, oldValue) {
      this.stop();
    },

    time(newValue, oldValue) {
      if (newValue == 0) console.log("finished");
      // TweenLite.to(this.$data, 0.5, { tweenedNumber: newValue });
    }
  },

  computed: {
    countdown: {
      get() {
        return this.time;
      },
      set(newValue) {
        this.time = newValue;
      }
    }
  },

  created() {
    console.log("Countdown started", this.isFinished);
    if (this.isFinished == 0) {
      this.start();
    }
  },

  methods: {
    start() {
      this.isRunning = true;
      if (!this.timer) {
        this.timer = setInterval(() => {
          if (this.countdown > 0 && this.spentTime >= 0) {
            this.countdown--;
            this.spentTime++;
          } else {
            clearInterval(this.timer);
            this.sound.play();
            this.reset();
          }
        }, 1000);
      }
    },
    stop() {
      this.isRunning = false;
      clearInterval(this.timer);
      this.timer = null;
      this.time = 0;
      this.$emit("stopTimer", this.isRunning, this.spentTime);
    },

    prettyTime(time) {
      time = time / 60;
      let minutes = parseInt(time);
      let seconds = Math.round((time - minutes) * 60);
      if (minutes < 10 && seconds >= 10) {
        minutes = "0" + minutes;
      } else if (minutes < 10 && seconds < 10) {
        seconds = "0" + seconds;
        minutes = "0" + minutes;
      } else {
        seconds = "0" + seconds;
      }
      return minutes + ":" + seconds;
    }
  }
};
</script>