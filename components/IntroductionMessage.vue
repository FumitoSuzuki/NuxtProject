<template>
  <b-container>
    <b-row class="h-100 my-5 align-items-center">
      <b-col>
        <h2>{{ title }}</h2>
        <DynamicBreak>
          <TheMarkdown :md="message" />
        </DynamicBreak>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      title: 'The Intuitive Vue Framework',
      message:
        'Build your next Vue.js application with confidence using NuxtJS.<br> An open source framework making web development simple and powerful.',
    }
  },
}
</script>
