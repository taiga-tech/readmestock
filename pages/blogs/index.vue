<template>
  <app-index :results="blogs" param="blogs" />
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
}
</script>
