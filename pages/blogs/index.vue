<template>
  <div>
    <v-alert border="left" outlined type="warning" dismissible>
      現在準備中です。準備出来次第投稿していきます！
    </v-alert>
    <blog-index :results="blogs" />
  </div>
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
