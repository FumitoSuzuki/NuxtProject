<template>
  <b-row class="mb-3">
    <b-col>
      <h1 class="text-dark">Blog Posts</h1>
      <b-breadcrumb
        :items="breadcrumb"
        class="bg-transparent m-auto p-0 justify-content-center"
      />
    </b-col>
  </b-row>
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
