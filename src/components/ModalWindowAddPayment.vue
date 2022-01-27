<template>
  <div class="wrapper">
    <div class="content">
      <div>{{ title }}</div>
      <div class="content">
        <AddPaymentForm v-if="settings.content === 'addPaymentForm'"/>
        <AuthComp v-if="settings.content === 'auth'"/>
      </div>
      <footer>
        <button @click="close">Close</button>
      </footer>
    </div>
  </div>
</template>

<script>
import AddPaymentForm from '@/components/AddPaymentForm.vue';
import AuthComp from '@/components/Auth.vue';

export default {
  name: 'ModalWindowAddPayment',
  props: {
    settings: {
      type: Object,
      default: () => ({}),
    },
  },
  components: { AuthComp, AddPaymentForm },
  methods: {
    close() {
      this.$modal.hide();
    },
  },
  computed: {
    title() {
      return this.settings.title;
    },
  },
};
</script>

<style scoped>
.content {
  position: relative;
  background-color: #fff;
  border-radius: 8px;
  padding: 8px;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: 0;
}
</style>
