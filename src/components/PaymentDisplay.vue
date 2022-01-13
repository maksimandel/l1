<template>
  <div>
<!--    <div v-if="show">Prop is true</div>-->
<!--    {{ items }}-->

    <div class="priceList" v-for="(item, index) in items" :key="index">
      <div>{{ index + 1 }} {{ item.date }} {{ item.category }} {{ item.value }}</div>
    </div>
  </div>
</template>

<script>
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
};
</script>

<style scoped>
  .priceList {
  }
  hr {
    width: 300px;
  }
</style>
