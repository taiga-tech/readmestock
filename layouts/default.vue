<template>
  <v-app dark>
    <app-bar />

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <app-footer />
  </v-app>
</template>

<script>
export default {
  components: {
    AppBar: () => import('~/components/AppBar'),
    AppFooter: () => import('~/components/AppFooter'),
  },
}
</script>
