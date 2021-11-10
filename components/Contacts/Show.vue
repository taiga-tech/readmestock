<template>
  <v-card>
    <v-card-title>お問い合わせ内容確認</v-card-title>
    <v-divider />
    <contacts-content :data="data" />
  </v-card>
</template>

<script>
export default {
  components: {
    ContactsContent: () => import('~/components/Contacts/Content.vue'),
  },
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
}
</script>
