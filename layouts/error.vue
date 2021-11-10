<template>
  <v-app>
    <v-dialog v-model="open" width="500" persistent>
      <v-card color="#13151a">
        <v-card-title>
          <v-icon color="#dd2c00" left>{{ mdiCloudAlert }}</v-icon>
          <h1 v-if="error.statusCode === 404" style="font-size: 20px">
            {{ pageNotFound }}
          </h1>
          <h1 v-else style="font-size: 20px">{{ otherError }}</h1>
        </v-card-title>
        <v-card-text v-if="error.statusCode !== 404">
          {{ error.message }}
        </v-card-text>
        <v-card-actions>
          <v-btn text to="/" color="pink">topへ</v-btn>
          <v-spacer />
          <v-btn color="green" text to="/info/contact/"> お問い合わせ </v-btn>
          <v-btn
            v-for="sns in socials"
            :key="sns.name"
            icon
            :color="sns.color"
            :href="sns.href"
            rel="noopener"
            target="_blank"
          >
            <v-icon>{{ sns.icon }}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import { mdiCloudAlert } from '@mdi/js'
import { socials } from '~/assets/constants/socials.js'

export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
      open: true,
      socials,
      mdiCloudAlert,
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 || this.error.statusCode === 500
        ? `${this.error.statusCode} : ${this.error.message}`
        : this.otherError
    return {
      title,
    }
  },
}
</script>
