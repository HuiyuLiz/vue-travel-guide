<template>
  <!-- navbar -->
  <nav class="navbar navbar-expand-lg navbar-light shadow-sm">
    <div class="container">
      <a
        class="navbar-brand"
        href="/"
      > <img
        src="../assets/image/logo.svg"
        alt="logo"
        class="img-fluid"
      > </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div
        id="navbarSupportedContent"
        class="collapse navbar-collapse justify-content-center align-center"
      >
        <div>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item mx-2">
              <router-link
                class="nav-link text-dark"
                :to="{name:'Activity'}"
              >
                特色活動
              </router-link>
            </li>
            <li class="nav-item mx-2">
              <router-link
                class="nav-link text-dark"
                :to="{name:'Restaurant'}"
              >
                美食饗宴
              </router-link>
            </li>
            <li class="nav-item mx-2">
              <router-link
                class="nav-link text-dark"
                :to="{name:'Hotel'}"
              >
                精選住宿
              </router-link>
            </li>
            <li>
              <form class="d-flex align-self-end d-lg-none position-relative">
                <input
                  class="form-control custom-form-input"
                  type="search"
                  placeholder="搜尋關鍵字"
                  aria-label="Search"
                >
                <div class="search-icon">
                  <img
                    src="../assets/image/search-icon1.svg"
                    alt=""
                  >
                </div>
              </form>
            </li>
          </ul>
        </div>
      </div>
      <form class="d-none align-self-end d-lg-flex position-relative">
        <input
          class="form-control custom-form-input"
          type="search"
          placeholder="搜尋關鍵字"
          aria-label="Search"
        >
        <div class="search-icon">
          <img
            src="../assets/image/search-icon1.svg"
            alt=""
          >
        </div>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
.navbar-brand {
  margin-right: 7rem;
  img {
    width: 7rem;
  }
}

.custom-form-input{
  background: #F5F5F5;
  border: 3px solid #F0F0F0;
  box-sizing: border-box;
  border-radius: 34px;
  opacity: 0;
}

.search-icon{
  width: 1.25rem;
  color: #707070;
  position: absolute;
  right: 1.5rem;
  top: .45rem;
  opacity: 0;
  img{
    width: 100%;
    object-fit: cover;
  }
}
</style>
