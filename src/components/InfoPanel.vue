<template>
  <div class="infoPanel">
    <H1 v-for="(item,index) in data" :key="index">
      {{item.title}}:
      <b>{{item.value}}</b>
    </H1>
  </div>
</template>

<script>
export default {
  name: 'InfoPanel',
  props:{
    data: Object
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
   background: white
 }
</style>
