<template>
  <readme v-if="viewer" :viewer="viewer" />
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
