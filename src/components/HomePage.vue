<template>
  <div class="homepage">
    <!-- listOfMonths:{{listOfMonths}} -->
    <!-- listOfLabels:{{labels}}  -->
    <!-- dataInterest:{{datasets[0].data}} -->
    <Form/>
      <v-container>
      <v-row  cols="12" lg="12" sm="12" md="12">
        <v-col 
        cols="12" lg="8" sm="12" md="12">
          <div class="text-center">
            <line-chart
              :width="500"
              :height="300"
              v-bind:labels=labels
              :datasets=datasets
            ></line-chart>
          </div>
        </v-col>
        <v-col 
        cols="12" lg="4" sm="12" md="12">
            <Table
            v-bind:listOfMonths= listOfMonths
            ></Table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
/* eslint-disable no-console */
var Calculator = require('../Repo/Calculator')
import Form from "./Form";
import Table from './Table'
import LineChart from "./Chart"
export default {
  name: 'HomePage',
  components: {
    Form,
    LineChart,
    Table,

  },
  data: () => ({
    listOfMonths: null,
    labels: [],
    datasets: [{  
    label: 'Intrest',
    borderColor: 'RED',
    backgroundColor: 'rgba(241, 169, 160, 1)',
    data: []},
  {
    label: 'Balance',
    borderColor: 'GREEN',
    backgroundColor: 'rgba(170, 212, 195, 0.48)',
    data: []}]
  }),
  watch:{
    listOfMonths: function(){
      
      this.labels = this.listOfMonths.map(month => month.monthDate.format('MMMM YYYY'));
      this.datasets[0].data = this.listOfMonths.map(month => month.monthInterest);
      this.datasets[1].data = this.listOfMonths.map(month => month.monthPrinciple);
    }
  },
  methods:{
      async updateComponents(bal,apr,monthPayment){
        await this.buildTable(bal,apr,monthPayment)
      },
      buildChart(){
        console.log('building charts')
        // this.labels = this.listOfMonth.map(month => month.monthDate)
        console.log('building charts')
      },
      async buildTable(bal,apr,monthPayment){
      console.log(bal, apr, monthPayment)
      let calculator = new Calculator()
      let decimalAPR = calculator.percentToDecimal(apr)
      await calculator.schedule(parseFloat(bal), parseFloat(monthPayment), parseFloat(decimalAPR)).then((result =>{
         this.listOfMonths = result
         console.log(JSON.stringify(result))
      }))
      
    }
  }
}
</script> 
<style scoped>
.homepage{
  /* background: red */
}
</style>
