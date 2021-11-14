<template>
  <section>
    <div class="container-fluid bg-cover py-5 d-flex flex-column justify-content-center">
      <div class="container">
        <div class="row">
          <div class="col">
            <div
              class="
                display-5
                text-left
                mb-2
                fw-bolder
                text-white text-shadow
              "
            >
              在任何角落都能找到舒適住宿
            </div>
            <p class="text-left text-white text-shadow">
              還不知道想去哪嗎？別擔心。
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container py-5">
      <div class="row mb-4">
        <div class="d-flex align-items-center h5">
          <div>熱門住宿</div>
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
      <div class="d-flex justify-content-center mt-5">
        <Pagination />
      </div>
    </div>
  </section>
</template>

<script>
import { ref, computed } from 'vue'
import Card from '@/components/Card'
import Pagination from '@/components/Pagination'
export default {
  name: 'Cities',
  components: {
    Card,
    Pagination
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
  background-image: url("../assets/image/Group28.jpg");
  width: 100%;
  min-height: 400px;
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
  transform: translateX(-.75rem);
}

.text-shadow {
  text-shadow: 0px 4px 4px rgba(33, 43, 40, 0.37);
}
</style>
