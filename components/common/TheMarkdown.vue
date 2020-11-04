<template>
  <article v-html="markup" />
</template>

<script>
export default {
  props: ['md'],
  computed: {
    markup() {
      return this.$md.render(this.md)
    },
  },
}
</script>

<style>
blockquote {
  background: var(--light);
  border-left: 0.5rem solid var(--info);
  padding: 1rem;
}
blockquote > p {
  margin: auto;
  color: darkslategrey;
}
</style>
