<template>
  <v-container>
    <article class="blog">
      <div class="text-h4">{{ blogs.title }}</div>
      <p>{{ blogs.discription }}</p>
      <nuxt-content :document="blogs" />
    </article>
  </v-container>
</template>

<style lang="scss">
.blog {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;

  img {
    background: none;
    max-width: 100%;
  }
}
</style>

<script>
export default {
  async asyncData({ $content, params }) {
    const blogs = await $content('blogs', params.slug || 'index').fetch()
    return { blogs }
  },
}
</script>
