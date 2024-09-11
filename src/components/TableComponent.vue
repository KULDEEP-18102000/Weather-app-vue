<template>
<div class="flex flex-col">
<h1>Historic data</h1>

<div class="table-container">
  <table>
      <thead>
        <tr>
          <th>Condition</th>
          <th>Temp_c</th>
          <th>date</th>
          <th>time</th>
          <th>region</th>
          <th>country</th>
          <th>Feelslike_c</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in historicData" :key="data.id">
          <td>{{ data.condition }}</td>
          <td>{{ data.temp_c }}</td>
          <td>{{ data.date }}</td>
          <td>{{ data.time }}</td>
          <td>{{ data.region }}</td>
          <td>{{ data.country }}</td>
          <td>{{ data.feelslike_c }}</td>
        </tr>
      </tbody>
    </table>
    </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
 computed: {
    ...mapState(['historicData'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table-container {
  display: flex;
  justify-content: center;
  margin: 20px; /* Add some margin at the top and bottom */
}

table {
  width: 80%; /* Adjust the width as needed */
  border-collapse: collapse;
  margin: 0 auto; /* Center the table horizontally */
}

th, td {
  border: 1px solid #ddd;
  padding: 12px 15px; /* Add padding to the table cells */
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

tr {
  background-color: #f9f9f9;
}

tr:hover {
  background-color: #f1f1f1;
}

th, td {
  text-align: center; /* Center the text in table headers and cells */
}

thead {
  position: sticky;
  top: 0;
  background-color: #f2f2f2;
}
</style>
