<template>
  <div class="slider">
    <h1>APR:{{value}}</h1>
   <v-slider
        lg="4" sm="2" md="4"
        :color="color"
        v-model="value"
        track-color="grey"
        always-dirty
        min="0"
        max="100"
        step=".05"
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
    value: Number
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
    step:.05

    }),
  created(){
  },
  watch: {

  },
  methods: {
      decrement () {
        this.value = this.value - this.step
      },
      increment () {
        this.value = this.value + this.step
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
