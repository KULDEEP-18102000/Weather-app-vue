<template>
  <div class="p-4 bg-grey border border-gray-300 shadow-lg bg-yellow-200 rounded-lg">
    <div flex flex-col space-x-4>
    <p class="font-bold">Todays</p>
    <div class="flex flex-row space-x-4 items-center justify-center">
    <PhSun :size="32" />
    {{weatherData?.temp_c}}
    </div>
    <p>{{weatherData?.condition}}</p>
    <p>{{weatherData?.region}}</p>
    <p>{{weatherData?.date}}</p>
    <p><span>Feels Like {{weatherData?.feelslike_c}} | {{weatherData?.condition}} {{weatherData?.time}}</span></p>
    </div>
    </div>
</template>

<script>
import { PhSun } from '@phosphor-icons/vue';
import { mapState } from 'vuex'

export default {
  components: {
    PhSun
  },
  computed: {
    ...mapState(['city', 'date', 'weatherData'])
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
