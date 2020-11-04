<template>
  <b-container class="my-5">
    <AlignRowItems :class-name="['title', 'text']">
      <b-row cols="1" cols-md="2">
        <PracticableCardCol v-pre :item="contants[0]" />
        <PracticableCardCol v-pre :item="contants[1]" />
      </b-row>
    </AlignRowItems>
    <b-row>
      <PracticableCardCol :item="contants[2]" />
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      contants: [
        {
          title: 'SERVER SIDE RENDERED',
          image: {
            src: require('~/static/image/2148237985.jpg'),
            alt: 'abstract',
          },
          text: `The most popular mode for Nuxt.
            With SSR, also called "universal" or "isomorphic" mode, a Node.js server will be used to deliver HTML based on your Vue components to the client instead of the pure javascript.
            Using SSR will lead to a large SEO boost, better UX and more opportunities (compared to a traditional Vue SPA).
            Because implementing SSR on your own can be really tedious, Nuxt.js gives you full support out of the box and will take care of common pitfalls.`,
        },
        {
          title: 'STATICALLY GENERATED GENERATED',
          image: {
            src: require('~/static/image/2148237985.jpg'),
            alt: 'abstract',
          },
          text: `Static Site Generation is a very hot topic right now (aka JAMStack).
            Instead of switching to another framework and spending time to get used to it, why not kill two birds with one stone? (only proverbial 🐦🐦)
            Nuxt.js supports generating a static website based on your Vue application.
            It is the "best of both worlds" as you don't need a server but still have SEO benefits because Nuxt will pre-render all pages and include the necessary HTML.
            Also, you can deploy the resulting page easily to Netlify or GitHub pages.`,
        },
        {
          title: 'SINGLE PAGE APPLICATION (SPA)',
          image: {
            src: '',
            alt: '',
          },
          text: `Don't need SSR or Static Site Generation but still want to profit from the benefits that Nuxt provides?
            Are you slowly transitioning your app and want to start lightweight?
            Then the traditional SPA mode will likely be your choice.
            The outcome will be a typical Vue SPA as you know it but influenced by your Nuxt configuration and the framework itself.`,
        },
      ],
    }
  },
}
</script>
