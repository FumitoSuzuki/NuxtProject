<template>
  <b-col class="pb-3">
    <b-card tag="article" no-body>
      <client-only v-if="item.image.src" placeholder="Loading...">
        <b-card-img top :src="item.image.src" :alt="item.image.alt" />
      </client-only>
      <b-card-body>
        <b-card-title class="title">{{ item.title }}</b-card-title>
        <b-card-text class="text" text-tag="div">
          <TheMarkdown :md="item.text" />
        </b-card-text>
      </b-card-body>
    </b-card>
  </b-col>
</template>

<script>
export default {
  props: ['item'],
}
</script>
