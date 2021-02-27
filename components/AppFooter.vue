<template>
  <v-footer height="120" color="#00000000" class="mt-4">
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
        <v-btn
          icon
          href="https://github.com/taiga-tech/"
          target="_blank"
          rel="noopener"
          aria-label="github"
          ><v-icon color="purple">mdi-github</v-icon></v-btn
        >
        <v-btn
          icon
          href="https://twitter.com/Taiga_dev/"
          target="_blang"
          rel="noopener"
          aria-label="twitter"
          ><v-icon color="primary">mdi-twitter</v-icon></v-btn
        >
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  components: {
    // ThemeSwitch: () => import('./ThemeSwitch'),
  },

  data() {
    return {
      links: [
        { name: 'readme', to: '/readmes/' },
        { name: 'blog', to: '/blogs/' },
        { name: 'このサイトについて', to: '/info/about/' },
        { name: 'お問い合わせ', to: '/info/contact/' },
      ],
    }
  },
}
</script>
