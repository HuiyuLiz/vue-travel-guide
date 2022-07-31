<template>
  <div class="d-flex flex-column h-100">
    <Header />
    <router-view v-slot="{ Component }">
      <transition
        name="fade"
        mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </router-view>
    <Footer />
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  components: {
    Header,
    Footer
  },
  setup () {
    const store = useStore()

    // 取得 Token
    const getAuthorizationHeader = () => {
      store.dispatch('GET_AUTHORIZATION_HEADER')
      console.log('getAuthorizationHeader')
    }

    onMounted(() => {
      getAuthorizationHeader()
    })

    return {
    }
  }
}
</script>

<style lang="scss">
@import './assets/style/index';
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
