<template>
  <v-bottom-navigation shift grow fixed>
    <v-btn v-for="(item, i) in items" :key="i" :to="item.to">
      <span>{{ item.name }}</span>

      <v-icon>{{ item.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
import { mdiHome, mdiGithub, mdiPost } from '@mdi/js'

export default {
  data() {
    return {
      value: '',
      items: [
        { name: 'Home', to: '/', icon: mdiHome },
        { name: 'README', to: '/readmes/', icon: mdiGithub },
        { name: 'Blogs', to: '/blogs/', icon: mdiPost },
      ],
    }
  },
}
</script>
