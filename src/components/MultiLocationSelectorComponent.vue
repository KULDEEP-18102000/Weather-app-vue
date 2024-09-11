<template>
 <div class="flex flex-row space-x-4 align-center items-center justify-center m-10">
    <label for="cars">Choose a Multiple Locations :</label>

<select name="cities" id="cities" multiple v-model="selectedCities" @change="onCitiesChange">
 <option value="Delhi">Delhi</option>
      <option value="Moscow">Moscow</option>
      <option value="Paris">Paris</option>
      <option value="New York">New York</option>
      <option value="Sydney">Sydney</option>
      <option value="Riyadh">Riyadh</option>
</select>
  </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  data() {
    return {
      selectedCities: ['Delhi']  // Holds the selected cities
    }
  },
  methods: {
    ...mapActions(['updateLocations']),

    onCitiesChange(event) {
      // Access the selected values from the data property
      console.log('Selected Cities:', this.selectedCities);
      // If you need to access the event directly, you can use:
      const selectedOptions = Array.from(event.target.selectedOptions).map(option => option.value);
      console.log('Selected Options from Event:', selectedOptions);

      this.updateLocations(selectedOptions)
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
