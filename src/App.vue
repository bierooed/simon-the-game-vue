<template>
  <div id="app">
    <h1>Simon the game!</h1>
    <h3>Score - {{ score }}</h3>

    <div>
      <label
        >Select a difficulty level - <mark>{{ difficulty }}</mark></label
      >
      <br />
      <label>Highlighting speed - {{ gameSpeed }} ms</label>
      <div>
        <button
          @click="handleGameDifficulty('Easy')"
          class="difficulty-btn default-btn"
        >
          Easy
        </button>
        <button
          @click="handleGameDifficulty('Normal')"
          class="difficulty-btn default-btn"
        >
          Normal
        </button>
        <button
          @click="handleGameDifficulty('Hard')"
          class="difficulty-btn default-btn"
        >
          Hard
        </button>
      </div>
    </div>
    <div id="simon-board">
      <div
        v-for="(color, index) in simonColors"
        :key="index"
        :style="{ backgroundColor: color }"
        :class="{ highlighted: highlightedButton === index }"
        class="simon-button"
        @click="handleButtonClick(index)"
      ></div>
    </div>
    <button class="start-btn default-btn" @click="startGame">Start Game</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      score: 0,
      difficulty: "Easy",
      gameSpeed: 1500,
      simonColors: ["crimson", "blue", "green", "purple"],
      gameStarted: false,
      sequence: [],
      playerSequence: [],
      highlightedButton: null,
    };
  },

  methods: {
    startGame() {
      console.log(document.getElementsByClassName("simon-button"));
      this.gameStarted = true;
      this.sequence = [];
      this.playerSequence = [];
      this.addToSequence();
      this.playSequence();
    },

    handleGameDifficulty(level) {
      switch (level) {
        case "Easy":
          this.difficulty = "Easy";
          this.gameSpeed = 1500;
          break;
        case "Normal":
          this.difficulty = "Normal";
          this.gameSpeed = 1000;
          break;
        case "Hard":
          this.difficulty = "Hard";
          this.gameSpeed = 400;
          break;
        default:
          this.difficulty = "Easy";
          this.gameSpeed = 1500;
      }
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
      this.highlightedButton = index;
      setTimeout(() => {
        this.highlightedButton = null;
      }, this.gameSpeed);
    },

    handleButtonClick(index) {
      if (this.gameStarted) {
        this.playerSequence.push(index);
        this.highlightButton(index);
        if (!this.checkSequence()) {
          alert("Game Over 🥲");
          this.gameStarted = false;
        } else if (this.playerSequence.length === this.sequence.length) {
          this.score += 1;
          alert("Correct! Next round 🏆");
          this.playerSequence = [];
          this.addToSequence();
          setTimeout(() => this.playSequence(), 1000);
        }
      }
    },

    checkSequence() {
      for (let i = 0; i < this.playerSequence.length; i++) {
        if (this.playerSequence[i] !== this.sequence[i]) {
          return false;
        }
      }
      return true;
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

.difficulty-btn {
  margin: 5px;
}

.default-btn {
  padding: 10px 20px;
  border: 1px solid #ddd;
  color: #333;
  background-color: #fff;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
}

.default-btn:hover {
  background-color: #d7d7d7;
}

.simon-button {
  width: 100%;
  padding: 20px;
  font-size: 18px;
  cursor: pointer;
}

.highlighted {
  background-color: yellow !important;
}
</style>
