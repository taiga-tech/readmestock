<template>
  <div>
    <v-btn nuxt to="/readmes"> README </v-btn>
    <v-btn nuxt to="/blogs"> blogs </v-btn>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Welcome',
    }
  },
}
</script>
