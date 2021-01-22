<template>
  <v-list-item>
    <v-list-item-title>ダークテーマ</v-list-item-title>
    <v-list-item-action>
      <v-switch v-model="theme" light></v-switch>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
export default {
  data() {
    return {
      theme: true,
    }
  },
  computed: {
    themeIcon() {
      return this.theme ? 'mdi-weather-night' : 'mdi-weather-sunny'
    },
  },
  watch: {
    theme() {
      this.$vuetify.theme.dark = this.theme
    },
  },
  //  :prepend-icon="themeIcon
}
</script>
