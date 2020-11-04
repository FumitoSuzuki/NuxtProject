<template>
  <FullsizeBox class="p-2">
    <b-container class="intro-image text-light" fluid>
      <b-row style="min-height: 20%"></b-row>
      <b-row align-v="center" style="min-height: 60%">
        <b-col cols="12" class="text-center">
          <h1 class="site-title">{{ siteTitle }}</h1>
          <p></p>
        </b-col>
      </b-row>
      <b-row align-h="center" style="min-height: 20%">
        <b-col cols="12" class="text-center">
          <Logo :width="Number(60)" :height="Number(50)" />
        </b-col>
      </b-row>
    </b-container>
  </FullsizeBox>
</template>

<script>
export default {
  data() {
    return {
      siteTitle: 'Hello NUXT JS.',
    }
  },
}
</script>

<style scoped>
.site-title {
  text-shadow: 0px 2px 2px rgb(73, 120, 129, 0.25);
}
.intro-image {
  background-image: url('/image/abstract-2468874_1920.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
}
</style>
