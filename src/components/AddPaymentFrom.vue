<template>
  <div>
    <button class="addCost" @click="showInput =! showInput">ADD NEW COST</button>
    <div id="inputBlock" v-if="showInput">
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
export default {
  name: 'AddPaymentFrom',
  data: () => ({
    date: '',
    value: '',
    category: '',
    showInput: false,
  }),
  methods: {
    addPayments() {
      const {
        value, category, date, paymentDay,
      } = this;
      const data = {
        date: date || paymentDay,
        category,
        value,
      };

      // console.log(data);
      this.$emit('add-payment', data);
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
  .addCost {
    padding: 7px 10px 5px 10px;
    margin-top: 10px;
    margin-bottom: 8px;
    background-color: #42b983;
    color: white;
    border: none;
  }
  .add {
    margin-top: 13px;
    background-color: #42b983;
    border: none;
    padding: 7px 30px 5px 30px;
    color: white;
    margin-left: 120px;
  }

</style>
