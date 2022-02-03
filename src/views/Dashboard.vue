<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="text-h5">My personal costs</div>
        <v-dialog v-modal="showModal">
          <template v-slot:activator="{ on }">
            <v-btn
              color="primary"
              v-on="on"
              @click="showModal = !showModal"
            >
              Add new payment
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </template>
          <v-card>
            <add-payment-from></add-payment-from>
          </v-card>
        </v-dialog>
        <div>
          <PaymentDisplay :items="paymentsList" show/>
        </div>
      </v-col>
      <v-col>
        Charts
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex';
import PaymentDisplay from '@/components/PaymentDisplay.vue';
import AddPaymentFrom from '@/components/AddPaymentForm.vue';

export default {
  name: 'DashboardPage',

  components: {
    AddPaymentFrom,
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

</style>
