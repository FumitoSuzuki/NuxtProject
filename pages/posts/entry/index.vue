<template>
  <section>
    <header>
      <EntryHeader :entry="entry" />
    </header>
    <nuxt-child :entry="entry" />
    <aside>
      <Information />
    </aside>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  asyncData({ store, params }) {
    return {
      id: params.id,
    }
  },
  computed: {
    ...mapGetters('contentful', {
      getEntry: 'entry',
    }),
    entry() {
      return this.getEntry(this.id)
    },
  },
}
</script>
