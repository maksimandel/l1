<template>
  <div>
    <button @click="authModalOpen">Open auth</button>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  methods: {
    authModalOpen() {
      this.$modal.show({
        title: 'Authorization',
        content: 'auth',
      });
    },
  },
};
</script>

<style scoped>

</style>
