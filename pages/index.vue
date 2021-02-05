<template>
  <div style="max-width: 940px; margin: 0 auto">
    <v-row class="my-12">
      <v-col>
        <v-card hover>
          <v-card-title>
            <v-list-item>
              <v-list-item-avatar>
                <v-img :src="user.avatarUrl" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="headline"
                  >{{ user.login }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  <v-icon x-small>mdi-github</v-icon>
                  <a :href="user.url" target="_blank" rel="noopener">
                    {{ user.url }}
                  </a>
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  <v-chip outlined small label
                    >リポジトリ : {{ user.repositories.totalCount }}</v-chip
                  >
                  <v-chip outlined small label
                    >パブリック : {{ viewer.repositories.totalCount }}</v-chip
                  >
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card-title>
          <v-card-text>
            こんにちは こんにちは こんにちは こんにちは こんにちは こんにちは
            こんにちは こんにちは こんにちは こんにちは こんにちは こんにちは
            こんにちは こんにちは こんにちは こんにちは こんにちは こんにちは
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <lang-chart :user="user" />
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
