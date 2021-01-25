<template>
  <article>
    <readme v-if="viewer" :viewer="viewer" :slug="slug" />
    <v-alert v-if="err" outlined type="error">{{ err }}</v-alert>
  </article>
</template>

<script>
// graphql
// import getReadme from '~/apollo/queries/getReadme'

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
      viewer: '',
      err: null,
    }
  },

  mounted() {
    this.getReadme()
  },

  methods: {
    async getReadme() {
      const response = await this.$axios
        .$get(
          `https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/taiga-tech/${this.slug}/master/README.md`
        )
        .catch((err) => {
          console.error(err)
          this.err = err
        })
      this.viewer = response
    },
  },

  // graphql
  // apollo: {
  //   viewer: {
  //     query: getReadme,
  //     variables() {
  //       return {
  //         name: this.slug,
  //       }
  //     },
  //   },
  // },
}
</script>
