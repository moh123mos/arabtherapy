<template>
  <div>
    <NavBar />
    <HomePage />
    <FooterComponent />
  </div>
</template>
<script setup>
import HomePage from "./views/HomePage.vue";
import NavBar from "./components/NavBar.vue";
import FooterComponent from "./components/FooterComponent.vue";
</script>

<style lang="scss">
*,
*::before,
*::after,
ul,
p {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}
body {
  direction: rtl;
  font-family: "Cairo", sans-serif !important;
}
a {
  text-decoration: none;
}
.btn-primary {
  background: #2ab2c2 !important;
  border-color: #2ab2c2 !important;
  &:hover {
    color: #fff;
    background-color: #2ab2c2;
    border-color: #2ab2c2;
  }
}
</style>
