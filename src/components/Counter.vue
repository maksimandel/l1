<template>
  <div>
    <button @click="increase">Clicked {{ counter }} times</button>
  </div>
</template>

<script>
export default {
  name: 'MyCounter',
  data: () => ({
    counter: 0,
  }),
  methods: {
    increase() {
      // eslint-disable-next-line no-plusplus
      this.counter++;
    },
    documentClick() {
      console.log('Click');
    },
  },
  beforeCreate() {
  },
  created() {
  },
  beforeMount() {
  },
  mounted() {
    document.addEventListener('click', this.documentClick);
  },
  beforeUpdate() {
  },
  updated() {
  },
  beforeDestroy() {
  },
  destroyed() {
    document.removeEventListener('click', this.documentClick);
  },
};

</script>

<style scoped>

</style>
