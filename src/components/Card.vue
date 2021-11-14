<template>
  <div class="card w-100 py-0">
    <img
      src="https://images.unsplash.com/photo-1574719623785-0badbd82e891?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80"
      class="card-img-top img-fluid"
      alt="..."
    >
    <div class="card-body">
      <h5 class="card-title h5 d-flex align-self-start">
        2021大溪豆干節
      </h5>
      <small class="text-secondary d-flex align-self-start">
        花蓮縣壽豐鄉鹽寮村6鄰福德49-2號
      </small>
      <div class="d-flex justify-content-between align-items-center pt-4">
        <div v-if="showPrice">
          <div class="d-flex">
            <div class="h6 mb-0">
              NT$ 1,200
            </div>
            <small class="text-secondary ms-1 text-small">起</small>
          </div>
        </div>
        <div v-if="showCategory">
          <button class="btn btn-sm btn-light me-2 px-2">
            年度
          </button>
          <button class="btn btn-sm btn-light px-2">
            年度
          </button>
        </div>
        <div v-if="showScenicSpots">
          <div class="d-flex">
            <div class="me-2">
              <img
                class="img-icon"
                src="../assets/image/time-icon.svg"
                alt=""
              >
            </div>
            <div>全天候開放</div>
          </div>
          <div class="d-flex">
            <div class="me-2">
              <img
                class="img-icon"
                src="../assets/image/location-icon.svg"
                alt=""
              >
            </div>
            <div class="d-flex align-self-left">
              臺東縣951綠島鄉溫泉路167號
            </div>
          </div>
        </div>
        <button
          v-if="showLocation"
          class="btn btn-sm bg-none text-primary"
        >
          桃園市
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    showPrice: {
      type: Boolean,
      default: false
    },
    showCategory: {
      type: Boolean,
      default: false
    },
    showScenicSpots: {
      type: Boolean,
      default: false
    },
    showLocation: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
.card {
  border: none;
  border-radius: 1rem;
  box-shadow: 0px 2px 10px 0px #0000001f;
}
.card-img,
.card-img-top {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.img-icon {
  width: .95rem;
  transform: translateY(-.05rem);
}
</style>
