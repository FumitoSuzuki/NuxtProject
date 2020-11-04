<template>
  <b-container class="my-5">
    <b-row>
      <b-col cols="12" md="4" order-md="2" class="pb-3 overflow-hidden">
        <client-only placeholder="Loading...">
          <b-img
            src="~/static/image/2148467625.jpg"
            alt="abstract"
            data-aos="fade-left"
            fluid
          />
        </client-only>
      </b-col>
      <b-col cols="12" md="8" order-md="1">
        <DynamicBreak>
          <TheMarkdown :md="markdown" />
        </DynamicBreak>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      markdown: `#### SPONSORS
NuxtJS is an MIT licensed open source project and completely free to use.
However, the amount of effort needed to maintain and develop new features for the project is not sustainable without proper financial backing.
If you run a business and are using Nuxt in a revenue-generating product, it makes business sense to sponsor Nuxt
development: it ensures the project that your product relies on stays healthy and actively maintained.
It can also help your exposure in the Vue/Nuxt community and makes it easier to attract Vue/Nuxt developers.
If you are an individual user and have enjoyed the productivity of using Nuxt, consider donating as a sign of appreciation.`,
    }
  },
}
</script>
