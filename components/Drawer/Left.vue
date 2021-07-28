<template>
  <v-navigation-drawer
    v-model="drawerStatus"
    :mini-variant="minivariant"
    :expand-on-hover="minivariant"
    fixed
    floating
    clipped
    app
  >
    <v-list>
      <v-list-item to="/" router exact>
        <v-list-item-avatar>
          <!-- <v-avatar :size="minivariant ? 24 : 36"> -->
          <v-img :src="user.avatarUrl" />
          <!-- </v-avatar> -->
        </v-list-item-avatar>
        <v-list-item-content>
          <strong>{{ user.login }}</strong>
          <v-list-item-subtitle>
            total: {{ user.repositories.totalCount }}, public:
            {{ viewer.repositories.totalCount }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <list-readme :viewer="viewer" />

      <list-blog :blogs="blogs" />

      <list-info :lts="viewer.repository.latestRelease.name" />
    </v-list>
    <template v-slot:append>
      <div class="ma-1">
        <app-sns />
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    drawer: { type: Boolean },
    minivariant: { type: Boolean },
  },

  data() {
    return {
      drawerStatus: this.drawer,
      miniStatus: this.miniVariant,
    }
  },

  computed: {
    user() {
      return this.$store.getters['gh-readme/user']
    },
    viewer() {
      return this.$store.getters['gh-readme/glIndex']
    },
    blogs() {
      return this.$store.getters['blogs/index']
    },
  },

  watch: {
    drawer() {
      this.drawerStatus = !this.drawerStatus
    },
    miniVariant() {
      this.miniStatus = !this.miniStatus
    },
  },
}
</script>
