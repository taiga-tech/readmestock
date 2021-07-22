<template>
  <base-container>
    <v-stepper ref="contact" v-model="steps">
      <v-stepper-header>
        <v-stepper-step :complete="steps > 1" step="1" :rules="[() => valid]">
          お問い合わせ
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
          :complete="steps > 2"
          step="2"
          :rules="[() => error.status]"
        >
          お問い合わせ内容確認
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3"> 送信完了 </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card>
            <v-card-title>お問い合わせ</v-card-title>
            <v-card-subtitle>
              ご意見、ご要望、フィードバックなどがあればこちらからお問い合わせください、<br />
              Twitter
              <a
                href="https://twitter.com/Taiga_dev"
                target="_blank"
                rel="noopener"
                ><v-icon x-small color="primary">mdi-twitter</v-icon>
                @Taiga_dev
              </a>
              でも受付可能です。
            </v-card-subtitle>
            <v-card-text>
              <v-form
                ref="from"
                v-model="valid"
                lazy-validation
                name="contact"
                method="POST"
                netlify-honeypot="bot-field"
                data-netlify="true"
              >
                <input type="hidden" name="form-name" value="contact" />
                <label class="d-none">
                  Don’t fill this out if you’re human:
                  <input v-model="data.botField" name="bot-field" />
                </label>

                <v-text-field
                  v-model="data.name"
                  :rules="rules.name"
                  name="name"
                  label="お名前*"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="data.email"
                  :rules="rules.email"
                  name="email"
                  label="メールアドレス*"
                  required
                ></v-text-field>

                <v-textarea
                  v-model="data.message"
                  :rules="rules.message"
                  name="message"
                  label="お問い合わせ内容*"
                ></v-textarea>
              </v-form>
            </v-card-text>
          </v-card>
          <v-row dense class="mt-1">
            <v-col>
              <v-btn
                block
                color="primary"
                :disabled="status"
                @click="steps = 2"
              >
                確認
              </v-btn>
            </v-col>
          </v-row>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-alert v-if="!error.status" border="left" outlined type="error">
            <v-row align="center">
              <v-col class="grow">
                {{ error.message }}
              </v-col>
              <v-col class="shrink">
                <v-btn
                  color="error"
                  small
                  :fab="$vuetify.breakpoint.xs"
                  @click="refresh"
                >
                  <v-icon>mdi-rotate-right</v-icon>
                  <span v-show="!$vuetify.breakpoint.xs">ページ再読み込み</span>
                </v-btn>
              </v-col>
            </v-row>
          </v-alert>

          <contacts-show :data="data" />

          <v-row v-if="error.status" dense class="mt-1">
            <v-col><v-btn block @click="steps = 1"> 戻る </v-btn></v-col>
            <v-col>
              <v-btn block color="primary" @click="onSubmit"> 送信 </v-btn>
            </v-col>
          </v-row>
        </v-stepper-content>

        <v-stepper-content step="3">
          <contacts-sucsess :data="data" />
          <v-row class="mt-1" dense
            ><v-col
              ><v-btn block to="/" color="primary">トップへ戻る</v-btn></v-col
            ></v-row
          >
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </base-container>
</template>

<script>
import Meta from '~/assets/mixins/meta.js'

export default {
  mixins: [Meta],

  data() {
    return {
      meta: {
        title: 'お問い合わせ',
        description: 'お問い合わせ',
        url: 'info/contact',
      },
      steps: 1,
      data: {
        name: '',
        email: '',
        message: '',
        botField: '',
      },
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
      response: null,
      error: { status: true, message: '' },
    }
  },

  computed: {
    status() {
      const status =
        !this.valid ||
        this.data.name === '' ||
        this.data.email === '' ||
        this.data.message === ''
      return status
    },
  },

  // mounted() {
  //   this.updateDescription()
  // },

  methods: {
    async onSubmit() {
      const contacts = new URLSearchParams()
      contacts.append('form-name', 'contact')
      contacts.append('name', this.data.name)
      contacts.append('email', this.data.email)
      contacts.append('message', this.data.message)
      contacts.append('bot-field', this.data.botField)
      const response = await this.$axios
        // .$post('/', contacts)
        .$post(window.location.origin, contacts)
        // .$post('localhost', contacts) // error handling
        .catch(() => {
          this.error = {
            status: false,
            message: `メッセージ送信に失敗しました もう一度最初からお願いします`,
          }
        })
      if (this.error.status) {
        this.response = response
        this.steps = 3
      }
    },

    refresh() {
      location.reload()
    },

    // updateDescription() {
    //   this.meta.description = this.$refs.contact.$vnode.elm.textContent.replace(
    //     /\s/g,
    //     ''
    //   )
    // },
  },
}
</script>
