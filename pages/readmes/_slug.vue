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
    <div v-if="!viewer.repository.obhect.text">error</div>
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
}
</script>
