<template>
  <div>
    <div style="max-width: 940px; margin: 0 auto">
      <!-- <div align="center">
        <v-btn nuxt to="/readmes"> README </v-btn>

        <v-btn nuxt to="/blogs"> blogs </v-btn>

        <v-btn nuxt to="/info/contact">contact</v-btn>
      </div> -->

      <Chart />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Chart: () => import('~/components/Top/Chart'),
  },

  head() {
    return {
      title: 'Welcome',
    }
  },
}
</script>
