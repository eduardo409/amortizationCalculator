<template>
<div>
  <v-simple-table 
  fixed-header 
  >
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Payment Date</th>
            <th class="text-left">Payment</th>
            <th class="text-left">Principal</th>
            <th class="text-left">Interest</th>
            <th class="text-left">Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="month in tableData" :key="month.date">
            <td>{{month.monthDate}}</td>
            <td>${{month.monthPayment.toFixed(2)}}</td>
            <td>${{month.monthPrinciple.toFixed(2)}}</td>
            <td>${{month.monthInterest.toFixed(2)}}</td>
            <td>${{month.monthBalance.toFixed(2)}}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props:{
    tableData: Array,
    mytext: String,
  },
  data: () => ({
  }),
};
</script>
