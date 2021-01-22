<template>
  <readme />
</template>

<script>
export default {
  components: {
    Readme: () => import('~/components/Readme'),
  },
  async asyncData({ params }) {
    const res = await params.slug
    return { slug: res }
  },
  data() {
    return {
      slug: '',
    }
  },
  head() {
    return {
      title: this.slug,
    }
  },
}
</script>
