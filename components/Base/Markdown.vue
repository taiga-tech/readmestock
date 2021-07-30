<template>
  <div ref="readme">
    <slot />
    <app-toc :toc="toc" />
  </div>
</template>

<script>
import Prism from '~/plugins/prism'
import tocToggle from '~/assets/mixins/tocToggle'

export default {
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

<style lang="scss" src="~/assets/scss/custom.scss"></style>
