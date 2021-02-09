<template>
  <v-row dense>
    <v-col cols="6" md="3" lg="3">
      <v-card>
        <v-list-item>
          <v-list-item-avatar>
            <v-img :src="user.avatarUrl" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title
              ><strong>{{ user.login }}</strong>
            </v-list-item-title>
            <v-list-item-subtitle class="hidden-sm-and-down">
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

    <v-col cols="6" md="3" lg="3">
      <v-card>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon large>mdi-twitter</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title
              ><strong>{{ user.login }}</strong>
            </v-list-item-title>
            <v-list-item-subtitle class="hidden-sm-and-down">
              <a :href="user.url" target="_blank" rel="noopener">
                https://twitter.com
              </a>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-col>

    <v-col cols="6" md="3" lg="3">
      <v-card>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon large>mdi-facebook</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title
              ><strong>{{ user.login }}</strong>
            </v-list-item-title>
            <v-list-item-subtitle class="hidden-sm-and-down">
              <a :href="user.url" target="_blank" rel="noopener">
                https://wantedly.com
              </a>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-col>

    <v-col cols="6" md="3" lg="3">
      <v-card>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon large>mdi-facebook</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title
              ><strong>{{ user.login }}</strong>
            </v-list-item-title>
            <v-list-item-subtitle class="hidden-sm-and-down">
              <a :href="user.url" target="_blank" rel="noopener">
                https://wantedly.com
              </a>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: null,
    },
    viewer: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      sns: [
        { name: 'Twitter', to: '', icon: '' },
        { name: 'Wantedly', to: '', icon: '' },
      ],
    }
  },
}
</script>
