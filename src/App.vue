<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-btn to="/dashboard" :ripple="true">Dashboard</v-btn>
      <v-btn to="/about" :ripple="true">About</v-btn>
      <v-btn to="/calculator" :ripple="true">Calculator</v-btn>
    </v-app-bar>

    <v-main>
      <MyButton/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import MyButton from '@/components/MyButton.vue';

export default {
  name: 'App',
  components: { MyButton },
  data: () => ({
    //
  }),
};
</script>
