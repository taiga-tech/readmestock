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
    >
      <v-icon medium>mdi-{{ sns.icon }}</v-icon>
    </v-btn>
  </span>
</template>

<script>
import socials from '~/assets/json/socials.json'

export default {
  data() {
    return { socials }
  },
}
</script>
