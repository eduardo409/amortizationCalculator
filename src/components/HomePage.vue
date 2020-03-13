<template>
  <div class="homepage" >
      <v-row lg="12" sm="12" md="12">
        <v-col lg="12" sm="12" md="12">
                <Form
                  :loading="loading1"
                  :entries="entries"
                  />
        </v-col>
      </v-row>
      <v-row lg="12" sm="12" md="12">
         <v-col lg="12" sm="12" md="4">
          <InfoPanel
           v-if="datasets[0].data.length != 0"
           :data="info"/>
        </v-col>
      </v-row>
      <v-row lg="12" sm="12" md="12">
        <!-- <v-col lg="4" sm="4" md="4">
          <Sliders :value="entries.apr.value"/>
        </v-col> -->
        <v-col lg="8" sm="8" md="8">
            <line-chart
              v-if="datasets[0].data.length != 0"
              :width="500"
              :height="300"
              v-bind:labels=labels
              :datasets=datasets
            ></line-chart>
        </v-col>
      </v-row>
      <v-row lg="12" sm="12" md="12">
         <v-col cols="12" lg="12" sm="12" md="12">
            <Table
            v-bind:listOfMonths= listOfMonths
            ></Table>
        </v-col>
      </v-row>
  </div>
</template>

<script>
/* eslint-disable no-console */
var Calculator = require('../Repo/Calculator')
import Form from "./Form";
import Table from './Table'
import LineChart from "./Chart"
// import Sliders from './Sliders'
import InfoPanel from './InfoPanel'
export default {
  name: 'HomePage',
  components: {
    Form,
    LineChart,
    Table,
    // Sliders,
    InfoPanel
  },
  data: () => ({
    loading1:false,
    listOfMonths: null,
    labels: [],
    entries:{bal:{rep:"Balance",value:7700}, apr:{rep:"APR",value:12.46}, monthPayment:{rep:"Monthly Payment",value:1200}},
    info:{balance:{title:'Balance', value: 0},intrest:{title:'Interest', value:0},time:{title:'Time',value:0}},
    datasets: [{  
    label: 'Interest',
    borderColor: 'RED',
    backgroundColor: 'rgba(241, 169, 160, 1)',
    data: []},
    {
    label: 'Balance',
    borderColor: 'GREEN',
    backgroundColor: 'rgba(170, 212, 195, 0.48)',
    data: []}],
  }),
  watch:{
    listOfMonths: function(){
      this.labels = this.listOfMonths.map(month => month.monthDate.format('MMMM YYYY'));
      this.datasets[0].data = this.listOfMonths.map(month => month.monthInterest);
      this.datasets[1].data = this.listOfMonths.map(month => month.monthPrinciple);
      this.info.intrest.value =  this.listOfMonths.map(month => month.monthInterest).reduce((a, b) => a + b, 0)
      this.info.time.value =  this.listOfMonths.map(month => month.monthInterest).length
      this.info.balance.value = this.entries.bal.value
      // this.loading1 = false
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
      this.loading1 = true
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
  /* background: green */
}
.loading{
  background: red
}
/* .homepage-container{
  background: green
} */
</style>
