<template>
  <article>
    <warning-alert style="max-width: 940px; margin: 0 auto" />
    <v-card
      elevation="0"
      class="markdown-body"
      max-width="980"
      color="#00000000"
    >
      <markdown-content v-if="info" :result="info" params="info" />
      <v-card-subtitle align="end">
        {{ $moment(info.createdAt).format('L') }} -
        {{ $moment(info.updatedAt).fromNow() }}
      </v-card-subtitle>
    </v-card>
  </article>
</template>

<script>
export default {
  components: {
    WarningAlert: () => import('~/components/WarningAlert'),
    MarkdownContent: () => import('~/components/Markdown/MarkdownContent'),
  },

  async asyncData({ $content, params, payload }) {
    // if (payload) {
    //   return { info: payload }
    // } else {
    return { info: await $content('info', params.slug || 'index').fetch() }
    // }
  },
}
</script>

<style lang="scss" src="~/assets/scss/custom.scss"></style>
