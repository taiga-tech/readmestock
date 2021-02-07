<template>
  <div class="">
    <v-row dense>
      <v-col cols="3" class="">
        <v-card hover height="100%">
          <v-list-item>
            <v-list-item-avatar>
              <v-img :src="user.avatarUrl" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline"
                >{{ user.login }}
              </v-list-item-title>
              <v-list-item-subtitle>
                <v-icon small>mdi-github</v-icon>
                <a :href="user.url" target="_blank" rel="noopener">
                  {{ user.url }}
                </a>
              </v-list-item-subtitle>
              <!-- <v-list-item-subtitle>
                <v-chip outlined small label>
                  リポジトリ : {{ user.repositories.totalCount }}</v-chip
                >
                <v-chip outlined small label>
                  パブリック : {{ viewer.repositories.totalCount }}</v-chip
                >
              </v-list-item-subtitle> -->
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card hover height="100%">
          <v-list-item>
            <v-list-item-avatar>
              <v-icon x-large>mdi-facebook</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline"
                >@{{ user.login }}
              </v-list-item-title>
              <v-list-item-subtitle>
                <a :href="user.url" target="_blank" rel="noopener">
                  https://wantedly.com
                </a>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card hover height="100%">
          <v-list-item>
            <v-list-item-avatar>
              <v-icon x-large>mdi-twitter</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline"
                >@{{ user.login }}
              </v-list-item-title>
              <v-list-item-subtitle>
                <a :href="user.url" target="_blank" rel="noopener">
                  https://twitter.com
                </a>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card></v-col
      >
      <v-col cols="3">
        <v-card hover height="100%">
          <v-list-item>
            <v-list-item-avatar>
              <v-icon x-large>mdi-instagram</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline"
                >@{{ user.login }}
              </v-list-item-title>
              <v-list-item-subtitle>
                <a :href="user.url" target="_blank" rel="noopener">
                  https://instagram.com
                </a>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4"
        ><v-card hover>
          <v-card-title>languagechart</v-card-title>
          <v-divider />
          <v-card-text><lang-chart :user="user" /></v-card-text></v-card
      ></v-col>
      <v-col cols="8">
        <v-row>
          <v-col cols="12">
            <v-card>
              <v-card-title>自己紹介</v-card-title>
              <v-divider />
              <v-card-text>こんにちはこんにちは</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-card>
              <v-toolbar>
                <v-card-title>product</v-card-title>
                <v-spacer />
                <v-select
                  solo
                  hide-details
                  :items="keys"
                  prepend-inner-icon="mdi-swap-vertical"
                  label="Sort by"
                  style="max-width: 200px"
                ></v-select>
              </v-toolbar>
              <v-list>
                <!-- tableに変更する -->
                <v-list-item v-for="(product, i) in productLink" :key="i"
                  ><v-list-item-icon>#{{ i + 1 }}</v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>{{ product.name }} </v-list-item-title>
                    <v-list-item-subtitle>{{
                      product.to
                    }}</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-btn :href="product.to" target="_blank" rel="noopener"
                      >開く</v-btn
                    >
                  </v-list-item-action>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
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
  },

  data() {
    return {
      productLink: [
        {
          name: 'ReservationApp',
          lang: 'Ruby on Rails',
          to: 'http://54.248.158.30/',
        },
        {
          name: 'FleamarketSample80b',
          lang: 'Ruby on Rails',
          to: 'http://18.224.192.120/',
        },
        {
          name: 'SmartOrder',
          lang: 'Ruby on Rails',
          to: 'https://smart-order-app.herokuapp.com',
        },
        { name: 'DivingApp', lang: 'Laravel', to: 'http://3.88.45.99/' },
        { name: 'Readme Stock', lang: 'Nuxt', to: 'https://taiga-tech.tk/' },
      ],
      keys: ['実装迷い中'],
    }
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
