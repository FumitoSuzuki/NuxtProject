<template>
  <div id="app">
    <transition name="page">
      <Nuxt />
    </transition>
    <TheNavbar />
  </div>
</template>

<style>
body {
  background-color: var(--secondary);
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
