<template>
  <div class="container">
    <div class="player-inner">
      <vue-plyr ref="plyr">
        <audio crossorigin playsinline>
          <source :src="gotAudio" type="audio/mp3" />

          <!-- <source src="audio.ogg" type="audio/ogg" /> -->
        </audio>
      </vue-plyr>
    </div>
  </div>
</template>

<style>
.player-inner {
  width: 100%;
}

.plyr_progress {
  width: 100%;
}

.plyr__controls {
  justify-content: space-between !important;
}

.plyr__progress__container {
  width: 77%;
}

.plyr__volume {
  width: 110px !important;
}

.plyr__controls > .plyr__control:first-child,
.plyr__controls > .plyr__control:first-child + [data-plyr="pause"] {
  margin-right: 0 !important;
}
</style>

<script>
import Plyr from "plyr";

export default {
  data() {
    return {
      playing: false
    };
  },
  props: {
    audio: String
  },

  computed: {
    player() {
      return this.$refs.plyr.player;
    },

    gotAudio() {
      // this.player.play();
      this.playing = true;
      return this.audio;
    }
  },

  componentDidMount() {},
  mounted() {
    this.player.autoplay = true;

    this.$emit("is-playing", this.playing);
    console.log("Player", this.player);
  },

  methods: {
    isPlaying() {
      this.$emit("is-playing", this.playing);
    }
  }
};
</script>