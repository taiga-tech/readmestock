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
    if (payload) {
      return { blogs: payload }
    } else {
      return { blogs: await $content('blogs' || 'index').fetch() }
    }
  },

  head() {
    return {
      title: 'ブログ一覧',
    }
  },
}
</script>
