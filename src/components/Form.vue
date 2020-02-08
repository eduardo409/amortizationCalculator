<template>
  <div>
    <h3>
      Balance:{{entries.bal.value}}
      APR:{{entries.apr.value}}
      Monthly Payment:{{entries.monthPayment.value}} <br>
      loading: {{loading}}
    </h3>
    <v-form>
    <v-container>
      <v-row>
        <v-col 
        v-for="(entry,index) in entries"
        v-bind:key="index"
        cols="12" lg="12" sm="12" md="12">
          <v-text-field
            v-bind:label="entry.rep"
            v-model='entry.value'
            outlined
            type="number"
            pattern="[0-9]*" 
            inputmode="numeric"
            hide-details
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col 
        cols="12" lg="12" sm="12" md="12">
          <v-btn
          block
          color="primary"
           v-on:click='submitForm()'
          :loading="loading"

          >
            Calculate
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col 
        cols="12" lg="12" sm="12" md="12">
          <div class="text-center">
            <!-- <v-progress-circular
              v-if="loading"
              :size="70"  
              :width="7"
              color="purple"
              indeterminate
            ></v-progress-circular> -->
          </div>
        <Table
        v-bind:tableData= tableData
        ></Table>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
  </div>
  
</template>

<script>
import Table from './Table'
var Calculator = require('../Repo/Calculator')
export default {
  name: 'Form',
  components:{  
    Table,
  },
  data: () => ({
      entries:{bal:{rep:"Balance",value:8500}, apr:{rep:"APR",value:12.74}, monthPayment:{rep:"Monthly Payment",value:1200}},
      tableData: null,
      loading:false,
  }),
  created(){
    /* eslint-disable no-console */
    console.log(`Entries:${this.entries}`)
  },
  watch: {
    tableData: function() {
      console.log('change')
      this.loading = false
   },
   loading: function() {
      console.log('loading change')
   }  
  },
  methods: {
     wait(ms){
      var start = new Date().getTime();
      var end = start;
        while(end < start + ms) {
          end = new Date().getTime();
        }
      },
     async submitForm(){
      let calculator = new Calculator()
      let bal = this.entries.bal.value
      let monthPayment = this.entries.monthPayment.value
      let apr = calculator.percentToDecimal(this.entries.apr.value)
      this.tableData = null
      // console.log(`bal: ${bal}\napr: ${apr}\nmonthPayment: ${monthPayment}`)
      calculator.schedule(parseFloat(bal), parseFloat(monthPayment), parseFloat(apr)).then((result =>{
         this.tableData = result
      }))

    }
  }
};
</script>
