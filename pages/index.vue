<template>
  <section id="main">
    <FullsizeBox class="p-2">
      <Introduction class="text-center">
        <template #header></template>
        <template #body>
          <nuxt-content :document="intro" />
        </template>
        <template #footer>
          <Logo :width="60" :height="60" />
        </template>
      </Introduction>
    </FullsizeBox>
    <article>
      <LeadCopy class="my-3">
        <nuxt-content :document="leadcopy" />
      </LeadCopy>
      <Characters :contents="characters" />
      <Topics :rows="topics" />
      <Others :contents="others" class="my-3" />
    </article>
    <aside class="bg-info py-5">
      <Information />
    </aside>
  </section>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const intro = await $content('introduction').fetch()
    const leadcopy = await $content('leadcopy').fetch()
    const characters = await $content('characters').sortBy('slug').fetch()
    const topics = await $content('topics').sortBy('slug').fetch()
    const others = await $content('others').fetch()
    return {
      intro,
      leadcopy,
      characters,
      topics: [topics.splice(0, 2), topics],
      others,
    }
  },
}
</script>

<style scoped>
#main {
  background-color: white;
}

.introduction {
  /* background-image: url('/image/abstract-2468874_1920.jpg'); */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: var(--secondary);
}
.introduction .header,
.introduction .footer {
  min-height: 25%;
}
.introduction .body {
  min-height: 50%;
}
</style>

<style>
.green {
  color: #00c48d;
}
</style>
