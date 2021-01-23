<template>
  <blog-index :results="blogs" />
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const query = await $content('blogs' || 'index')
    const blogs = await query.fetch()

    return {
      blogs,
    }
  },
  head() {
    return {
      title: 'ブログ一覧',
    }
  },
}
</script>
