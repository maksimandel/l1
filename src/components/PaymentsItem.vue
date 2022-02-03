<template>
<!--  <li :class="$style.item">-->
<!--    <span>{{ index + 1 }}</span>-->
<!--    <span>{{ item.date }}</span>-->
<!--    <span>{{ item.category }}</span>-->
<!--    <span>{{ item.value }}</span>-->
<!--    <span>-->
<!--      ⋮-->
<!--    </span>-->
<!--  </li>-->
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
export default {
  name: 'PaymentsItem',
  props: {
    item: {
      type: Object,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: {
        date: '-',
        category: '-',
        value: '-',
      },
    },
    index: Number,
  },
  data() {
    return {
      selected: '',
    };
  },
};
</script>

<style module lang="scss">
.item {
  display: grid;
  align-items: center;

  min-height: 50px;
  grid-template-columns: 50px 150px 150px 50px 50px;

  border-bottom: 1px solid rgba($color: #000000, $alpha: 0.2);
}
</style>
