<template>
  <div class="">
    <top-sns :user="user" :viewer="viewer" />

    <v-row>
      <v-col cols="12" sm="6" md="6" lg="4"
        ><v-card>
          <v-card-title>languagechart</v-card-title>
          <v-divider />
          <v-card-text><lang-chart :user="user" /></v-card-text></v-card
      ></v-col>
      <v-col cols="12" sm="6" md="6" lg="8">
        <v-row>
          <top-profile />
          <top-product />
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import getPublicTotalCount from '~/apollo/queries/global/getPublicTotalCount.graphql'
import getUser from '~/apollo/queries/global/getUser.graphql'

export default {
  components: {
    LangChart: () => import('~/components/Top/Chart'),
    TopSns: () => import('~/components/Top/Sns'),
    TopProduct: () => import('~/components/Top/Product'),
    TopProfile: () => import('~/components/Top/Profile'),
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
