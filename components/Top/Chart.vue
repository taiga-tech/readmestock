<template>
  <v-row>
    <v-col cols="12">
      <v-card :href="user.url" target="_blank" rel="noopener">
        <v-list-item>
          <v-list-item-avatar>
            <v-icon large>mdi-github</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
              <strong>{{ user.login }}</strong>
            </v-list-item-title>
            <v-list-item-subtitle>
              <v-chip-group>
                <v-chip outlined x-small label>
                  リポジトリ : {{ user.repositories.totalCount }}</v-chip
                >
                <v-chip outlined x-small label>
                  パブリック : {{ viewer.repositories.totalCount }}</v-chip
                >
              </v-chip-group>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider />

        <v-card-text>
          <pie-chart :chart-data="chartData" :options="chartOptions" />
        </v-card-text>

        <v-card-subtitle>
          ※Githubのプライベート含めた全てのリポジトリで使用した言語の割合です、参考にしていただけると幸いです。
        </v-card-subtitle>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import PieChart from '~/components/Top/PieChart'

export default {
  components: {
    PieChart,
  },
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
      languages: {},
      color: {},
      dataCollection: null,
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
            fontColor: '#fff',
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
}
</script>
