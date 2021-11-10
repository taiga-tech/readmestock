<template>
  <v-app>
    <app-bar />

    <v-main>
      <nuxt />
    </v-main>

    <app-footer />
    <app-bottom-nav v-if="$vuetify.breakpoint.xs" />
  </v-app>
</template>

<script>
export default {
  name: 'Default',
  components: {
    AppBar: () => import('~/components/App/Bar.vue'),
    AppFooter: () => import('~/components/App/Footer.vue'),
    AppBottomNav: () => import('~/components/App/BottomNav.vue'),
  },

  computed: {
    currentPageForCanonical() {
      return this.$route.path.slice(1)
    },
  },

  head() {
    return {
      link: [
        {
          rel: 'canonical',
          href: `${process.env.BASE_URL}${this.currentPageForCanonical}`,
        },
      ],
    }
  },
}
</script>
