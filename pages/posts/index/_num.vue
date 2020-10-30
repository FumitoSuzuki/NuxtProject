<template>
  <b-container class="my-5">
    <PostsListRow />
    <PostsPagenationRow />
  </b-container>
</template>

<script>
export default {
  async asyncData({ store, params }) {
    const pageNum = params.num ? params.num : '1'
    await store.commit('contentful/pageNumber', pageNum)
  },
}
</script>
