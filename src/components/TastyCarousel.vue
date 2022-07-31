<template>
  <Carousel
    :settings="settings"
    :breakpoints="breakpoints"
    :wrap-around="true"
  >
    <Slide
      v-for="item in items"
      :key="item.RestaurantName"
    >
      <div
        class="carousel__item"
        :style="`
          background-image: url(${item?.Picture?.PictureUrl1 || initImage});
        `"
      >
        <div class="text-white text-start">
          {{ item?.RestaurantName }}
        </div>
        <div class="d-flex justify-content-between align-items-center w-100">
          <small class="text-white"> {{ item?.Class }}</small>
          <button class="btn btn-dark btn-sm">
            {{ item?.Address?.substring(0,3) }}
          </button>
        </div>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
export default defineComponent({
  name: 'TastyCarousel',
  components: {
    Carousel,
    Slide,
    Navigation
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    settings: {
      itemsToShow: 1,
      snapAlign: 'center'
    },
    breakpoints: {
      768: {
        itemsToShow: 3,
        snapAlign: 'center'
      },
      1024: {
        itemsToShow: 4.5,
        snapAlign: 'start'
      }
    },
    initImage: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80'
  }),
  mounted () {
    document.querySelector('.carousel__prev').style.top = 25 + '%'
    document.querySelector('.carousel__next').style.top = 70 + '%'
    document.querySelector('.carousel__next').style.right = 10 + '%'
  }
})
</script>
<style lang="scss">
.carousel__slide {
  padding:1.5rem 1.75rem 1.5rem 0;
}
.carousel__item {
  min-height: 335px;
  width: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: flex-start;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  overflow: hidden;
  background-position: center;
  background-size: cover;
  padding: 0.75rem;
  position: relative;
  div {
    z-index: 2;
  }
  &::after {
    position: absolute;
    width: 100%;
    height: 200px;
    left: 0px;
    right: 0;
    bottom: 0px;
    content: "";
    background: linear-gradient(
      360deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0) 100%
    );
  }
}

.carousel__prev {
  background-color: rgba(255, 255, 255, 0.63);
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.15);
  border-radius: 72px;
  width: 72px;
  height: 72px;
  text-align: center;
  font-size: calc(var(--vc-nav-width) * 2 / 3);
  padding: 0;
  color: var(--vc-nav-color);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border: 0;
  cursor: pointer;
  .carousel__icon {
    background-image: url("../assets/image/slider-btn.svg");
    background-repeat: no-repeat;
    z-index: 100;
    fill: none;
  }
}

.carousel__next {
  background: linear-gradient(120.85deg, #5FE774 -28.71%, #1EB893 68.7%);
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.15);
  border-radius: 72px;
  width: 72px;
  height: 72px;
  text-align: center;
  font-size: calc(var(--vc-nav-width) * 2 / 3);
  padding: 0;
  color: var(--vc-nav-color);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border: 0;
  cursor: pointer;
  .carousel__icon {
    background-image: url("../assets/image/slider-btn-h.svg");
    background-repeat: no-repeat;
    background-position-x: 5px;
    z-index: 100;
    fill: none;
  }
}
</style>
