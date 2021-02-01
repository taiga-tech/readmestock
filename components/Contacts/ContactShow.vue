<template>
  <v-card>
    <v-card-title>お問い合わせ内容確認</v-card-title>
    <v-divider></v-divider>
    <Content :data="data" />
  </v-card>
</template>

<script>
export default {
  components: {
    Content: () => import('./Content'),
  },
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
}
</script>
