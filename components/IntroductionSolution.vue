<template>
  <b-container>
    <b-row class="h-25 align-items-center">
      <b-col>
        <h2>{{ title }}</h2>
        <hr />
      </b-col>
    </b-row>
    <AlignRowItems :class-name="['text']">
      <b-row class="h-75 align-items-center">
        <b-col
          v-for="(item, key) in contents"
          :key="key"
          cols="12"
          md="4"
          class="pb-3"
        >
          <h3>{{ item.title }}</h3>
          <DynamicBreak>
            <TheMarkdown class="text" :md="item.text" />
          </DynamicBreak>
        </b-col>
      </b-row>
    </AlignRowItems>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      title: 'Why NuxtJS',
      contents: [
        {
          title: 'MODULAR',
          text: `Nuxt is based on a powerful modular architecture.
            You can choose from more than 50 modules to make your developmentfaster and easier.
            You don't have to reinvent the wheel to get PWA benefits, add Google Analytics to your page or generate a sitemap.`,
        },
        {
          title: 'PERFORMANT',
          text: `With Nuxt.js, your application will be optimized out of the box.
            We do our best to build performant applications by utilizing Vue.js and Node.js best practices.
            To squeeze every unnecessary bit out of your app Nuxt includes a bundle analyzer and lots of opportunities to fine-tune your app.`,
        },
        {
          title: 'ENJOYABLE',
          text: `Our main focus is the Developer Experience.
            We love Nuxt.js and continuously improve the framework so you love it too! 💚
            Expect appealing solutions, descriptive error messages, powerful defaults and detailed documentation.
            If questions or problems come up, our helpful community will help you out.`,
        },
      ],
    }
  },
}
</script>
