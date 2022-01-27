<template>
  <div>
    <div class="header">My personal costs</div>
    <div class="total">Total: {{ TotalAmount }}</div>
    <button @click="addPayment">Add payment</button>
    <div class="linkBlock">
      <router-link class="routerLink" to="/dashboard/food?price=1000">Food</router-link>
      <br>
      <router-link class="routerLink" to="/dashboard/Car?price=500">Car</router-link>
      <br>
      <router-link @click="addPaymentsLinks" class="routerLink" to="/dashboard/Gas?price=129">Gas
      </router-link>
    </div>
    <router-view></router-view>
    <br>
    <PaymentDisplay :items="paymentsList" show/>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex';
import PaymentDisplay from '@/components/PaymentDisplay.vue';

export default {
  name: 'DashboardPage',

  components: {
    PaymentDisplay,
  },
  data: () => ({
    type: '',
    price: '',
    showModal: false,
    modalSettings: {},
  }),
  methods: {
    ...mapMutations(['ADD_PAYMENT_DATA']),
    ...mapActions([
      'fetchData',
    ]),
    addPaymentsLinks() {
      const data = {
        type: this.type,
        price: +this.price,
      };
      this.$emit('add-payment', data);
    },
    created() {
      this.fetchData();
    },
    addPayment() {
      this.$modal.show({
        title: 'Add new payment',
        content: 'addPaymentForm',
      });
    },
    authModalOpen() {
      this.modalSettings = {
        title: 'Auth',
        content: 'auth',
      };
      this.showModal = true;
    },
  },
  computed: {
    ...mapGetters([
      'paymentsList',
      'TotalAmount',
    ]),
  },
  mounted() {
    // eslint-disable-next-line no-undef
    this.fetchData();
    this.$modal.show({});
    this.$modal.hide();
  },
};
</script>

<style scoped>
.header {
  margin-top: 20px;
  font-size: 26px;
  font-weight: bold;
}
.total {
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
}
.routerLink {
  text-decoration: none;
}
</style>
