<template>
  <v-card max-width="940" class="mx-auto py-auto" color="inherit">
    <v-card-title>お問い合わせ</v-card-title>
    <v-card-subtitle></v-card-subtitle>
    <v-card-text>
      <v-form
        ref="from"
        v-model="valid"
        lazy-validation
        name="contact"
        method="POST"
        data-netlify="true"
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
      </v-form>
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
    rules: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      valid: true,
    }
  },

  watch: {
    invalid() {
      this.valid = !this.valid
    },
  },

  mounted() {
    this.$emit('inValid', this.invalid)
  },
}
</script>
