<template>
  <div id="app">
<!--    <MyCounter v-if="show"/>-->
<!--    <button @click="show = !show">hide / show</button>-->
    <header>
      <div class="header">My personal costs</div>
    </header>

    <main>
      <AddPaymentFrom @add-payment="addPayment"/>
      <br>
      <PaymentDisplay :items="paymentsList" show/>
    </main>
  </div>
</template>

<script>
// import MyCounter from '@/components/Counter.vue';

import PaymentDisplay from '@/components/PaymentDisplay.vue';
import AddPaymentFrom from '@/components/AddPaymentFrom.vue';

export default {
  name: 'App',
  components: {
    AddPaymentFrom,
    PaymentDisplay,
    // MyCounter,

  },
  data: () => ({
    show: true,
    counter: 0,
    paymentsList: [],
  }),
  methods: {
    addPayment(data) {
      // console.log(data);
      this.paymentsList.push(data);
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
.header {
  font-size: 26px;
  font-weight: bold;
}
</style>
