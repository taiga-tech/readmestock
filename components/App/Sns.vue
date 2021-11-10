<template>
  <span>
    <v-btn
      v-for="(sns, i) in socials"
      :key="i"
      icon
      :color="sns.color"
      :href="sns.href"
      target="_blank"
      rel="noopener"
      :aria-label="sns.name"
    >
      <v-icon medium>{{ sns.icon }}</v-icon>
    </v-btn>
  </span>
</template>

<script>
import { socials } from '~/assets/constants/socials.js'

export default {
  data() {
    return { socials }
  },
}
</script>
