<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="5" lg="4" xl="4">
        <lang-chart :user="user" :viewer="viewer" />

        <top-sns :user="user" :viewer="viewer" />
      </v-col>

      <v-col cols="12" sm="12" md="7" lg="8" xl="8">
        <top-profile />
      </v-col>
    </v-row>

    <v-row class="mb-0">
      <top-product />
    </v-row>

    <app-footer class="hidden-sm-and-down" />
  </v-container>
</template>

<script>
import getPublicTotalCount from '~/apollo/queries/global/getPublicTotalCount.graphql'
import getUser from '~/apollo/queries/global/getUser.graphql'

export default {
  components: {
    LangChart: () => import('~/components/Top/Chart'),
    TopSns: () => import('~/components/Top/Sns'),
    TopProduct: () => import('~/components/Top/Product'),
    TopProfile: () => import('~/components/Top/MyProfile'),
    AppFooter: () => import('~/components/AppFooter'),
  },

  apollo: {
    user: {
      query: getUser,
      variables() {
        return {
          login: 'taiga-tech',
        }
      },
    },
    viewer: {
      query: getPublicTotalCount,
    },
  },

  head() {
    return {
      title: null,
    }
  },
}
</script>
