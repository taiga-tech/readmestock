export default {
  data() {
    return { toc: [] }
  },

  methods: {
    gtoc() {
      const element = document.getElementsByClassName('table-of-contents')
      element[0].classList.add(
        'v-card',
        'v-card--hover',
        'v-sheet',
        'theme--dark'
      )
      const ul = element[0].children[1]
      ul.outerHTML =
        '<div class="v-card__text pb-1 tocList hide"">' +
        ul.outerHTML +
        '</div>'
    },

    async tocStatus() {
      await this.$nextTick()
      return !!document.getElementsByClassName('hide').length
    },

    toggleToc() {
      const toggle = document.getElementById('toggleToc')
      const tocList = document.getElementsByClassName('tocList')

      toggle.onclick = async () => {
        ;(await this.tocStatus())
          ? tocList[0].classList.remove('hide')
          : tocList[0].classList.add('hide')
        this.updateIcon()
      }
    },

    async updateIcon() {
      const toggle = document.getElementById('toggleToc')
      if (await this.tocStatus()) {
        toggle.classList.remove('mdi-chevron-up')
        toggle.classList.add('mdi-chevron-down')
      } else {
        toggle.classList.add('mdi-chevron-up')
        toggle.classList.remove('mdi-chevron-down')
      }
    },

    async rightToc() {
      await this.$nextTick()
      const heading = this.$refs.readme.querySelectorAll('.header-anchor')
      const toc = []
      Object.keys(heading).forEach((h) => {
        toc.push({
          id: heading[h].hash.slice(1),
          depth: Number(heading[h].parentNode.localName.slice(1)),
          text: heading[h].parentNode.textContent,
        })
      })
      this.toc = toc
    },
  },
}
