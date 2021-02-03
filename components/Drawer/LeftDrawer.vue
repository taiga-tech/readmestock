<template>
  <v-navigation-drawer
    v-model="drawerStatus"
    :mini-variant="minivariant"
    :expand-on-hover="minivariant"
    :color="$vuetify.theme.dark ? '#272727' : '#f5f5f5'"
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

      <!-- <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item> -->

      <readme-list :viewer="viewer" />

      <blog-list />
      <info-list />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import getRepositories from '~/apollo/queries/getRepositories.graphql'
import getUser from '~/apollo/queries/getUser.graphql'

export default {
  components: {
    ReadmeList: () => import('../ListGroup/ReadmeList'),
    BlogList: () => import('../ListGroup/BlogList'),
    InfoList: () => import('../ListGroup/InfoList'),
  },

  props: {
    items: {
      type: Array,
      default: () => [],
    },
    drawer: {
      type: Boolean,
    },
    minivariant: {
      type: Boolean,
    },
  },

  data() {
    return {
      drawerStatus: this.drawer,
      miniStatus: this.miniVariant,
    }
  },

  watch: {
    drawer() {
      this.drawerStatus = !this.drawerStatus
    },
    miniVariant() {
      this.miniStatus = !this.miniStatus
    },
  },

  apollo: {
    viewer: {
      query: getRepositories,
    },
    user: {
      query: getUser,
    },
  },
}
</script>
