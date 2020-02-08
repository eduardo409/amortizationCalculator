<template>
  <div class="homepage">
    <Form/>
      <v-container>
      <v-row>
        <v-col 
        cols="12" lg="12" sm="12" md="12">
          <div class="text-center">
              <Chart/>
          </div>
        <Table
        v-bind:tableData= tableData
        ></Table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Form from "../components/Form";
import Chart from "../components/Chart"
export default {
  name: 'HomePage',
  components: {
    Form,Chart

  },
  data: () => ({}),
}
</script> 
<style scoped>
.homepage{
  /* background: red */
}
</style>
