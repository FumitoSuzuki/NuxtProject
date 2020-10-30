<template>
  <AlignRowItems :class-name="['title', 'text']" :trigger="onThisPage">
    <b-row class="px-1">
      <b-col
        v-for="(item, key) in onThisPage"
        :key="key"
        cols="13"
        md="6"
        lg="3"
        class="mb-4 px-2"
      >
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
      </b-col>
    </b-row>
  </AlignRowItems>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('contentful', ['onThisPage']),
  },
}
</script>
