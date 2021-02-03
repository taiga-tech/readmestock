<template>
  <div>
    <left-drawer :minivariant="miniVariant" :drawer="drawer" :items="items" />

    <v-app-bar clipped-left clipped-right fixed dense app flat>
      <v-app-bar-nav-icon
        aria-label="mdi-menu"
        @click.stop="drawer = !drawer"
      />

      <!-- <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn> -->

      <nuxt-link
        to="/"
        style="text-decoration: none"
        :style="$vuetify.theme.dark ? 'color: #fff' : 'color: #000'"
      >
        <v-toolbar-title v-text="title" />
      </nuxt-link>

      <v-spacer />

      <v-btn
        v-show="$vuetify.breakpoint.xs"
        icon
        aria-label="mdi-cog"
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-cog</v-icon>
      </v-btn>
    </v-app-bar>

    <right-drawer :right-drawer="rightDrawer" />
  </div>
</template>

<script>
export default {
  components: {
    LeftDrawer: () => import('./Drawer/LeftDrawer'),
    RightDrawer: () => import('./Drawer/RightDrawer'),
  },

  data() {
    return {
      title: 'README Stock',
      items: [{ icon: 'mdi-home', title: 'Welcome', to: '/' }],
      drawer: false,
      miniVariant: false,
      rightDrawer: false,
    }
  },
}
</script>
