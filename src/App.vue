<template>
  <div id="app">
    <h1>Simon the game!</h1>

    <div id="simon-board">
      <div
        v-for="(color, index) in simonColors"
        :key="index"
        :style="{ backgroundColor: color }"
        class="simon-button"
      ></div>
    </div>
    <button @click="startGame">Start Game</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      simonColors: ["red", "blue", "green", "yellow"],
      gameStarted: false,
      sequence: [],
      playerSequence: [],
    };
  },

  methods: {
    startGame() {
      this.gameStarted = true;
      this.sequence = [];
      this.playerSequence = [];
      this.addToSequence();
      this.playSequence();
    },

    addToSequence() {
      const randomIndex = Math.floor(Math.random() * 4);
      this.sequence.push(randomIndex);
      console.log(randomIndex);
    },

    playSequence() {
      let i = 0;
      const intervalId = setInterval(() => {
        this.highlightButton(this.sequence[i]);
        i++;
        if (i >= this.sequence.length) {
          clearInterval(intervalId);
        }
      }, 1000);
    },

    highlightButton(index) {
      const currentBtn = document.getElementsByClassName("simon-button")[index];
      const currentColor = currentBtn.style.backgroundColor;

      document.getElementsByClassName("simon-button")[
        index
      ].style.backgroundColor = "orange";

      setTimeout(() => {
        document.getElementsByClassName("simon-button")[
          index
        ].style.backgroundColor = currentColor;
      }, 1000);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#simon-board {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  max-width: 200px;
  margin: 20px auto;
}
.simon-button {
  width: 100%;
  padding: 20px;
  font-size: 18px;
  cursor: pointer;
}
</style>
