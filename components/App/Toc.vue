<template>
  <v-navigation-drawer floating clipped right app class="py-4 pr-5" width="300">
    <client-only>
      <v-subheader>Contents</v-subheader>

      <ul v-if="toc.length === 0" class="pl-3">
        <li
          v-for="i in 3"
          :key="i"
          class="pl-3 py-2 text-body-2 ma-0"
          style="border-left: 2px solid #ffffff80; list-style-type: none"
        >
          <v-skeleton-loader :key="i" type="text" tile boilerplate />
        </li>
      </ul>

      <scrollactive
        highlight-first-item
        tag="ul"
        :offset="48"
        style="list-style-type: none"
        class="pl-3"
        @itemchanged="onItemChanged"
      >
        <li
          v-for="({ id, depth, text }, i) in toc"
          :key="i"
          class="py-2 text-body-2 ma-0"
          :class="{
            'pl-3': depth == 2,
            'pl-5': depth == 3,
            'pl-7': depth == 4,
          }"
          style="border-left: 2px solid #ffffff80"
        >
          <NuxtLink
            :to="'#' + id"
            class="scrollactive-item font-weight-regular text-decoration-none"
          >
            {{ text }}
          </NuxtLink>
        </li>
      </scrollactive>
    </client-only>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    toc: { type: Array, default: () => [] },
  },

  methods: {
    onItemChanged(e, currentItem, lastActiveItem) {
      if (!lastActiveItem) return
      lastActiveItem.parentElement.style = 'border-left: 2px solid #ffffff80'
      if (!currentItem) return
      currentItem.parentElement.style = 'border-left: 2px solid #01c7b7'
      history.replaceState('', '', currentItem.hash)
    },
  },
}
</script>

<style lang="scss" scoped>
a:not(.is-active) {
  color: #ffffff80;
}
a.is-active {
  font-weight: bold;
  color: #01c7b7;
}
a:hover {
  color: #01c7b7;
}
</style>
