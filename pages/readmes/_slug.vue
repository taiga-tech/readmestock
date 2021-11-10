<template>
  <v-container>
    <article v-if="viewer">
      <readme-slug :viewer="viewer" :slug="slug" />
    </article>
  </v-container>
</template>

<script>
export default {
  components: { ReadmeSlug: () => import('~/components/Readme/slug.vue') },
  async asyncData({ store, params }) {
    const slug = await params.slug
    await store.dispatch('gh-readme/readme', slug).catch((err) => {
      console.error(err)
    })
    return { slug }
  },

  computed: {
    viewer() {
      return this.$store.getters['gh-readme/readme']
    },
  },
}
</script>
