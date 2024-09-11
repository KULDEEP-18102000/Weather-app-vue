<template>
<div class="flex flex-col space-x-4 align-center items-center justify-center m-10">

<SearchComponent/>
  <div class="flex flex-col md:flex-row space-x-4 align-center items-center justify-center m-10">

  <CurrentWeatherComponent/>

   


    <div class="flex flex-col align-center items-center justify-center space-x-4 m-3">

<WeatherTimeComponent/>
    

<TextComponent/>

    


    </div>

    

  </div>

  <TableComponent/>

  

  <ConsecutiveFiveDaysForecastComponent/>

  <MultiLocationSelectorComponent/>

  <ChartComponent/>

  </div>
</template>

<script>

import CurrentWeatherComponent from './CurrentWeatherComponent.vue'
import WeatherTimeComponent from './WeatherTimeComponent.vue'
import TextComponent from './TextComponent.vue'
import SearchComponent from './SearchComponent.vue'
import TableComponent from './TableComponent.vue'
import ConsecutiveFiveDaysForecastComponent from './ConsecutiveFiveDaysForecastComponent.vue'
import ChartComponent from './ChartComponent.vue'
import MultiLocationSelectorComponent from './MultiLocationSelectorComponent.vue'
import { mapActions, mapState } from 'vuex'

export default {
    components: {
    CurrentWeatherComponent,
    WeatherTimeComponent,
    TextComponent, 
    SearchComponent,
    TableComponent,
    ConsecutiveFiveDaysForecastComponent,
    ChartComponent,
    MultiLocationSelectorComponent
  },
  data() {
    return {
      weatherData: {}
    };
  },
  created() {
    this.fetchWeatherData()
    this.fetchForecastData()
    this.fetchHistoricData()
    this.fetchFiveDaysForecastData()
  },
  computed: {
    ...mapState(['city', 'date', 'weatherData'])
  },
  methods: {
    ...mapActions(['fetchWeatherData','fetchForecastData','fetchHistoricData','fetchFiveDaysForecastData'])
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
.divider {
  height: 1px;
  background-color: #ccc;
  margin: 1em 0;
  width: 100%;
}
</style>
