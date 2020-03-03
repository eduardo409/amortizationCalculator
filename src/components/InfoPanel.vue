<template>
  <div class="infoPanel">
    <H1 v-for="(item,index) in data" :key="index">
      {{item.title}}:
      <b>{{item.value | format(item.title) }}</b>
    </H1>
  </div>
</template>

<script>
var Time = require('../Repo/Time')
import Dinero from 'dinero.js'
export default {
  name: 'InfoPanel',
  props:{
    data: Object
  },
  filters:{
    format: function(value, type){
      let amount = Number(Number(value).toFixed(2).replace('.',''))
      /* eslint-disable no-console */
      console.log(amount)
      if(type !== "Time"){
        return  Dinero({amount}).toFormat('$0,0.00')
      }
      else{
        let time = new Time()
        return time.stringify(value)
        // return  value 
      }
    }
  },
  computed:{
   
  },
  data: () => ({
    }),
  created(){
  },
  watch: {

  },
  methods: {

  }

}
</script>
<style>
 .infoPanel{
   background: red
 }
</style>
