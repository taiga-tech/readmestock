<template>
  <readme />
</template>

<script>
export default {
  components: {
    Readme: () => import('~/components/Readme'),
  },
  async asyncData({ params }) {
    const slug = await params.slug // "/abc" パスにアクセスすると、slug は "abc" になります。
    return { readmesSlug: slug }
  },
  data() {
    return {
      readmesSlug: '',
    }
  },
}
</script>
