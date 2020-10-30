<template>
  <b-container fluid class="text-center bg-info p-5">
    <b-row>
      <b-col>
        <h1 class="text-dark">{{ entry.title }}</h1>
        <b-breadcrumb
          :items="breadcrumb"
          class="bg-transparent m-auto p-0 justify-content-center"
        />
      </b-col>
    </b-row>
  </b-container>
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
