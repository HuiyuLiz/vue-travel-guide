<template>
  <div
    class="carousel__item"
    style="
          background-image: url('https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80');
        "
  >
    <div class="text-white">
      長角96
    </div>
    <div class="d-flex justify-content-between align-items-center w-100">
      <small class="text-white"> 異國料理 </small>
      <button class="btn btn-dark btn-sm">
        新北市
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FoodCard',
  props: {

  }
}
</script>

<style lang="scss" scoped>
.carousel__item {
  min-height: 230px;
  min-width: 230px;
  width: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: flex-start;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  overflow: hidden;
  background-size: cover;
  padding: 0.75rem;
  position: relative;
  div {
    z-index: 2;
  }
  &::after {
    position: absolute;
    width: 100%;
    height: 148px;
    left: 0px;
    right: 0;
    bottom: 0px;
    content: "";
    background: linear-gradient(
      360deg,
      rgba(0, 0, 0, 0.53) 0%,
      rgba(0, 0, 0, 0) 100%
    );
  }
}

</style>
