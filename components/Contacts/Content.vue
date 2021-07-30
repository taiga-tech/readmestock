<template>
  <v-list>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>
          <b class="label">お名前*</b>
        </v-list-item-title>

        <v-list-item-content class="pl-4">
          <span class="pa-2 value"> {{ data.name }}</span>
        </v-list-item-content>
      </v-list-item-content>
    </v-list-item>

    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>
          <b class="label">メールアドレス*</b>
        </v-list-item-title>

        <v-list-item-content class="pl-4">
          <span class="pa-2 value">{{ data.email }}</span>
        </v-list-item-content>
      </v-list-item-content>
    </v-list-item>

    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>
          <b class="label">お問い合わせ内容*</b>
        </v-list-item-title>

        <v-list-item-content
          class="pl-4"
          style="
            font-size: 14px;
            white-space: pre-wrap;
            word-wrap: break-word;
            overflow-wrap: break-word;
          "
        >
          <span class="pa-2 value">{{ data.message }}</span>
        </v-list-item-content>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  props: {
    data: { type: Object, default: null },
  },
}
</script>

<style lang="css" scoped>
.label {
  padding: 1rem 1rem;
  border-left: 6px double #ffffffb3;
}
.value {
  border-radius: 6px;
  background-color: #2c3e4e;
  overflow: auto;
}
</style>
