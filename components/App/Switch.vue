<template>
  <div>
    <v-list-item>
      <v-list-item-icon>
        テーマ変更
        <v-icon>{{ themeIcon }}</v-icon>
      </v-list-item-icon>
      <v-spacer />
      <v-list-item-action>
        <v-switch v-model="theme"></v-switch>
      </v-list-item-action>
    </v-list-item>
  </div>
</template>

<script>
import { mdiWeatherNight, mdiWeatherSunny } from '@mdi/js'

export default {
  data() {
    return { theme: true }
  },
  computed: {
    themeIcon() {
      return this.theme ? mdiWeatherNight : mdiWeatherSunny
    },
  },
  watch: {
    theme() {
      this.$vuetify.theme.dark = this.theme
    },
  },
}
</script>
