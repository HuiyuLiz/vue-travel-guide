<template>
  <div class="row">
    <div
      v-for="area in AreaIcons"
      :key="area.area"
      class="city-card mb-3"
      @click="selectArea(area.area)"
    >
      <div class="card-body">
        <div class="card-round-image mx-auto">
          <img
            :src="area.image"
            :alt="area.area"
          >
        </div>
        <p class="card-text text-center mt-3 fw-bold">
          {{ area.area }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import icon1 from '@/assets/image/city-icon1.png'
import icon2 from '@/assets/image/city-icon2.png'
import icon3 from '@/assets/image/city-icon3.png'
import icon4 from '@/assets/image/city-icon4.png'
import icon5 from '@/assets/image/city-icon5.png'
export default {
  name: 'CitiesCard',
  setup (props, context) {
    const AreaIcons = ref([
      {
        area: '北部',
        image: icon1
      },
      {
        area: '中部',
        image: icon2
      },
      {
        area: '南部',
        image: icon3
      },
      {
        area: '東部',
        image: icon4
      },
      {
        area: '離島',
        image: icon5
      }
    ])

    const selectArea = (city) => {
      context.emit('selectArea', city)
    }
    return {
      AreaIcons,
      selectArea
    }
  }
}
</script>

<style lang="scss" scoped>
.city-card {
  width: 7rem;
  min-width: 124px;
  border: none;
  border-radius: 1rem;
  box-shadow: 0px 4px 40px 0px #0000001f;
  margin:0 0.85rem;
  padding: 0.75rem 0;
  background: white;
  cursor: pointer;
}

.card-round-image {
  display: flex;
  align-items: center;
  width: 100%;
  width: 76px;
  height: 76px;
  justify-content: center;
  background: linear-gradient(155.4deg, #78e389 0.2%, #1eb893 90.81%);
  border-radius: 50%;
  img {
    width: 65%;
    height: 76px;
    object-fit: contain;
  }
}
</style>
