<template>
  <v-card>
    <v-card-title>お問い合わせ内容確認</v-card-title>
    <v-divider></v-divider>
    <contact-content :data="data" />
  </v-card>
</template>

<script>
export default {
  components: {
    ContactContent: () => import('./ContactContent'),
  },
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
}
</script>
