<template>
  <nuxt-link :to="`/posts/entry/` + item.id">
    <b-card no-body>
      <client-only placeholder="Loading...">
        <b-card-img top :src="item.introduct.file.url" />
      </client-only>
      <b-card-body>
        <b-card-title class="title">{{ item.title }}</b-card-title>
        <b-card-text class="text">{{ item.discription }}</b-card-text>
      </b-card-body>
    </b-card>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {
        return {
          id: String,
          title: String,
          discription: String,
          introduct: {
            file: {
              url: String,
            },
          },
        }
      },
    },
  },
}
</script>
