import { createStore } from 'vuex'
import { getAuthorizationHeader, getScenicSpot, getRestaurant, getHotel, getActivity, getActivityByCity } from '@/api/ptx'
import { getToken, setToken } from '@/api/auth'
const store = createStore({
  state () {
    return {
      access_token: getToken(),
      scenicSpots: [],
      restaurants: [],
      hotels: [],
      activities: [],
      activitiesByCity: [],
      defaultParameters: {
        $top: 30, // 取前幾筆
        $format: 'JSON' // 指定來源格式
      }
    }
  },
  getters: {
    access_token (state) {
      return state.access_token
    },
    scenicSpots (state) {
      return state.scenicSpots
    },
    sortedScenicSpots (state) {
      return state.scenicSpots.filter((scenicSpot, index) => index < 6)
    },
    restaurants (state) {
      return state.restaurants
    },
    hotels (state) {
      return state.hotels
    },
    activitiesByCity (state) {
      return state.activitiesByCity
    }
  },
  mutations: {
    set_token (state, token) {
      state.access_token = token
    },
    set_scenicspots (state, scenicSpot) {
      state.scenicSpots = scenicSpot
    },
    set_restaurants (state, restaurants) {
      state.restaurants = restaurants
    },
    set_hotels (state, hotels) {
      state.hotels = hotels
    },
    set_activities (state, activities) {
      state.activities = activities
    },
    set_activityByCity (state, activitiesByCity) {
      state.activitiesByCity = activitiesByCity
    }
  },
  actions: {
    async GET_AUTHORIZATION_HEADER ({ commit, dispatch }, payload) {
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
      const params = new URLSearchParams()
      params.append('grant_type', 'client_credentials')
      params.append('client_id', process.env.VUE_APP_CLIENT_ID)
      params.append('client_secret', process.env.VUE_APP_CLIENT_SECRET)

      try {
        const response = await getAuthorizationHeader(params, config)
        const token = response.data.token_type + ' ' + response.data.access_token || ''
        commit('set_token', token)
        setToken(token)
      } catch (error) {
        console.log(error)
      }
    },
    async GET_SCENICSPOT ({ commit, state }, payload) {
      try {
        const response = await getScenicSpot(state.defaultParameters)
        const data = response.data ? response.data : []
        commit('set_scenicspots', data)
      } catch (error) {
        commit('set_scenicspots', [])
      }
    },
    async GET_RESTAURANT ({ commit, state }, payload) {
      try {
        const response = await getRestaurant(state.defaultParameters)
        const data = response.data ? response.data : []
        console.log('GET_RESTAURANT', data)
        commit('set_restaurants', data)
      } catch (error) {
        commit('set_restaurants', [])
      }
    },
    async GET_HOTEL ({ commit, state }, payload) {
      try {
        const response = await getHotel(state.defaultParameters)
        const data = response.data ? response.data : []
        commit('set_hotels', data)
      } catch (error) {
        commit('set_hotels', [])
      }
    },
    async GET_ACTIVITY ({ commit, state }, payload) {
      try {
        const response = await getActivity(state.defaultParameters)
        const data = response.data ? response.data : []
        commit('set_activities', data)

        console.log('GET_ACTIVITY', data)
      } catch (error) {
        commit('set_activities', [])
      }
    },
    async GET_ACTIVITY_BY_CITY ({ commit, state }, payload) {
      console.log(payload)
      try {
        const response = await getActivityByCity(payload, state.defaultParameters)
        const data = response.data ? response.data : []
        commit('set_activityByCity', data)
        console.log(data)
      } catch (error) {
        commit('set_activityByCity', [])
      }
    }
  }
})

export default store
