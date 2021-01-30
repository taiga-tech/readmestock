<template>
  <div>
    <left-drawer :minivariant="miniVariant" :drawer="drawer" :items="items" />

    <v-app-bar clipped-left clipped-right fixed dense app flat>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <!-- <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn> -->

      <v-toolbar-title v-text="title" />

      <v-spacer />

      <v-btn
        v-show="$vuetify.breakpoint.xs"
        icon
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
