<template>
  <div>
    <div class="paymentItem">
      <PaymentsItem
        v-for="(item, index) in onDisplayPayments"
        :key="index"
        :item="item"
        :index="index"
      />
      <PaymentPagination class="pagination" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PaymentsItem from './PaymentsItem.vue';
import PaymentPagination from './PaymentPagination.vue';

export default {
  name: 'PaymentDisplay',
  props: {
    items: {
      type: Array,
      default: () => ([]),
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    PaymentPagination,
    PaymentsItem,
  },
  computed: {
    ...mapGetters(['onDisplayPayments']),
  },
};
</script>

<style scoped>
  hr {
    width: 300px;
  }
  .paymentItem {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .pagination {
    margin-top: 10px;
  }
</style>
