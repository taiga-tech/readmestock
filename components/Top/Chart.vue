<template>
  <pie-chart :chart-data="chartData" :options="chartOptions" />
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: null,
    },
  },

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
}
</script>
