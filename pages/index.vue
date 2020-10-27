<template>
  <article>
    <FirstView />
    <Introduction />
    <Practicable />
    <b-container>
      <b-row>
        <b-col>
          <p>{{ env }}</p>
        </b-col>
      </b-row>
    </b-container>
    <Information />
    <TheNavbar />
  </article>
</template>

<script>
export default {
  data() {
    return {
      env: process.env.NETLIFY,
    }
  },
}
</script>
