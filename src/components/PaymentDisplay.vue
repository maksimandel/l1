<template>
  <v-container>
    <v-row>
      <v-col cols="1">#</v-col>
      <v-col cols="4">Date</v-col>
      <v-col cols="5">Category</v-col>
      <v-col cols="2">Value</v-col>
    </v-row>
    <v-row
      v-for="({ value, category, date }, index) in items"
      :key="index"
    >
      <v-col>{{ index + 1 }}</v-col>
      <v-col>{{ date }}</v-col>
      <v-col>{{ category }}</v-col>
      <v-col>{{ value }}</v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'PaymentDisplay',
  props: {
    items: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: {
        date: '-',
        category: '-',
        value: '-',
      },
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
  components: {
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
</style>
