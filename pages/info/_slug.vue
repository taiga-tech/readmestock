<template>
  <v-container>
    <article>
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
  </v-container>
</template>

<script>
;(async () => await require('~/assets/scss/custom.scss'))()

export default {
  components: {
    MarkdownContent: () => import('~/components/Markdown/Content.vue'),
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
