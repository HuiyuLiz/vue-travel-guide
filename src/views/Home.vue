<template>
  <div class="overflow-hidden content">
    <!-- main-banner -->
    <div
      class="container-fluid d-flex flex-column justify-content-center bg-cover"
    >
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
        <div class="col-md-3 mb-4">
          <Card :show-category="true" />
        </div>
        <div class="col-md-3 mb-4">
          <Card :show-category="true" />
        </div>
        <div class="col-md-3 mb-4">
          <Card :show-category="true" />
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
          />
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-md-3 mb-4">
          <Card :show-category="true" />
        </div>
        <div class="col-md-3 mb-4">
          <Card :show-category="true" />
        </div>
        <div class="col-md-3 mb-4">
          <Card :show-category="true" />
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
            tasty
          </p>
          <GradientButton
            content="更多美味"
          />
        </div>
        <div class="col-md-8 px-0">
          <TastyCarousel />
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
              accommodation
            </p>
          </div>
          <div
            v-for="n in 4"
            :key="n"
            class="col-md-3 mb-4"
          >
            <Card
              :show-price="true"
              :show-category="false"
              :class="{'mt-md-3':n%2===0}"
            />
          </div>
          <div class="my-5 mx-auto">
            <GradientButton
              content="更多住宿"
              class="mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- {{ scenicSpots }} -->
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getScenicSpot } from '@/api/ptx'
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
    const router = useRouter()
    // 觀光景點
    const scenicSpots = ref([])

    // 取得所有觀光景點資料
    const getScenicSpotHandler = async () => {
      try {
        const response = await getScenicSpot({
          $top: 30,
          $format: 'JSON'
        })
        scenicSpots.value = response.data ? response.data : []
      } catch (error) {
        console.log(error)
      }
    }

    const selectArea = (area) => {
      console.log('selectArea', area)
      router.push({
        name: 'Cities'
      })
    }
    onMounted(() => {
      getScenicSpotHandler()
    })

    return {
      scenicSpots,
      selectArea
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
  &::before{
    position: absolute;
    right: 0;
    top: -50%;
    bottom: 0;
    display: flex;
    content: "";
    z-index: -2;
    background-image:url('../assets/image/deco3.png');
    width: 291.79px;
    height: 447.46px;
    background-size: cover;
    background-position: bottom;
  }
}
.bg-bottom-rounded{
  position: relative;
  &::before{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    content: "";
    z-index: -2;
    background-image:url('../assets/image/Subtract.svg');
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
