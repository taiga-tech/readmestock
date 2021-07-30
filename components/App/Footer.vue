<template>
  <v-footer
    height="120"
    color="#00000000"
    relative
    class="d-block py-0"
    :class="{ 'mb-14': $vuetify.breakpoint.xs }"
  >
    <v-row justify="center" no-gutters>
      <v-col class="text-center" cols="12">
        <v-btn v-for="link in links" :key="link.name" :to="link.to" text>
          {{ link.name }}
        </v-btn>
      </v-col>

      <v-col class="text-center" cols="12">
        &copy; 2021 Taiga
        <app-sns />
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import socials from '~/assets/json/socials.json'
import links from '~/assets/json/links.json'

export default {
  data() {
    return { links, socials }
  },
}
</script>
