<template>
  <div id="app">
    <header class="header">
      <nav>
        <router-link class="router-link" to="dashboard">Dashboard</router-link>
        <router-link class="router-link" to="about">About</router-link>
      </nav>
    </header>

    <button @click="goToPage('notfound')" class="goToPageBtn">Go to Not Found</button>

    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {

  name: 'App',
  data: () => ({
    page: 'dashboard',
  }),
  methods: {
    goToPage(pageName) {
      this.$router.push(pageName);
    },
    ...mapActions(['fetchData']),
    created() {
      this.fetchData();
    },
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
  padding: 7px 15px 5px 15px;
  background-color: #42b983;
  color: white;
  border: none;
}

</style>
