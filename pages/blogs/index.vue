<template>
  <v-container ref="index">
    <warning-alert />
    <blog-index :results="blogs" />
  </v-container>
</template>

<script>
import Meta from '~/assets/mixins/meta.js'
export default {
  components: {
    WarningAlert: () => import('~/components/WarningAlert'),
  },
  mixins: [Meta],

  async asyncData({ $content, payload }) {
    const blogs = await $content('blogs' || 'index')
      .sortBy('createdAt', 'desc')
      .fetch()
    return { blogs }
  },

  data() {
    return {
      meta: {
        title: 'ブログ一覧',
        description: '',
        url: 'blogs',
      },
    }
  },

  mounted() {
    this.updateDescription()
  },

  methods: {
    updateDescription() {
      this.meta.description = this.$refs.index.textContent.replace(/\s/g, '')
    },
  },
}
</script>
