// src/store/index.js
import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state() {
    return {
      city: "Delhi",
      fromDate:"2024-09-10",
      toDate:"2024-09-10",
      weatherData:{},
      ForecastData:{},
      historicData:[],
      FiveDaysForecastData:[],
      chartData:{
        labels: [],
        datasets: [ { data: [] } ]
      },
      locations:["Delhi"]
    }
  },
  mutations: {
    setCity(state, city) {
      state.city = city
    },
    setFromDate(state, fromDate) {
      state.fromDate = fromDate
    },
    setToDate(state, toDate) {
      state.toDate = toDate
    },
    setWeatherData(state, weatherData) {
      state.weatherData = weatherData
    },
    setForecastData(state, ForecastData) {
      state.ForecastData = ForecastData
    },
    setHistoricData(state, historicData) {
      state.historicData = historicData
    },
    setFiveDaysForecastData(state, FiveDaysForecastData) {
      state.FiveDaysForecastData = FiveDaysForecastData
    },
    setChartData(state, chartData) {
      state.chartData = chartData
    },
    setLocations(state, locations) {
      state.locations = locations
    }
  },
  actions: {
    async fetchWeatherData({ commit,state }) {
    //   commit('setLoading', true)
      try {
        // const location = await axios.get(`https://ipinfo.io/json?token=adc107d07a4c0f`)
    // console.log(location.data)
        console.log(state)
        const response = await axios.get(`http://localhost:3000/weather/getCurrentWeather?city=${state.city}`)
        commit('setWeatherData', response.data)
      } catch (error) {
        console.log(error)
        // commit('setError', error.message || 'Failed to fetch data')
      }
    },
    async fetchForecastData({ commit,state }) {
      //   commit('setLoading', true)
        try {
          console.log(state)
          const response = await axios.get(`http://localhost:3000/weather/getForecast?date=${state.fromDate}&city=${state.city}`)
          commit('setForecastData', response.data)
        } catch (error) {
          console.log(error)
          // commit('setError', error.message || 'Failed to fetch data')
        }
      },
      async fetchFiveDaysForecastData({ commit,state }) {
        //   commit('setLoading', true)
          try {
            console.log(state)
            const response = await axios.get(`http://localhost:3000/weather/getFiveDaysForecastData?city=${state.city}`)
            commit('setFiveDaysForecastData', response.data)
          } catch (error) {
            console.log(error)
            // commit('setError', error.message || 'Failed to fetch data')
          }
        },
      async updateCity({ commit,state }, cityName) {
        console.log("cityname",cityName)
        commit('setCity', cityName)
        const response = await axios.get(`http://localhost:3000/weather/getCurrentWeather?city=${cityName}`)
        commit('setWeatherData', response.data)

        const response2 = await axios.get(`http://localhost:3000/weather/getForecast?date=${state.fromDate}&city=${cityName}`)
        commit('setForecastData', response2.data)

        const response3 = await axios.get(`http://localhost:3000/weather/getHistoricData?city=${cityName}&fromDate=${state.fromDate}&toDate=${state.toDate}`)
        commit('setHistoricData', response3.data)

        const response4 = await axios.get(`http://localhost:3000/weather/getFiveDaysForecastData?city=${cityName}`)
            commit('setFiveDaysForecastData', response4.data)
      },
      async updateFromDate({ commit }, fromDate) {
        console.log("fromDate",fromDate)
        commit('setFromDate', fromDate)
        // const response = await axios.get(`http://localhost:3000/weather/getForecast?date=${date}&city=${state.city}`)
        // commit('setForecastData', response.data)
      },
      async updateToDate({ commit,state }, toDate) {
        console.log("toDate",toDate)
        commit('setToDate', toDate)
        const response = await axios.get(`http://localhost:3000/weather/getHistoricData?city=${state.city}&fromDate=${state.fromDate}&toDate=${toDate}`)
        commit('setHistoricData', response.data)
      },
      async fetchHistoricData({ commit }) {
        //   commit('setLoading', true)
          try {
            const response = await axios.get(`http://localhost:3000/weather/getHistoricData`)
            commit('setHistoricData', response.data)
          } catch (error) {
            console.log(error)
            // commit('setError', error.message || 'Failed to fetch data')
          }
        },

        async fetchChartData({ commit,state }) {
          //   commit('setLoading', true)
            try {
              // console.log(state)
              // const response = await axios.get(`http://localhost:3000/weather/getDailyChartData`)

              const response = await axios.post('http://localhost:3000/weather/getDailyChartData', {
                "locations":state.locations
              });

              console.log("chartdata---",response.data)
              commit('setChartData', response.data)
            } catch (error) {
              console.log(error)
              // commit('setError', error.message || 'Failed to fetch data')
            }
          },

          async updateLocations({ commit }, locations) {
            console.log("locations",locations)
            commit('setLocations', locations)

            const response = await axios.post('http://localhost:3000/weather/getDailyChartData', {
              "locations":locations
            });

            // console.log("chartdata---",response.data)
            commit('setChartData', response.data)
            // const response = await axios.get(`http://localhost:3000/weather/getHistoricData?city=${state.city}&fromDate=${state.fromDate}&toDate=${toDate}`)
            // commit('setHistoricData', response.data)
          },
  },
  getters: {
    city(state) {
      return state.city
    },
    date(state) {
      return state.date
    },
    weatherData(state) {
      return state.weatherData
    },
    ForecastData(state) {
      return state.ForecastData
    },
    FiveDaysForecastData(state) {
      return state.FiveDaysForecastData
    },
    historicData(state) {
      return state.historicData
    },
    chartData(state) {
      return state.chartData
    },
    locations(state) {
      return state.locations
    }
  }
})

export default store
