<template>
 <div class="flex align-center justify-center p-4 bg-grey border border-gray-300 shadow-lg">
    <div class="flex flex-col space-x-4">
   <div class="flex flex-row space-x-4">

   <div class="flex flex-col space-x-4">
   <p>{{FiveDaysForecastData[0]?.date}}</p>
   <div class="flex flex-row">
   <p>{{FiveDaysForecastData[0]?.temperature}} - </p>
   <p>{{FiveDaysForecastData[0]?.condition}}</p>
   </div>
   </div>

    <div class="flex flex-col space-x-4">
   <p>{{FiveDaysForecastData[1]?.date}}</p>
   <div class="flex flex-row">
   <p>{{FiveDaysForecastData[1]?.temperature}} - </p>
   <p>{{FiveDaysForecastData[1]?.condition}}</p>
   </div>
   </div>

   <div class="flex flex-col space-x-4">
   <p>{{FiveDaysForecastData[2]?.date}}</p>
   <div class="flex flex-row">
  <p>{{FiveDaysForecastData[2]?.temperature}} - </p>
   <p>{{FiveDaysForecastData[2]?.condition}}</p>
   </div>
   </div>

   <div class="flex flex-col space-x-4">
   <p>{{FiveDaysForecastData[3]?.date}}</p>
   <div class="flex flex-row">
   <p>{{FiveDaysForecastData[3]?.temperature}} - </p>
   <p>{{FiveDaysForecastData[3]?.condition}}</p>
   </div>
   </div>

   <div class="flex flex-col space-x-4">
   <p>{{FiveDaysForecastData[4]?.date}}</p>
   <div class="flex flex-row">
   <p>{{FiveDaysForecastData[4]?.temperature}} - </p>
   <p>{{FiveDaysForecastData[4]?.condition}}</p>
   </div>
   </div>

   </div>



    </div>

    
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
 computed: {
    ...mapState(['FiveDaysForecastData'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
