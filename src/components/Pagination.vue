<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item">
        <a
          class="page-link previous"
          href="javascript:;"
          aria-label="Previous"
        />
      </li>
      <li class="page-item">
        <a
          class="page-link page-link-item active"
          href="javascript:;"
        >1</a>
      </li>
      <li class="page-item">
        <a
          class="page-link page-link-item"
          href="javascript:;"
        >2</a>
      </li>
      <li class="page-item">
        <a
          class="page-link page-link-item"
          href="javascript:;"
        >3</a>
      </li>
      <li class="page-item">
        <a
          class="page-link next"
          href="javascript:;"
          aria-label="Next"
        />
      </li>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.page-item {
  display: flex;
  align-items: center;
  margin: 0 0.5rem;
}
.page-link {
  border: none;
  color: black;
}

.page-link-item {
  border-radius: 50%;
  display: flex;
  width: 2rem;
  height: 2rem;
  justify-content: center;
  align-items: center;
  border: 1px solid #D0D0D0;
  color:#D0D0D0;

  &.active{
    border: 1px solid black;
    background-color: black;
    color: white;
  }
}
.previous {
  background: url("../assets/image/Vector.svg") no-repeat;
  background-position: center center;
}
.next {
  background: url("../assets/image/Vector2.svg") no-repeat;
  background-position: center center;
}
.previous {
  background: url("../assets/image/Vector.svg") no-repeat;
  background-position: center center;
}
</style>
