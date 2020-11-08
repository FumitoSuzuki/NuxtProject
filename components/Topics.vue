<template>
  <b-container>
    <AlignRowItems :class-name="['card-title']">
      <b-row cols="1" cols-md="2" align-v="stretch">
        <b-col
          v-for="(item, key) in contents.div1"
          :key="key"
          class="my-2 px-2"
        >
          <b-card no-body class="h-100">
            <b-card-img
              v-if="item.image"
              :src="$getImage(item.image.url)"
              :alt="item.image.alt"
              top
            />
            <b-card-body>
              <b-card-title v-text="item.title" />
              <b-card-text text-tag="div">
                <ResponsiveBreak>
                  <nuxt-content :document="item" />
                </ResponsiveBreak>
              </b-card-text>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </AlignRowItems>
    <AlignRowItems :class-name="['card-title']">
      <b-row align-v="stretch">
        <b-col
          v-for="(item, key) in contents.div2"
          :key="key"
          class="my-2 px-2"
        >
          <b-card no-body class="h-100">
            <b-card-img
              v-if="item.image"
              top
              :src="$getImage(item.image.url)"
              :alt="item.image.alt"
            />
            <b-card-body>
              <b-card-title v-text="item.title" />
              <b-card-text text-tag="div">
                <ResponsiveBreak>
                  <nuxt-content :document="item" />
                </ResponsiveBreak>
              </b-card-text>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </AlignRowItems>
  </b-container>
</template>

<script>
export default {
  props: {
    contents: {
      type: Object,
      default: () => [],
    },
  },
}
</script>
