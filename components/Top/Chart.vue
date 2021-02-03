<template>
  <div align="start">
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
                  <a :src="user.url" style="text-decoration: underline">
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
        <pie-chart :chart-data="chartData" :options="chartOptions" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import getRepositories from '~/apollo/queries/getRepositories.graphql'
import getUser from '~/apollo/queries/getUser.graphql'

export default {
  data() {
    return {
      languages: {},
      color: {},
      dataCollection: null,
      themeStatus: this.theme,
    }
  },

  computed: {
    chartData() {
      const dataCollection = {
        labels: Object.keys(this.languages),
        datasets: [
          {
            backgroundColor: Object.keys(this.color),
            data: Object.values(this.languages),
            borderWidth: 0,
          },
        ],
      }
      return dataCollection
    },
    chartOptions() {
      const options = {
        legend: {
          labels: {
            // fontColor: this.themeStatus ? '#fff' : '#000',
          },
        },
      }
      return options
    },
  },

  mounted() {
    this.calcLang()
  },

  methods: {
    calcLang() {
      const repos = this.user.repositories.nodes
      const languages = {}
      const color = {}

      for (let i = 0; i < repos.length; i++) {
        const nodes = repos[i].languages.nodes
        for (let index = 0; index < nodes.length; index++) {
          const lang = nodes[index]
          languages[lang.name] = (languages[lang.name] || 0) + 1
          color[lang.color] = (color[lang.color] || 0) + 1
        }
      }

      function objectSort(object) {
        const sortData = Object.entries(object)
        sortData.sort(function (p1, p2) {
          const p1val = p1[1]
          const p2val = p2[1]
          return p2val - p1val
        })
        return Object.fromEntries(sortData)
      }

      this.languages = objectSort(languages)
      this.color = objectSort(color)
    },
  },

  apollo: {
    user: {
      query: getUser,
    },
    viewer: {
      query: getRepositories,
    },
  },
}
</script>
