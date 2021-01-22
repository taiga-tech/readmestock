<template>
  <app-index :results="viewer.repositories.edges" param="readmes" />
</template>

<script>
import getRepositories from '~/apollo/queries/getRepositories.graphql'

export default {
  components: {
    AppIndex: () => import('~/components/ReadmeIndex'),
  },
  data() {
    return {
      viewer: [],
      readme: '',
    }
  },

  apollo: {
    viewer: {
      query: getRepositories,
    },
  },
}
</script>
