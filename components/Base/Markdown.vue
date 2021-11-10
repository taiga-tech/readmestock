<template>
  <div ref="readme">
    <slot />
    <app-toc :toc="toc" />
  </div>
</template>

<script>
import Prism from '~/plugins/prism'
import tocToggle from '~/assets/mixins/tocToggle'
;(async () => await require('~/assets/scss/custom.scss'))()

export default {
  components: { AppToc: () => import('~/components/App/Toc.vue') },
  mixins: [tocToggle],

  async mounted() {
    await this.$nextTick()
    Prism.highlightAll()
    this.gtoc()
    this.toggleToc()
    this.rightToc()
  },
}
</script>
