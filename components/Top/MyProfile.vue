<template>
  <v-card>
    <v-card-title>自己紹介</v-card-title>

    <v-divider />

    <v-card-text class="markdown-body px-4">
      <nuxt-content :document="profile" />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      profile: null,
    }
  },

  mounted() {
    this.getProfile()
  },

  methods: {
    async getProfile() {
      this.profile = await this.$content('info', 'profile').fetch()
    },
  },
}
</script>

<style lang="scss" src="~/assets/scss/custom.scss"></style>
