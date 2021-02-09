<template>
  <v-row dense>
    <v-col cols="12" md="6">
      <v-card :href="user.url" target="_blank" rel="noopener">
        <v-list-item>
          <v-list-item-avatar>
            <v-icon large>mdi-github</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="hidden-sm-and-down">
              <strong>{{ user.login }}</strong>
            </v-list-item-title>
            <!-- <v-list-item-subtitle class="hidden-sm-and-down">
              <v-icon small>mdi-github</v-icon>
              <a :href="user.url" target="_blank" rel="noopener">
                {{ user.url }}
              </a>
            </v-list-item-subtitle> -->
          </v-list-item-content>
          <v-list-item-action class="ma-0">
            <v-chip-group>
              <v-chip outlined small label>
                リポジトリ : {{ user.repositories.totalCount }}</v-chip
              >
              <v-chip outlined small label>
                パブリック : {{ viewer.repositories.totalCount }}</v-chip
              >
            </v-chip-group>
          </v-list-item-action>
        </v-list-item>
      </v-card>
    </v-col>

    <v-col v-for="(s, i) in sns" :key="i" cols="6" md="3" lg="3">
      <v-card :href="s.to" target="_blank" rel="noopener">
        <v-list-item>
          <v-list-item-avatar>
            <v-icon large>{{ s.icon }}</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title
              ><strong>{{ s.name }}</strong>
            </v-list-item-title>
            <!-- <v-list-item-subtitle class="hidden-sm-and-down">
              <a :href="s.to" target="_blank" rel="noopener">
                {{ s.to }}
              </a>
            </v-list-item-subtitle> -->
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
        {
          name: 'Twitter',
          to: 'https://twitter.com/Taiga_dev',
          icon: 'mdi-twitter',
        },
        {
          name: 'Wantedly',
          to: 'https://www.wantedly.com/users/137448604?profile_v1=true',
          icon: '',
        },
      ],
    }
  },
}
</script>
