<template>
  <canvas class = "chart" ref="myChart" :width="width" :height="height"></canvas>
</template>

<script>
/* eslint-disable no-console */

import Chart from 'chart.js';
export default {
  name: 'chart',
props: {
    // The canvas's width.
    width: {
      type: Number,
      validator: value => value > 0
    },

    // The canvas's height.
    height: {
      type: Number,
      validator: value => value > 0
    },

    // The chart's data.labels
    labels: Array,

    // The chart's data.datasets
    datasets: {
      type: Array,
      required: true
    },

    // The chart's options.
    options: Object
  },
  data() {
    return {
      // Data that will hold the Chart.js instance.
      chart: null
    };
  },
  watch: {
    // Watch for the datasets changes.
    labels(newLabels) {
      // Replace the datasets and call the update() method on Chart.js
      // instance to re-render the chart.
      console.log(newLabels)
      this.chart.data.labels = newLabels;
      this.chart.update();
    }, 
    datasets(newData) {
        console.log("dataset change")
        this.chart.data.datasets = newData;
        this.chart.update();
    }

  },
  mounted() {
    // Store the created instance.
    this.chart = new Chart(this.$refs.myChart, {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: this.datasets
      },
      options: this.options
    });
  },
  beforeDestroy () {
    // Don't forget to destroy the Chart.js instance.
    if (this.chart) {
      this.chart.destroy()
    }
  }
}
</script>
<style  scoped>
.chart{
  background: white
}
</style>