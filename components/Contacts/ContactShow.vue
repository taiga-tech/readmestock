<template>
  <v-card max-width="940" class="mx-auto py-auto" color="inherit">
    <v-card-title>お問い合わせ内容確認</v-card-title>
    <v-card-text>
      <div>
        name: <span>{{ data.name }}</span>
      </div>
      <div>
        email: <span>{{ data.email }}</span>
      </div>
      <div>
        message: <span>{{ data.message }}</span>
      </div>
    </v-card-text>
  </v-card>
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
