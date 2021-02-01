<template>
  <v-bottom-navigation shift grow app>
    <v-btn v-for="(item, i) in items" :key="i" :to="item.to">
      <span>{{ item.name }}</span>

      <v-icon>mdi-{{ item.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      items: [
        { name: 'Home', to: '/', icon: 'home' },
        { name: 'README', to: '/readmes/', icon: 'github' },
        { name: 'Blogs', to: '/blogs', icon: 'post' },
      ],
    }
  },
}
</script>
