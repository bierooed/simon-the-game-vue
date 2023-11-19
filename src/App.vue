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
    },

    addToSequence() {
      const randomIndex = Math.floor(Math.random() * 4);
      this.sequence.push(randomIndex);
      console.log(randomIndex);
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
