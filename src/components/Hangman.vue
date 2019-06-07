<template>
  <div class="hangman">
    <h1>{{ blankWordString }}</h1>
    <h2>
    <button v-on:click="setLetter('A')">A</button>
    <button v-on:click="setLetter('B')">B</button>
    <button v-on:click="setLetter('C')">C</button>
    <button v-on:click="setLetter('D')">D</button>
    <button v-on:click="setLetter('E')">E</button>
    <button v-on:click="setLetter('F')">F</button>
    <button v-on:click="setLetter('G')">G</button>
    <button v-on:click="setLetter('H')">H</button>
    <button v-on:click="setLetter('I')">I</button>
    <button v-on:click="setLetter('J')">J</button>
    <button v-on:click="setLetter('K')">K</button>
    <button v-on:click="setLetter('L')">L</button>
    <button v-on:click="setLetter('M')">M</button>
    <button v-on:click="setLetter('N')">N</button>
    <button v-on:click="setLetter('O')">O</button>
    <button v-on:click="setLetter('P')">P</button>
    <button v-on:click="setLetter('Q')">Q</button>
    <button v-on:click="setLetter('R')">R</button>
    <button v-on:click="setLetter('S')">S</button>    
    <button v-on:click="setLetter('T')">T</button>
    <button v-on:click="setLetter('U')">U</button>
    <button v-on:click="setLetter('V')">V</button>
    <button v-on:click="setLetter('W')">W</button>
    <button v-on:click="setLetter('X')">X</button>
    <button v-on:click="setLetter('Y')">Y</button>
    <button v-on:click="setLetter('Z')">Z</button>
    </h2>
    <h2>
    <button v-on:click="reset">Reset</button>
    </h2>
    <JSONParser :parentData="message" v-on:childToParent="getWord" ></JSONParser>
  </div>
</template>

<script>
import Vue from 'vue'
import { match } from 'minimatch';
import JSONParser from "../components/JSONParser";
Vue.component('JSONParser', JSONParser);

export default {
  name: 'Hangman',
  components: {
    JSONParser
  },
  methods: {
      getWord: function(randomWord){
          console.log(randomWord + " randomWord")
          this.hangman = randomWord;
          //this.fromChild = randomWord
      },
      reset: function() {
        this.blankWord = "";
        //this.index = Math.floor(this.wordList.length * Math.random());
        //this.hangman = this.wordList[this.index];
        //this.hangman = getWord();
        this.word = this.hangman.split("");
        this.blankWord = this.hangman.split("");
        for(let i=0;i<this.word.length;i++) {
            this.blankWord[i] = "-";
            this.correctGuess.concat("-");
        } 
        this.blankWordString = this.blankWord.toString();
        // console.log(this.index + " index");
        // console.log(this.blankWord.toString() + " blankword");
        console.log(this.word.toString() + " word");

      },
      setLetter: function(letter) {
          //console.log(letter + " letter");
          let match = false;
          for(let i=0;i<this.word.length;i++) {
            if(letter == this.word[i]){
                console.log("CORRECT!!!");
                Vue.set(this.blankWord, i, letter)
                match = true;
            }
          }
          if (!match) {
            this.wrongGuesses++;
            console.log("WRONG!!! wrongGuesses:" + this.wrongGuesses );
            this.$root.$emit('eventing', this.wrongGuesses);
          }
          this.blankWordString = this.blankWord.toString();
      }
  },
  mounted() {
      this.reset()
  },
  data () {
    return {
      message: true,
      fromChild: "",
      blankWordString: "",
      blankWord: [], //array of blanks, fill with correct letters
      correctGuess: "", //holds nice looking string of dashes
      wrongGuesses: 0,
      word: [], //array of letters of chosen word
      index: 0, //the position of chosen word in wordList
      wordList: ["APPLE", "CAT", "DOG", "WHALE", "ORANGE","UNITED","STATES","COMPUTER","GEOLOGICAL","SURVEY"],
      hangman: "blank" //the word that is randomly chosen
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
h2 {
  font-weight: normal;
  position: static;
  left: 100px;
  top: 150px;
}
</style>
