<template>
  <div class="slider">
    <h1>Balance:{{sliders.bal.value}}</h1>
    <h1>APR:{{sliders.apr.value}}</h1>
    <h1>Monthly Payment:{{sliders.monthPayment.value}}</h1>
   <v-slider
          v-for="(element, index) in sliders" :key="index"
        lg="4" sm="2" md="4"
        :color="color"
        v-model="element.value"
        track-color="grey"
        always-dirty
        max="10000"
      >
          <template v-slot:prepend>
          <v-icon
            :color="color"
            @click="decrement"
          >
            mdi-minus
          </v-icon>
        </template>

        <template v-slot:append>
          <v-icon
            :color="color"
            @click="increment"
          >
            mdi-plus
          </v-icon>
        </template>
      </v-slider>
  </div>
</template>

<script>
export default {
  name: 'Sliders',
  props:{
    sliders: Object
  },
  computed:{
    color () {
        if (this.value < 100) return 'indigo'
        if (this.value < 125) return 'teal'
        if (this.value < 140) return 'green'
        if (this.value < 175) return 'orange'
        return 'red'
      }
  },
  data: () => ({
    value:0
    }),
  created(){
  },
  watch: {

  },
  methods: {
      decrement () {
        this.value--
      },
      increment () {
        this.value++
      },
    },

}
</script>
<style>
  .slider{
    background: white 
  }
  @keyframes metronome-example {
    from {
      transform: scale(.5);
    }

    to {
      transform: scale(1);
    }
  }

  .v-avatar--metronome {
    animation-name: metronome-example;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
</style>
