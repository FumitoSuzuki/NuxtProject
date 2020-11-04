<template>
  <span class="d-br">
    <slot></slot>
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
        sm: 'd-sm-inline',
        md: 'd-md-inline',
        lg: 'd-lg-inline',
        xl: 'd-xl-inline',
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
  mounted() {
    const elements = this.$el.getElementsByTagName('br')
    this.setClass(elements)
  },
  methods: {
    setClass(elements) {
      elements.forEach((elem) => {
        elem.classList.add(this.getPoint.class)
      })
    },
  },
}
</script>

<style>
.d-br br {
  display: none;
}
</style>
