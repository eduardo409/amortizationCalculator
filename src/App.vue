<template>
  <v-app>
    <v-app-bar app class="indigo lighten-1 white--text text-center">
      <div class="d-flex align-center appBar">{{appName}}</div>

      <v-spacer></v-spacer>

      <v-btn href="https://github.com/eduardo409/Amortization-Calculator" target="_blank" text>
        <span class="indigo lighten-1 white--text text-center" >code </span>
        <v-icon color="white">mdi-git</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content lg="12">
      <HomePage :incrementCounter= "incrementCounter" lg="12" />
    </v-content>
      <v-footer
    dark
    padless
  >
    <v-card
      width="100%"
      flat
      tile
      class="indigo lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon.name"
          class="mx-4 white--text"
          icon
          target="_blank"
          :href='icon.href'
           >
          <v-icon size="24px">
            {{ icon.name }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Usage count : <strong>{{counter.counter}}</strong>
      </v-card-text>

      <v-divider>
      </v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} <strong>☁</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  </v-app>
</template>

<script>
/* eslint-disable no-console */

import HomePage from "./components/HomePage";
import { db } from "./firebase/db";
// const documentPath = "interest-app/data";

export default {
  name: "App",

  components: {
    HomePage
  },
  data: () => ({
    counter: {},
    appName: "Interest Estimator",
    icons: [
        {name: 'mdi-twitter', href:"https://www.twitter.com/famouscloud"},
        {name: 'mdi-linkedin', href: "https://www.linkedin.com/in/eduardo-hernandez-705705150/"},
        {name: 'mdi-instagram', href: "https://www.instagram.com/nubefamosa"}
    ]
  }),
    watch:{
    change: function() {
      console.log('loading change')
   }  

  },
  firestore: {
    counter: db.collection("interest-app").doc("data")
  },
  methods: {
     incrementCounter() {
      let value = this.counter.counter + 1  
         db
          .collection("interest-app")
          .doc("data")
          .set({"counter":value});
    }
  }
}
</script>
<style scoped>
.appBar {
  color: "red";
}
</style>