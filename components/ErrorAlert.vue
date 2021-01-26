<template>
  <v-alert border="left" outlined type="error">
    <v-row align="center">
      <v-col class="grow">
        {{ error }}
      </v-col>
      <v-col class="shrink">
        <v-btn
          icon
          small
          :href="'https://github.com/taiga-tech/' + $route.params.slug"
          target="_blank"
          ><v-icon>mdi-github</v-icon></v-btn
        >
      </v-col>
      <v-col class="shrink">
        <v-btn text small @click="$router.go(-1)">back</v-btn>
      </v-col>
    </v-row>
  </v-alert>
</template>

<script>
export default {
  props: {
    error: {
      type: Error,
      required: false,
      default: null,
    },
  },
}
</script>
