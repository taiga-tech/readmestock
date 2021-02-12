<template>
  <v-list>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="label">お名前</v-list-item-title>
      </v-list-item-content>
      <v-list-item-content>{{ data.name }}</v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="label">メールアドレス</v-list-item-title>
      </v-list-item-content>
      <v-list-item-content style="overflow: auto">
        {{ data.email }}
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="label">お問い合わせ内容</v-list-item-title>
        <v-list-item-content class="content" style="font-size: 14px">{{
          data.message
        }}</v-list-item-content>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style>
.content {
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow-wrap: break-word;
}
</style>
