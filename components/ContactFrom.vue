<template>
  <v-card>
    <v-card-title>お問い合わせ</v-card-title>
    <v-card-subtitle></v-card-subtitle>
    <v-card-text>
      <v-form
        ref="from"
        name="contact"
        method="POST"
        data-netlify="true"
        @submit.prevent="onSubmit"
      >
        <input type="hidden" name="form-name" value="contact" />

        <v-text-field
          v-model="data.name"
          :rules="rules.name"
          :counter="10"
          name="name"
          label="名前"
          required
        ></v-text-field>

        <v-text-field
          v-model="data.email"
          :rules="rules.email"
          name="email"
          label="メールアドレス"
          required
        ></v-text-field>

        <v-textarea
          v-model="data.message"
          :counter="200"
          :rules="rules.message"
          name="message"
          label="お問い合わせ内容"
        ></v-textarea>

        <v-btn type="submit">送信</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      data: {
        name: '',
        email: '',
        message: '',
      },
      rules: {
        name: [(v) => !!v || '名前は必須です'],
        email: [
          (v) => !!v || 'メールアドレスは必須です',
          (v) =>
            /.+@.+\..+/.test(v) || 'メールアドレスを正しく入力してください',
        ],
        message: [(v) => !!v || 'メッセージは必須です'],
      },
    }
  },

  methods: {
    onSubmit() {
      console.log(this.data)
    },
  },
}
</script>
