<template>
  <article>
    <readme v-if="viewer" :viewer="viewer" :slug="slug" />
    <v-skeleton-loader
      v-else
      boilerplate
      max-width="980"
      type="card"
      class="markdown-body"
    ></v-skeleton-loader>
  </article>
</template>

<script>
import getReadme from '~/apollo/queries/getReadme'

export default {
  components: {
    Readme: () => import('~/components/Readme'),
  },

  async asyncData({ params }) {
    const slug = await params.slug
    return { slug }
  },

  data() {
    return {
      viewer: null,
    }
  },

  apollo: {
    viewer: {
      query: getReadme,
      variables() {
        return {
          name: this.slug,
        }
      },
    },
  },

  head() {
    return {
      title: this.slug + ' | ',
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.slug + ' | README Stock',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://taiga-tech.tk/' + this.slug,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            this.slug +
            ' | Nuxt + GitHub API(GraphQL) + Netlifyを使用したポートフォリオサイト',
        },
      ],
    }
  },
}
</script>
