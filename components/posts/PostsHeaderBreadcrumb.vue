<template>
  <b-breadcrumb
    :items="breadcrumb"
    class="bg-transparent m-auto p-0 justify-content-center"
  />
</template>

<script>
export default {
  computed: {
    pageNumber() {
      return this.$store.state.contentful.pageNumber
    },
    breadcrumb() {
      return [
        { text: 'Top', to: '/' },
        { text: 'Posts', to: '/posts/' },
        { text: this.pageNumber, active: true },
      ]
    },
  },
}
</script>
