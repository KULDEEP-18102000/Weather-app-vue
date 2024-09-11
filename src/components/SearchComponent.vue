<template>
<div class="flex flex-row space-x-4 align-center justify-center m-5 border border-gray-300 rounded-lg bg-gray-200">

 <div>
    <label for="dropdown">Location: </label>
    <select id="dropdown" @change="onCityChange">
      <option value="Delhi">Delhi</option>
      <option value="Moscow">Moscow</option>
      <option value="Paris">Paris</option>
      <option value="New York">New York</option>
      <option value="Sydney">Sydney</option>
      <option value="Riyadh">Riyadh</option>
    </select>
  </div>


  <div class="mx-5">
    <label for="dateInput">From Date: </label>
    <input type="date" id="dateInput" v-model="selectedDate" @change="onFromDateChange"/>
  </div>

  <div class="mx-5">
    <label for="dateInput">To Date: </label>
    <input type="date" id="dateInput"  @change="onToDateChange"/>
  </div>

  </div>
</template>

<script>
import { mapActions } from 'vuex'


export default {
  data() {
    return {
      selectedDate: this.getTodayDate()
    }
  },
  methods: {
    ...mapActions(['updateCity','updateFromDate','updateToDate']),
    getTodayDate() {
      const today = new Date()
      const year = today.getFullYear()
      const month = String(today.getMonth() + 1).padStart(2, '0')
      const day = String(today.getDate()).padStart(2, '0')
      return `${year}-${month}-${day}`
    },
    onCityChange(event) {
      const city = event.target.value
      console.log(city)
      this.updateCity(city)
    },
    onFromDateChange(event) {
      const date = event.target.value
      console.log(date),
      this.updateFromDate(date)
    },
    onToDateChange(event) {
      const date = event.target.value
      console.log(date),
      this.updateToDate(date)
    }
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
