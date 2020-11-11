<template>
  <b-container fluid class="text-center bg-info p-5">
    <b-row class="mb-3">
      <b-col>
        <slot name="title" />
        <PostsHeaderBreadcrumb />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <PostsHeaderTagbadge />
      </b-col>
    </b-row>
  </b-container>
</template>
