<template>
  <div class="overflow-hidden content">
    <!-- main-banner -->
    <div class="container-fluid d-flex flex-column justify-content-center bg-cover">
      <div class="container">
        <div class="row">
          <div class="col-md-8 mx-auto py-5">
            <div
              class="
                display-5
                text-center
                mb-2
                fw-bolder
                text-white text-shadow
              "
            >
              想去哪裡玩?
            </div>
            <p class="text-center mb-5 text-white text-shadow">
              這裡共有上千個活動及美食等著你去一同體驗
            </p>
            <form
              class="
                form-inline
                d-flex
                align-items-center
                position-relative
                custom-lg-search-input
              "
            >
              <input
                class="form-control mr-sm-2 custom-lg-form-input"
                type="search"
                placeholder="12/22新北耶誕嘉年華"
                aria-label="Search"
                size="10"
                maxlength="10"
              >
              <button
                type="button"
                class="
                  btn btn-linear-gradient
                  overflow-hidden
                  position-absolute
                  text-white
                  d-flex
                  justify-content-between
                "
              >
                <div class="search-icon">
                  <img
                    src="../assets/image/search-icon2.svg"
                    alt=""
                  >
                </div>
                <div class="me-2">
                  搜尋
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- 縣市快選 -->
    <div class="container-fluid py-5 bg-rounded">
      <div class="container py-5">
        <div class="row">
          <div class="col-md-4 ms-auto align-self-center">
            <h3 class="text-center">
              縣市快選
            </h3>
            <div class="text-center text-secondary">
              Choose Cities
            </div>
          </div>
          <div class="col-md-8">
            <CitiesCard @selectArea="selectArea" />
          </div>
        </div>
      </div>
    </div>
    <!-- 更多Funny -->
    <div class="container mb-5 pb-5">
      <div class="row">
        <div
          v-for="scenicSpot in preScenicSpots"
          :key="scenicSpot.ScenicSpotID"
          class="col-md-3 mb-4"
        >
          <Card
            :title="scenicSpot.ScenicSpotName"
            :content="scenicSpot"
            :show-category="true"
            @clickHandler="clickHandler"
          />
        </div>
        <div
          class="
            col-md-3
            mb-4
            d-flex
            flex-column
            justify-content-center
            align-items-start
          "
        >
          <div class="h3">
            多久沒有
          </div>
          <div class="h3">
            出門走走了呢？
          </div>
          <p class="text-secondary">
            Let’s get out
          </p>
          <GradientButton
            content="更多Funny"
            @click="goToPage('activity')"
          />
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div
          v-for="scenicSpot in nextScenicSpots"
          :key="scenicSpot.ScenicSpotID"
          class="col-md-3 mb-4"
        >
          <Card
            :title="scenicSpot.ScenicSpotName"
            :content="scenicSpot"
            :show-category="true"
            @clickHandler="clickHandler"
          />
        </div>
      </div>
    </div>
    <!-- 餐飲美食 -->
    <div class="container-fluid mb-5 bg-half-rounded py-5">
      <div class="row">
        <div
          class="
            col-md-2 mb-4 d-flex flex-column justify-content-center align-items-start ms-auto me-md-5
          "
        >
          <div class="h3">
            餐飲美食
          </div>
          <p class="text-secondary">
            Restaurants
          </p>
          <GradientButton
            content="更多美味"
            @click="goToPage('restaurant')"
          />
        </div>
        <div class="col-md-8 px-0">
          <TastyCarousel :items="restaurants" />
        </div>
      </div>
    </div>
    <!-- 精選住宿 -->
    <div class="container-fluid pb-5 bg-bottom-rounded">
      <div class="container">
        <div class="row">
          <div class="text-center mb-5">
            <div class="h3">
              精選住宿
            </div>
            <p class="text-secondary">
              Hotels
            </p>
          </div>
          <div
            v-for="hotel in hotels"
            :key="hotel.HotelID"
            class="col-md-3 mb-4"
          >
            <Card
              :title="hotel.HotelName"
              :content="hotel"
              :show-price="false"
              :show-category="true"
              :class="{ 'mt-md-3': n % 2 === 0 }"
              @clickHandler="clickHandler"
            />
          </div>
          <div class="my-5 mx-auto">
            <GradientButton
              content="更多住宿"
              class="mx-auto"
              @click="goToPage('hotel')"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import Card from '@/components/Card'
