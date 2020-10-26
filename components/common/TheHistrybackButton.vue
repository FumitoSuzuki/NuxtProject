<template>
  <b-button block :variant="variant" @click="histryBack">< Back</b-button>
</template>

<script>
export default {
  props: ['variant'],
  methods: {
    histryBack() {
      this.$router.go(-1)
    },
  },
}
</script>
