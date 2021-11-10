<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="5" lg="4" xl="3">
        <!-- <top-chart :user="user" :viewer="viewer" /> -->
        <top-sns />
      </v-col>

      <v-col cols="12" sm="12" md="7" lg="8" xl="9">
        <top-profile :profile="profile" />
      </v-col>
    </v-row>

    <v-row class="mb-0">
      <top-product />
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {
    // TopChart: () => import('~/components/Top/Chart.vue'),
    TopSns: () => import('~/components/Top/Sns.vue'),
    TopProfile: () => import('~/components/Top/Profile.vue'),
    TopProduct: () => import('~/components/Top/Product.vue'),
  },
  async asyncData({ $content }) {
    const profile = await $content('info', 'profile').fetch()
    return { profile }
  },

  computed: {
    user() {
      return this.$store.getters['gh-readme/user']
    },
    viewer() {
      return this.$store.getters['gh-readme/count']
    },
  },

  head() {
    return {
      title: null,
    }
  },
}
</script>
