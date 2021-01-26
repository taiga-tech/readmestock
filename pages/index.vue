<template>
  <div>
    <v-btn nuxt to="/readmes"> README </v-btn>
    <v-btn nuxt to="/blogs"> blogs </v-btn>
  </div>
</template>

<script>
import getRepositories from '~/apollo/queries/getRepositories.graphql'

export default {
  data() {
    return {
      selectSort: {
        field: 'CREATED_AT',
        direction: 'DESC',
      },
      languages: [],
    }
  },

  mounted() {
    // this.calcLang()
  },

  methods: {
    calcLang() {
      const viewer = this.viewer.repositories.nodes
      const count = []
      for (let i = 0; i < viewer.length; i++) {
        const nodes = viewer[i].languages.nodes
        for (let i = 0; i < nodes.length; i++) {
          const languages = nodes[i].name
          count.push((count[languages] || 0) + 1)
        }
      }
      this.languages = count
    },
  },

  apollo: {
    viewer: {
      query: getRepositories,
      variables() {
        return {
          orderBy: this.selectSort,
        }
      },
    },
  },

  head() {
    return {
      title: 'Welcome',
    }
  },
}
</script>
