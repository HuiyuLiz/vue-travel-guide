<template>
  <Carousel
    :settings="settings"
    :breakpoints="breakpoints"
    :wrap-around="true"
  >
    <Slide
      v-for="slide in 9"
      :key="slide"
    >
      <Card
        :show-scenic-spots="true"
        :show-location="false"
      />
    </Slide>
    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import Card from '@/components/Card'
import 'vue3-carousel/dist/carousel.css'
export default defineComponent({
  name: 'ScenicSpotsCarousel',
  components: {
    Carousel,
    Slide,
    Card,
    Navigation
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
        itemsToShow: 4.2,
        snapAlign: 'start'
      }
    }
  })
})
</script>
