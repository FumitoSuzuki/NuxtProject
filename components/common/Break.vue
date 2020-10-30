<template>
  <span v-bind="getPoint">
    <slot />
  </span>
</template>

<script>
export default {
  props: {
    breakPoint: {
      type: String,
      default: 'md',
    },
  },
  data() {
    return {
      pointList: ['sm', 'md', 'lg', 'xl'],
      classList: {
        sm: 'd-sm-block',
        md: 'd-md-block',
        lg: 'd-lg-block',
        xl: 'd-xl-block',
      },
    }
  },
  computed: {
    getPoint() {
      let point = this.pointList.find((point) => point === this.breakPoint)
      if (!point) point = this.breakPoint.default
      return { class: this.classList[point] }
    },
  },
}
</script>
