<template>
  <div class="p-4 bg-gray-100 border border-gray-300 shadow-lg">

    <div class="flex flex-col space-x-4">
   <div class="flex flex-row space-x-4">

   <div class="flex flex-col space-x-4">
   <p>{{ForecastData[0]?.time}}</p>
   <div class="flex flex-row">
   <PhCloud :size="32" />
   <p>{{ForecastData[0]?.temp_c}}</p>
   </div>
   </div>

    <div class="flex flex-col space-x-4">
   <p>{{ForecastData[1]?.time}}</p>
   <div class="flex flex-row">
   <PhCloud :size="32" />
   <p>{{ForecastData[1]?.temp_c}}</p>
   </div>
   </div>

   <div class="flex flex-col space-x-4">
   <p>{{ForecastData[2]?.time}}</p>
   <div class="flex flex-row">
   <PhCloud :size="32" />
   <p>{{ForecastData[2]?.temp_c}}</p>
   </div>
   </div>

   <div class="flex flex-col space-x-4">
   <p>{{ForecastData[3]?.time}}</p>
   <div class="flex flex-row">
   <PhCloud :size="32" />
   <p>{{ForecastData[3]?.temp_c}}</p>
   </div>
   </div>

   <div class="flex flex-col space-x-4">
   <p>{{ForecastData[4]?.time}}</p>
   <div class="flex flex-row">
   <PhCloud :size="32" />
   <p>{{ForecastData[4]?.temp_c}}</p>
   </div>
   </div>

   </div>

   <div class="divider"></div>

   <div class="flex flex-row space-x-4">

   <div class="flex flex-col space-x-4">
   <p>{{ForecastData[5]?.time}}</p>
   <div class="flex flex-row">
   <PhCloud :size="32" />
   <p>{{ForecastData[5]?.temp_c}}</p>
   </div>
   </div>

   <div class="flex flex-col space-x-4">
   <p>{{ForecastData[6]?.time}}</p>
   <div class="flex flex-row">
   <PhCloud :size="32" />
   <p>{{ForecastData[6]?.temp_c}}</p>
   </div>
   </div>

   <div class="flex flex-col space-x-4">
   <p>{{ForecastData[7]?.time}}</p>
   <div class="flex flex-row">
   <PhCloud :size="32" />
   <p>{{ForecastData[7]?.temp_c}}</p>
   </div>
   </div>

   <div class="flex flex-col space-x-4">
   <p>{{ForecastData[8]?.time}}</p>
   <div class="flex flex-row">
   <PhCloud :size="32" />
   <p>{{ForecastData[8]?.temp_c}}</p>
   </div>
   </div>

   <div class="flex flex-col space-x-4">
   <p>{{ForecastData[9]?.time}}</p>
   <div class="flex flex-row">
   <PhCloud :size="32" />
   <p>{{ForecastData[9]?.temp_c}}</p>
   </div>
   </div>

</div>



    </div>

    
    </div>
</template>

<script>
import { PhCloud } from '@phosphor-icons/vue';
import {  mapState } from 'vuex'

export default {
    components: {
    PhCloud
  },
  computed: {
    ...mapState(['ForecastData'])
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
