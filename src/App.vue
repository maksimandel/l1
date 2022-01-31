<template>
  <div id="app">
    <header class="header">
      <nav>
        <router-link class="router-link" to="calculator">Calculator</router-link>
        <router-link class="router-link" to="dashboard">Dashboard</router-link>
        <router-link class="router-link" to="about">About</router-link>
      </nav>
    </header>

    <button @click="goToPage('notfound')" class="goToPageBtn">Go to Not Found</button>

    <main>
      <router-view/>
    </main>
    <transition name="fade">
      <ModalWindowAddPayment
        v-if="showModal"
        :settings="modalSettings"
        @add-payment="addPayment"
      />
    </transition>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import ModalWindowAddPayment from '@/components/ModalWindowAddPayment.vue';

export default {

  name: 'App',
  components: { ModalWindowAddPayment },
  data: () => ({
    page: 'dashboard',
    showModal: false,
    modalSettings: {},
  }),
  methods: {
    goToPage(pageName) {
      this.$router.push(pageName);
    },
    ...mapActions(['fetchData']),
    created() {
      this.fetchData();
    },
    addPayment(data) {
      this.ADD_PAYMENT_DATA(data);
    },
    modalOpen(settings) {
      this.modalSettings = settings;
      this.showModal = true;
    },
    modalClose() {
      this.showModal = false;
      this.modalSettings = {};
    },
  },
  mounted() {
    this.$modal.EventBus.$on('show', this.modalOpen);
    this.$modal.EventBus.$on('hide', this.modalClose);
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.header {
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.router-link {
  margin: 0 5px;
}
.router-link {
  text-decoration: none;
}
.goToPageBtn {
  margin-top: 10px;
  margin-bottom: 15px;
  padding: 7px 15px 5px 15px;
  background-color: #42b983;
  color: white;
  border: none;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
