<template>
  <v-footer app>
    <!-- <v-menu offset-y top :close-on-content-click="false">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" x-small v-on="on">
          <v-icon>mdi-cog</v-icon>
        </v-btn>
      </template>
      <v-list>
        <theme-switch />
      </v-list>
    </v-menu> -->

    <v-spacer />

    <span>&copy; 2021 Taiga</span>
  </v-footer>
</template>

<script>
export default {
  components: {
    // ThemeSwitch: () => import('./ThemeSwitch'),
  },
}
</script>
