<template>
  <b-row>
    <b-col>
      <b-badge
        v-for="(item, key) in selectTags"
        :key="key"
        class="m-1"
        @click="delTag(item.slug)"
      >
        # {{ item.name }}
      </b-badge>
      <b-badge
        v-b-modal.select-tags
        class="m-1"
        style="cursor: pointer"
        v-text="' + '"
      />
      <b-modal id="select-tags" button-size="sm" hide-header ok-only>
        <b-button
          v-for="(item, key) in allTags"
          :key="key"
          :class="{ active: isSelected(item.slug) }"
          class="m-1"
          size="sm"
          @click="switchTag(item.slug)"
        >
          # {{ item.name }}
        </b-button>
      </b-modal>
    </b-col>
  </b-row>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters('contentful', ['selectTags', 'allTags']),
  },
  methods: {
    ...mapMutations('contentful', ['delTag', 'addTag']),
    isSelected(slug) {
      return this.selectTags.some((item) => item.slug === slug)
    },
    switchTag(slug) {
      this.isSelected(slug) ? this.delTag(slug) : this.addTag(slug)
    },
  },
}
</script>
