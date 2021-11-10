<template>
  <v-card>
    <v-card-title>
      お問い合わせありがとうございます。<br />
      以下の内容でフォームを送信いたしました。<br />
      数日中に追ってメールにて回答をお送りいたします。<br />
      今しばらくお待ちください。
    </v-card-title>
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
    data: { type: Object, default: null },
  },
}
</script>
