<template>
  <v-container style="max-width: 980px">
    <article>
      <h1 class="pb-12">Release Notes</h1>
      <v-timeline :dense="$vuetify.breakpoint.mobile">
        <v-timeline-item
          v-for="(release, i) in viewer.repository.releases.nodes"
          :key="i"
          :color="colors[i]"
          left
          small
        >
          <template v-slot:opposite>
            <span :class="`font-weight-bold ${colors[i]}--text`">
              Released on
              <time
                :datetime="release.publishedAt"
                :title="new Date(release.publishedAt).toString()"
              >
                {{ release.publishedAt | dateFormat }}
              </time>
            </span>
          </template>

          <v-card elevation="0" color="#0000">
            <span v-if="release.isLatest">
              <v-chip color="green" small outlined> Latest </v-chip>
            </span>
            <v-card-title class="f-flex justify-space-between">
              <a
                :href="release.url"
                target="_blank"
                rel="noopener"
                class="text-decoration"
                :class="`${colors[i]}--text`"
              >
                <h2>{{ release.name }}</h2>
              </a>
              <span
                v-if="$vuetify.breakpoint.mobile"
                :class="`text-caption ${colors[i]}--text`"
              >
                Released on
                <time
                  :datetime="release.publishedAt"
                  :title="new Date(release.publishedAt).toString()"
                >
                  {{ release.publishedAt | dateFormat }}
                </time>
              </span>
            </v-card-title>
            <v-card-text
              class="markdown-body pa-4 pt-0"
              v-html="$md.render(release.description)"
            />
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </article>
  </v-container>
</template>

<script>
const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export default {
  filters: {
    dateFormat(date) {
      date = new Date(date)
      let s = date.getDate() + ' ' + monthNames[date.getMonth()]
      if (date.getFullYear() < new Date().getFullYear()) {
        s += ' ' + date.getFullYear()
      }
      return s
    },
  },

  async asyncData({ store }) {
    await store.dispatch('release/index').catch((err) => {
      console.error(err)
    })
  },

  data() {
    return {
      colors: ['green', 'cyan', 'pink', 'amber', 'orange'],
    }
  },

  computed: {
    viewer() {
      return this.$store.getters['release/index']
    },
  },
}
</script>

<style lang="scss" src="~/assets/scss/custom.scss"></style>
