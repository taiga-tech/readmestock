<template>
  <v-app dark>
    <app-bar />

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <bottom-nav v-show="$vuetify.breakpoint.xs" />

    <app-footer v-show="!$vuetify.breakpoint.xs" />
  </v-app>
</template>

<script>
export default {
  components: {
    AppBar: () => import('~/components/AppBar'),
    AppFooter: () => import('~/components/AppFooter'),
    BottomNav: () => import('~/components/BottomNav'),
  },
}
</script>
