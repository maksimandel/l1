<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
<!--    <button v-on:click="counter++">Increase</button>-->
<!--    <button @click="counter++">Increase</button>-->
    <CalculatorComp/>
  </div>
</template>

<script>
import CalculatorComp from '@/components/Calc.vue';
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    CalculatorComp,
    HelloWorld,
  },
  data: () => ({
    counter: 0,
  }),
  methods: {
    // increase: function (step, event) {
    //   // eslint-disable-next-line no-plusplus
    blur() {
      console.log('blur');
    },
    focus() {
      console.log('focus');
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