import CitiesCard from '@/components/CitiesCard'
import GradientButton from '@/components/GradientButton'
import TastyCarousel from '@/components/TastyCarousel'
export default {
  name: 'Home',
  components: {
    Card,
    GradientButton,
    TastyCarousel,
    CitiesCard
  },
  setup () {
    const store = useStore()
    const router = useRouter()

    // 觀光景點
    const preScenicSpots = computed(() => {
      return store.getters.scenicSpots.filter((scenicSpot, index) => index <= 2)
    })
    const nextScenicSpots = computed(() => {
      return store.getters.sortedScenicSpots.filter((scenicSpot, index) => index >= 3)
    })

    // 餐飲
    const restaurants = computed(() => {
      return store.getters.restaurants
    })

    // 餐飲
    const hotels = computed(() => {
      return store.getters.hotels.filter((hotel, index) => index <= 3)
    })

    const clickHandler = (content) => {
      window.open('https://www.google.com/maps/search/' + content.Address, '_blank')
    }

    // 取得所有觀光景點資料
    const getScenicSpotHandler = () => {
      store.dispatch('GET_SCENICSPOT')
    }

    // 取得所有餐飲資料
    const getRestaurantHandler = () => {
      store.dispatch('GET_RESTAURANT')
    }

    // 取得所有旅宿資料
    const getHotelHandler = () => {
      store.dispatch('GET_HOTEL')
    }

    const selectArea = (area) => {
      console.log('selectArea', area)
      router.push({
        name: 'Cities'
      })
    }

    const goToPage = (page) => {
      router.push(`/${page}`)
    }

    onMounted(() => {
      getScenicSpotHandler()
      getRestaurantHandler()
      getHotelHandler()
    })

    return {
      selectArea,
      goToPage,
      preScenicSpots,
      nextScenicSpots,
      clickHandler,
      restaurants,
      hotels
    }
  }
}
</script>
<style lang="scss" scoped>
.bg-cover {
  background: url("../assets/image/bn.png");
  background-size: cover;
  background-position: bottom;
  height: 500px;
}

.bg-rounded {
  position: relative;
  height: 500px;

  &::after {
    position: absolute;
    width: 77%;
    height: 80%;
    left: 0px;
    top: 0px;
    content: "";
    background: #f7f7f7;
    border-radius: 0px 0px 136px 0px;
    z-index: -2;
  }

  &::before {
    position: absolute;
    width: 192px;
    height: 272px;
    left: 0px;
    bottom: -10%;
    content: "";
    background-image: url("../assets/image/deco1.png");
    background-repeat: no-repeat;
    background-size: contain;
    z-index: -1;
  }
}

.bg-half-rounded {
  position: relative;

  &::after {
    position: absolute;
    width: 50%;
    left: 0;
    top: 0;
    bottom: 0;
    display: flex;
    content: "";
    background: #f7f7f7;
    border-radius: 0px 242px 242px 0px;
    z-index: -2;
  }

  &::before {
    position: absolute;
    right: 0;
    top: -50%;
    bottom: 0;
    display: flex;
    content: "";
    z-index: -2;
    background-image: url('../assets/image/deco3.png');
    width: 291.79px;
    height: 447.46px;
    background-size: cover;
    background-position: bottom;
  }
}

.bg-bottom-rounded {
  position: relative;

  &::before {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    content: "";
    z-index: -2;
    background-image: url('../assets/image/Subtract.svg');
    width: 100%;
    height: 400px;
    background-size: cover;
    background-position: bottom;
  }
}

.text-shadow {
  text-shadow: 0px 4px 4px rgba(33, 43, 40, 0.37);
}

.custom-lg-form-input {
  background: #ffffff;
  border: 3px solid #e7e7e7;
  box-sizing: border-box;
  border-radius: 34px;
  padding: 0.75rem 0 0.75rem 1rem;
}

.custom-lg-search-input {
  position: relative;

  .btn {
    position: absolute;
    right: 0.75rem;
  }
}

.search-icon {
  width: 1.25rem;
  transform: translateY(-1px);
  margin-right: 0.25rem;

  img {
    width: 100%;
    object-fit: cover;
  }
}
</style>
