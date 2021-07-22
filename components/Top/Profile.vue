<template>
  <v-card height="100%">
    <v-card-title>自己紹介</v-card-title>

    <v-divider />

    <v-card-text class="markdown-body px-4">
      <nuxt-content :document="profile" />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    profile: { type: Object, default: () => null },
  },
}
</script>

<style lang="scss" src="~/assets/scss/custom.scss"></style>
