<template>
  <div class="mx-auto" style="max-width: 940px">
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1" :rules="[() => valid]">
          お問い合わせ
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 2" step="2">
          お問い合わせ内容確認
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3"> 送信完了 </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <!-- <contact-form :data="data" :rules="rules" @valid="getValid" /> -->
          <v-card>
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

          <v-btn
            color="primary"
            :disabled="
              !valid ||
              data.name == '' ||
              data.email == '' ||
              data.message == ''
            "
            @click="e1 = 2"
          >
            確認
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <contact-show :data="data" />

          <div class="d-flex px-6 mt-4" style="justify-content: space-between">
            <div><v-btn text @click="e1 = 1"> 戻る </v-btn></div>
            <div><v-btn color="primary" @click="onSubmit"> 送信 </v-btn></div>
          </div>
        </v-stepper-content>

        <v-stepper-content step="3">
          <contact-sucsess />
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script>
// import ContactForm from '~/components/Contacts/ContactForm.vue'
import ContactShow from '~/components/Contacts/ContactShow.vue'
import ContactSucsess from '~/components/Contacts/ContactSucsess.vue'

export default {
  components: {
    // ContactForm,
    ContactShow,
    ContactSucsess,
  },
  data() {
    return {
      e1: 1,
      data: {
        name: '',
        email: '',
        message: '',
      },
      response: null,
      valid: true,
      rules: {
        name: [(v) => !!v || '名前は必須です'],
        email: [
          (v) => !!v || 'メールアドレスは必須です',
          (v) =>
            /.+@.+\..+/.test(v) || 'メールアドレスを正しく入力してください',
        ],
        message: [(v) => !!v || 'メッセージは必須です'],
      },
      errors: null,
    }
  },
  methods: {
    async onSubmit() {
      const contacts = new FormData()
      contacts.append('form-name', 'contact')
      contacts.append('name', this.data.name)
      contacts.append('email', this.data.email)
      contacts.append('message', this.data.message)
      const response = await this.$axios
        .$post(window.location.origin, contacts)
        .catch((err) => {
          console.error(err)
          this.error = err
        })
      console.log(response)
      this.e1 = 3
    },

    // getValid(valid) {
    //   this.valid = valid
    // },
  },
}
</script>
