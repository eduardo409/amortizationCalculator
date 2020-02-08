<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        {{appName}}
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/eduardo409/Amortization-Calculator"
        target="_blank"
        text
      >
        <span class="mr-2">Documentation</span>
        <v-icon>mdi-git</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <HomePage lg="12"/>
    </v-content>
  </v-app>
</template>

<script>
import HomePage from './components/HomePage';

export default {
  name: 'App',

  components: {
    HomePage,
  },

  data: () => ({
    appName: "Amortization Schedule Calculator"
  }),
};
</script>
