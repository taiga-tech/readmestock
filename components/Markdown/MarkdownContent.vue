<template>
  <nuxt-content :document="result" />
</template>

<script>
import Meta from '~/assets/mixins/meta.js'
import Prism from '~/plugins/prism'

export default {
  mixins: [Meta],

  props: {
    result: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      meta: {
        title: this.result.title,
        description: this.result.description,
        url: this.$route.params.slug,
      },
    }
  },

  mounted() {
    Prism.highlightAll()
  },
}
</script>
