<template>
  <v-container>
    <v-list>
      <v-list-item v-for="item in info" :key="item.name" :to="item.path + '/'">
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $content, payload }) {
    if (payload) {
      return { info: payload }
    } else {
      return { info: await $content('info' || 'index').fetch() }
    }
  },
}
</script>
