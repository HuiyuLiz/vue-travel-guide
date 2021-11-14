<template>
  <section>
    <div class="container-fluid bg-cover" />
    <div class="container-fluid bg-light py-5">
      <div class="container">
        <div class="row">
          <h4 class="text-center mb-5">
            縣市快選
          </h4>
        </div>
        <div class="d-flex justify-content-center">
          <CitiesCard @selectArea="selectArea" />
        </div>
        <div class="row row-cols-auto justify-content-center my-3">
          <div
            v-for="area in currentArea"
            :key="area.city"
            class="col"
            @click="selectCity(area.city)"
          >
            <h5 class="fw-normal">
              <div
                class="
                  badge
                  rounded-pill
                  bg-none
                  px-4
                  py-3
                  text-dark
                  fw-normal
                "
                :class="{'active bg-white':currentCity===area.city}"
              >
                {{ area.city }}
              </div>
            </h5>
          </div>
        </div>
      </div>
    </div>
    <div class="container pt-5 d-none">
      <div class="row">
        <div class="d-flex align-items-center h5">
          <div class="text-success me-2">
            {{ currentCity }}
          </div>
          <div>景點介紹</div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 px-0">
          <ScenicSpotsCarousel />
          <div class="d-flex justify-content-center">
            <DotDecoration />
          </div>
        </div>
      </div>
    </div>
    <div class="container py-5">
      <div class="row mb-4">
        <div class="d-flex align-items-center h5">
          <div class="icon me-2">
            <img
              src="../assets/image/activity-icon.svg"
              class="img-fluid"
              alt=""
            >
          </div>
          <div>特色活動</div>
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div
          v-for="n in 8"
          :key="n"
          class="col-md-3 mb-4"
        >
          <Card :show-category="true" />
        </div>
      </div>
      <div class="row justify-content-center">
        <DotDecoration />
      </div>
    </div>
    <div class="container-fluid bg-light">
      <div class="container py-5">
        <div class="row mb-4">
          <div class="d-flex align-items-center h5">
            <div class="icon me-2">
              <img
                src="../assets/image/food-icon.svg"
                class="img-fluid"
                alt=""
              >
            </div>
            <div>餐飲美食</div>
          </div>
        </div>
        <div class="row d-flex justify-content-center">
          <div
            v-for="n in 10"
            :key="n"
            class="col mb-4"
          >
            <FoodCard />
          </div>
        </div>
        <div class="row justify-content-center">
          <DotDecoration />
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="container py-5">
        <div class="row mb-4">
          <div class="d-flex align-items-center h5">
            <div class="icon me-2">
              <img
                src="../assets/image/hotel-icon.svg"
                class="img-fluid"
                alt=""
              >
            </div>
            <div>優質住宿</div>
          </div>
        </div>
        <div class="row">
          <div
            v-for="n in 8"
            :key="n"
            class="col-md-3 mb-4"
          >
            <Card
              :show-price="true"
              :show-location="false"
            />
          </div>
        </div>
        <div class="row justify-content-center">
          <DotDecoration />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, computed } from 'vue'
import Card from '@/components/Card'
import FoodCard from '@/components/FoodCard'
import CitiesCard from '@/components/CitiesCard'
import DotDecoration from '@/components/DotDecoration'
import ScenicSpotsCarousel from '@/components/ScenicSpotsCarousel'
export default {
  name: 'Cities',
  components: {
    Card,
    FoodCard,
    CitiesCard,
    DotDecoration,
    ScenicSpotsCarousel
  },
  setup () {
    // 地區
    const areas = ref({
      北部: [
        {
          city: '臺北市'
        },
        {
          city: '新北市'
        },
        {
          city: '基隆市'
        },
        {
          city: '宜蘭縣'
        },
        {
          city: '桃園市'
        },
        {
          city: '新竹縣'
        },
        {
          city: '新竹市'
        }
      ]
    })
    const currentArea = computed(() => areas.value['北部'])
    const currentCity = ref('臺北市')
    const selectArea = (city) => {
      console.log('selectArea', city)
    }

    const selectCity = (city) => {
      currentCity.value = city
      console.log(currentCity.value)
    }
    return {
      selectArea,
      selectCity,
      areas,
      currentArea,
      currentCity
    }
  }
}
</script>

<style lang="scss" scoped>
.bg-cover {
  background-image: url("../assets/image/bn3.jpg");
  width: 100%;
  height: 150px;
  background-size: cover;
  background-position: bottom;
}

.badge{
  position: relative;
  cursor: pointer;
  &.active {
  &::before {
    content: "";
    position: absolute;
    display: block;
    left: 50%;
    bottom: .35rem;
    width: .85rem;
    height: 4px;
    border-radius: 6px;
    background-color:  #10CC9F;
    transform:translate(-50%,0);
  }
  }
}

.icon{
  width: 1.45rem;
}
</style>
