<template>
  <v-app dark>
    <app-bar />

    <v-main>
      <nuxt />
    </v-main>

    <bottom-nav class="hidden-sm-and-up" />
  </v-app>
</template>

<script>
export default {
  components: {
    AppBar: () => import('~/components/AppBar'),
    BottomNav: () => import('~/components/BottomNav'),
  },
}
</script>
