<template>
  <section>
    <div class="container py-5">
      <div class="row">
        <h4 class="text-left mb-3">
          美食饗宴
        </h4>
      </div>
      <div class="row row-cols-auto justify-content-center my-3">
        <div class="col-md-3 d-flex flex-row flex-wrap justify-content-start bg-dark-light align-items-center py-4 ps-4 border-left-radius">
          <div
            v-for="area in areas"
            :key="area.area"
            class="me-3 d-flex align-self-center"
            @click="selectArea(area.area)"
          >
            <h5 class="fw-normal mb-0">
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
                :class="{'bg-success text-white':currentArea === area.area}"
              >
                {{ area.area }}
              </div>
            </h5>
          </div>
        </div>
        <div class="col-md-9 d-flex flex-row bg-light justify-content-center  align-items-center border-right-radius ">
          <div
            v-for="area in currentAreas"
            :key="area.city"
            class="me-3 d-flex align-self-center"
            @click="selectCity(area.city)"
          >
            <h5 class="fw-normal mb-0">
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
                :class="{'bg-white':currentCity===area.city}"
              >
                {{ area.city }}
              </div>
            </h5>
          </div>
        </div>
      </div>
    </div>
    <div class="container pb-5">
      <div class="row mb-4">
        <div class="d-flex align-items-end h5">
          <div class="me-3">
            {{ currentCity }}
          </div>
          <small class="text-small text-secondary">共有 <span class="text-success">32</span> 個特色活動</small>
        </div>
      </div>
      <div class="row">
        <div class="col-9">
          <div
            v-for="n in 8"
            :key="n"
            class="mb-3"
          >
            <RestaurantCard />
          </div>
        </div>
        <div class="col-2 bg-light-secondary p-3 ms-auto align-self-start">
          <h5 class="mb-3">
            分類篩選
          </h5>
          <div class="d-flex flex-column">
            <CheckBox class="mb-2" />
            <CheckBox class="mb-2" />
            <CheckBox class="mb-2" />
            <CheckBox class="mb-2" />
            <CheckBox class="mb-2" />
          </div>
        </div>
      </div>
      <div class="row my-5">
        <div class="d-flex justify-content-center">
          <Pagination />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, computed } from 'vue'
import RestaurantCard from '@/components/RestaurantCard'
import Pagination from '@/components/Pagination'
import CheckBox from '@/components/CheckBox'
export default {
  name: 'Cities',
  components: {
    RestaurantCard,
    CheckBox,
    Pagination
  },
  setup () {
    const areas = ref([
      {
        area: '北部'
      },
      {
        area: '中部'
      },
      {
        area: '南部'
      },
      {
        area: '東部'
      },
      {
        area: '離島'
      }
    ])
    const currentArea = ref('北部')
    const selectArea = (area) => {
      currentArea.value = area
      console.log('selectArea', area)
    }
    // 地區
    const cities = ref({
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
    const currentAreas = computed(() => cities.value['北部'])
    const currentCity = ref('臺北市')

    const selectCity = (city) => {
      currentCity.value = city
      console.log(currentCity.value)
    }
    return {
      selectArea,
      selectCity,
      areas,
      currentArea,
      currentAreas,
      currentCity
    }
  }
}
</script>

<style lang="scss" scoped>
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
  transform: translateX(-.75rem);
}

.bg-dark-light{
  background:  #F2F2F2;
  border-right:1px solid #DEDEDE;
  position: relative;
   &::before {
    position: absolute;
    width: 1rem;
    height: 1rem;
    right: -1rem;
    top: 50%;
    transform: translateY(-50%);
    content: "";
    background-image: url("../assets/image/Polygon.svg");
    background-repeat: no-repeat;
    background-size: contain;
  }
}

.border-left-radius{
  border-top-left-radius: 0.75rem;
  border-bottom-left-radius: 0.75rem;
}

.border-right-radius{
  border-top-right-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem;
}

.bg-light-secondary{
  border-radius: 10px;
  background: #F6F6F6;;
}
</style>
