<template>
  <v-footer height="120" color="#00000000" class="mt-4">
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link.name"
        :to="link.to"
        text
        class="my-2"
      >
        {{ link.name }}
      </v-btn>

      <v-col class="py-4 text-center" cols="12">
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
