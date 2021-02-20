<template>
  <v-app>
    <v-container>
      <v-alert
        v-if="error.statusCode === 404 || error.statusCode === 500"
        border="left"
        type="error"
        outlined
      >
        <v-row align="center">
          <v-col class="grow">
            <strong>{{ error.statusCode }} : {{ error.message }}</strong>
          </v-col>
          <v-col class="shrink">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  href="https://github.com/taiga-tech/"
                  target="_blank"
                  v-bind="attrs"
                  v-on="on"
                  ><v-icon>mdi-github</v-icon></v-btn
                >
              </template>
              <span>Go to Github</span>
            </v-tooltip>
          </v-col>
          <v-col class="shrink">
            <v-btn text @click="$router.go(-1)">back</v-btn>
          </v-col>
        </v-row>
      </v-alert>
      <v-alert v-else border="left" outlined type="error">
        <strong>{{ otherError }}</strong>
      </v-alert>
    </v-container>
  </v-app>
</template>

<script>
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
      otherError: 'An error occurred',
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

<style lang="css">
strong {
  font-size: 20px;
}
</style>
