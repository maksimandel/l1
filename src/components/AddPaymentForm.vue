<template>
  <v-card class="text-left pa-8">
    <v-text-field v-model="date" label="Date"/>
    <v-text-field v-model="category" label="Category"/>
    <v-text-field v-model="value" label="Value"/>
    <v-btn @click="addPayments">Add</v-btn>
  </v-card>
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
</style>
