<template>
  <v-alert v-if="error" border="left" outlined type="error">
    <v-row align="center">
      <v-col class="grow">
        {{ error }}
      </v-col>
      <v-col class="shrink">
        <v-btn
          icon
          small
          :href="'https://github.com/taiga-tech/' + slug"
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
      type: Object,
      default: null,
    },
    slug: {
      type: String,
      default: '',
    },
  },
}
</script>
