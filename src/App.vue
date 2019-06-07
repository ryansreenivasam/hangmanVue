<template>
  <div id="app">
    <HelloWorld msg="This is Hangman" />
    <HMImage/>
    <Hangman/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Hangman from "./components/Hangman.vue";
import HMImage from "./components/HMImage.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    Hangman,
    HMImage
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
