<template>
  <button
    class="
      btn btn-linear-gradient
      overflow-hidden
      text-white
      d-flex
      justify-content-center
      align-items-center
      py-2
      px-3
      mt-3
    "
  >
    <small class="text-small me-2"> {{ content }} </small>
    <span class="btn-decoration" />
  </button>
</template>

<script>
export default {
  name: 'GradientButton',
  props: {
    content: {
      type: String,
      default: '內容文字'
    }
  }
}
</script>

<style>
</style>
