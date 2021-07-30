<template>
  <v-navigation-drawer v-model="rightStatus" right temporary fixed>
    <v-list>
      <app-switch />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    rightDrawer: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      rightStatus: this.rightDrawer,
    }
  },

  watch: {
    rightDrawer() {
      this.rightStatus = !this.rightStatus
    },
  },
}
</script>
