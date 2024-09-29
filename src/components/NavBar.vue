<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <a class="navbar-brand me-0 ms-3" to="/">
        <img src="@/assets/logo.svg" width="100%" alt="" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <img src="@/assets/menu-icon.svg" alt="" />
      </button>
      <div
        class="collapse navbar-collapse justify-content-between"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <a class="active" aria-current="page" to="/">الرئيسية</a>
          </li>
          <li class="nav-item">
            <a aria-current="page" to="/bolg">المدونة</a>
          </li>
          <li class="nav-item">
            <a aria-current="page" to="/about">من نحن</a>
          </li>
          <li class="nav-item">
            <a aria-current="page" to="/team">فريق عرب ثيرابي</a>
          </li>
          <li class="nav-item">
            <a aria-current="page" to="/company">مؤسسات</a>
          </li>
          <li class="nav-item">
            <a aria-current="page" to="/contact">اتصل بنا</a>
          </li>
          <li class="nav-item"><div class="lang">English</div></li>
        </ul>
        <div class="auth-btns text-sm-center text-lg-start">
          <div class="btn">تسجيل الخروج</div>
          <div class="btn btn-danger px-3">ابدأ الآن</div>
        </div>
      </div>
    </div>
  </nav>
</template>
<style lang="scss">
.navbar {
  font-family: "Cairo", sans-serif;
  direction: rtl;
  background-color: #fff;
  box-shadow: 0 0 3px #212529;
  .navbar-toggler {
    border: none;
    &:focus {
      box-shadow: none;
    }
  }
  ul.navbar-nav {
    gap: 20px;
    li {
      a {
        cursor: pointer;
        transition: 0.3s;
        border-bottom: 3px solid transparent;
        color: #212529;
        &:hover,
        &.active {
          border-bottom-color: #34b8c2;

          color: #34b8c2;
          text-decoration: none;
        }
        &.active {
          font-weight: bold;
        }
      }
    }
  }
}
</style>
