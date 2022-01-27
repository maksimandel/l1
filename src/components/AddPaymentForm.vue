<template>
  <div>
    <div id="inputBlock">
      <label for="Amount">
        <input  id="amount" type="text" placeholder="Payment amount" v-model="value">
      </label>
      <br>
      <label for="category">
        <input  id="category" type="text" placeholder="Payment description" v-model="category">
      </label>
      <br>
      <label for="date">
        <input  id="date" type="text" placeholder="Payment date" v-model="date">
      </label>
      <br>
      <button class="add" @click="addPayments">ADD</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';

export default {
  name: 'AddPaymentFrom',
  props: {
    categoryList: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    type: '',
    price: '',
    date: '',
    value: '',
    category: '',
  }),
  methods: {
    ...mapMutations(['ADD_PAYMENT_DATA']),
    ...mapActions(['addNewPayment']),
    addPayments() {
      const data = {
        date: this.date || this.paymentDay,
        category: this.category,
        value: +this.value,
      };
      this.ADD_PAYMENT_DATA(data);
    },
  },
  computed: {
    paymentDay() {
      const currentDate = new Date();
      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();

      return `${day}.${month}.${year}`;
    },
  },
};
</script>

<style scoped>
  input {
    margin-top: 10px;
    height: 20px;
    width: 200px;
  }
  .add {
    margin-top: 13px;
    background-color: #42b983;
    border: none;
    padding: 7px 30px 5px 30px;
    color: white;
    margin-left: 120px;
    margin-bottom: 20px;
  }

</style>
