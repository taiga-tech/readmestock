<template>
  <article>
    <warning-alert style="max-width: 940px; margin: 0 auto" />
    <v-card
      elevation="0"
      class="markdown-body"
      max-width="980"
      color="#00000000"
    >
      <nuxt-content :document="info" />
      <v-card-subtitle align="end">
        {{ $moment(info.createdAt).format('L') }} -
        {{ $moment(info.updatedAt).fromNow() }}
      </v-card-subtitle>
    </v-card>
  </article>
</template>

<script>
import Prism from '~/plugins/prism'

export default {
  components: {
    WarningAlert: () => import('~/components/WarningAlert'),
  },
  async asyncData({ $content, params, payload }) {
    if (payload) {
      return { info: payload }
    } else {
      return { info: await $content('info', params.slug || 'index').fetch() }
    }
  },

  mounted() {
    Prism.highlightAll()
  },

  head() {
    return {
      title: this.info.title + ' | ',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.info.description,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.info.title + ' | README Stock',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://taiga-tech.tk/info/site/',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.info.description,
        },
      ],
    }
  },
}
</script>

<style lang="scss" src="~/assets/scss/custom.scss"></style>
