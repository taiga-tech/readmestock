<template>
  <nuxt-content ref="result" :document="result" />
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
    params: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      meta: {
        title: this.result.title,
        description: null,
        url: this.params + '/' + this.$route.params.slug,
      },
    }
  },

  mounted() {
    Prism.highlightAll()
    this.updateDescription()
  },

  methods: {
    updateDescription() {
      this.meta.description = this.$refs.result.$vnode.elm.textContent.replace(
        /\s/g,
        ''
      )
    },
  },
}
</script>
