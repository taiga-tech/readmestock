<template>
  <div>
    <warning-alert />
    <blog-index :results="blogs" />
  </div>
</template>

<script>
export default {
  components: {
    WarningAlert: () => import('~/components/WarningAlert'),
  },

  async asyncData({ $content, payload }) {
    const blogs = await $content('blogs' || 'index')
      .sortBy('createdAt', 'desc')
      .fetch()
    return { blogs }
  },

  head() {
    return {
      title: 'ブログ一覧 | ',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'ブログ一覧',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'ブログ一覧 | README Stock',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://taiga-tech.tk/blogs/',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'ブログ一覧',
        },
      ],
    }
  },
}
</script>
