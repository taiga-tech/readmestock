<template>
  <v-card max-width="940" class="mx-auto py-auto" color="inherit">
    <v-card-title>お問い合わせありがとうございました</v-card-title>
    <v-card-text>
      <div></div>
      <v-btn text to="/">戻る</v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    response: {
      type: Object,
      default: null,
    },
    // error: {
    //   type: Error,
    //   default: null,
    // },
  },
}
</script>
