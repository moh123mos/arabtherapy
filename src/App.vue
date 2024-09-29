<template>
  <div>
    <NavBar />
    <AskOffer />
  </div>
</template>
<script setup>
import AskOffer from "./components/AskOffer.vue";
import NavBar from "./components/NavBar.vue";
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
</style>
