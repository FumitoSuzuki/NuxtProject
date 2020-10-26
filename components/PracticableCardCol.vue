<template>
  <b-col class="pb-3">
    <b-card tag="article" no-body>
      <client-only v-if="src" placeholder="Loading...">
        <b-card-img top :src="src" :alt="alt" />
      </client-only>
      <b-card-body>
        <b-card-title class="title">
          <slot name="title" />
        </b-card-title>
        <b-card-text class="text">
          <slot name="text" />
        </b-card-text>
      </b-card-body>
    </b-card>
  </b-col>
</template>

<script>
export default {
  props: ['src', 'alt'],
}
</script>
