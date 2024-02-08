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

  async asyncData({ store, params, query }) {
    const slug = await params.slug
    const org = query.owner

    await store.dispatch('gh-readme/readme', slug).catch(async () => {
      await store
        .dispatch('gh-readme/orgReadme', { org, slug })
        .catch((err) => {
          console.error(err)
        })
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
