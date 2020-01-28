<template>
  <div><v-form>
    <v-container>
      <v-row>
        <v-col 
        v-for="(value,index) in entries"
        v-bind:key="index"
        cols="12" sm="6" md="3">
          <v-text-field
            v-bind:label='value'
            outlined
            type="number"
            pattern="[0-9]*" 
            inputmode="numeric"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form></div>
  
</template>

<script>
export default {
  name: 'Form',

  data: () => ({
      entries:["Mortgage amount", "Interest rate per year", "Monthly Payment"]
  }),
};
</script>
