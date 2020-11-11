<template>
  <b-breadcrumb
    :items="breadcrumb"
    class="bg-transparent m-auto p-0 justify-content-center"
  />
</template>

<script>
export default {
  props: ['entry'],
  computed: {
    pageNum() {
      return this.$store.state.contentful.pageNumber
    },
    breadcrumb() {
      return [
        { text: 'Top', to: '/' },
        { text: 'Posts', to: '/posts/' + this.pageNum },
        { text: 'Entry', active: true },
      ]
    },
  },
}
</script>
