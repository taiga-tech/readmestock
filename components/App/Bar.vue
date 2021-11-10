<template>
  <div>
    <drawer-left :minivariant="miniVariant" :drawer="drawer" :items="items" />

    <v-app-bar clipped-left clipped-right dense app :flat="!scrollY">
      <v-app-bar-nav-icon
        aria-label="mdi-menu"
        @click.stop="drawer = !drawer"
      />

      <!-- <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn> -->

      <v-toolbar-title
        style="cursor: pointer"
        @click="$router.push('/')"
        v-text="title"
      />

      <v-spacer />

      <span>
        <v-img
          src="https://api.netlify.com/api/v1/badges/99c0bb10-8848-4e05-8ce9-4bff55729361/deploy-status"
          alt="Netlify Status"
        />
      </span>

      <!-- <v-btn
        v-show="$vuetify.breakpoint.xs"
        icon
        aria-label="mdi-cog"
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-cog</v-icon>
      </v-btn> -->
    </v-app-bar>

    <!-- <drawer-right :right-drawer="rightDrawer" /> -->
  </div>
</template>

<script>
export default {
  components: { DrawerLeft: () => import('~/components/Drawer/Left.vue') },
  data() {
    return {
      title: 'README Stock',
      items: [{ icon: 'mdi-home', title: 'Welcome', to: '/' }],
      drawer: false,
      miniVariant: false,
      rightDrawer: false,
      scrollY: 0,
    }
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll() {
      this.scrollY = window.scrollY
    },
  },
}
</script>
