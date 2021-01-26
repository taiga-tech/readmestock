<template>
  <article class="blog">
    <v-alert border="left" outlined type="warning" dismissible>
      現在準備中です。準備出来次第投稿していきます！
    </v-alert>
    <div>
      <div class="text-h4">{{ blogs.title }}</div>
      <v-chip-group column>
        <v-chip
          v-for="(tag, i) in blogs.tags"
          :key="i"
          outlined
          draggable
          small
          label
          >{{ tag }}</v-chip
        >
      </v-chip-group>
    </div>
    <v-divider class="ma-3" />
    <nuxt-content :document="blogs" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const blogs = await $content('blogs', params.slug || 'index').fetch()
    return { blogs }
  },
  head() {
    return {
      title: this.blogs.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.blogs.discription,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.blog {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;

  img {
    background: none;
    max-width: 100%;
  }
}
</style>
