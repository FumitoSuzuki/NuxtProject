<template>
  <ScrollSwitchBg bg-color="rgba(255,255,255,0.7)">
    <b-navbar class="m-2" toggleable="lg">
      <b-navbar-brand href="/">
        <b-img src="image/nuxtjs-typo.svg" alt="Kitten" width="100" />
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" />
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="posts">Blog posts</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </ScrollSwitchBg>
</template>
