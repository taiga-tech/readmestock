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
