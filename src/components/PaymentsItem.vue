<template>
  <li :class="$style.item">
    <span>{{ index + 1 }}</span>
    <span>{{ item.date }}</span>
    <span>{{ item.category }}</span>
    <span>{{ item.value }}</span>
    <span>
      ⋮
    </span>
  </li>
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
