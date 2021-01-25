<template>
  <div v-resize="onResize" dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :expand-on-hover="miniVariant"
      clipped
      app
    >
      <v-list>
        <v-list-item>
          <v-list-item-action>
            <v-avatar :size="miniVariant ? 24 : 36">
              <v-img :src="viewer.avatarUrl" />
            </v-avatar>
          </v-list-item-action>
          <v-list-item-content>
            <strong>{{ viewer.login }}</strong>
            <v-list-item-subtitle
              >public:
              {{ viewer.repositories.nodes.length }}</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-for="(item, i) in contents"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>

        <!--  -->

        <v-list-group>
          <template v-slot:activator>
            <v-list-item-action>
              <v-icon>mdi-github</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="'README'"></v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item to="/readmes" router exact>
            <v-list-item-action>
              <v-icon small>mdi-github</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>一覧</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-virtual-scroll
            :items="viewer.repositories.nodes"
            height="300"
            item-height="48"
          >
            <template v-slot:default="{ item }">
              <v-list-item
                :key="item.url"
                :to="'/readmes/' + item.name"
                router
                exact
              >
                <v-list-item-action>
                  <v-icon small>mdi-github</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>{{ item.name }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-virtual-scroll>
        </v-list-group>

        <!--  -->

        <v-list-group>
          <template v-slot:activator>
            <v-list-item-action>
              <v-icon>mdi-post-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="'Blogs'"></v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item to="/blogs" router exact>
            <v-list-item-action>
              <v-icon small>mdi-post</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>一覧</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-virtual-scroll :items="items" height="300" item-height="48">
            <template v-slot:default="{ item }">
              <v-list-item :key="item.path" :to="item.path" router exact>
                <v-list-item-action>
                  <v-icon small>mdi-post</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-virtual-scroll>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar clipped-left fixed dense app elevation="1">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>

      <v-toolbar-title @click="$router.push('/')" v-text="title" />

      <v-spacer />
    </v-app-bar>

    <v-navigation-drawer v-model="rightDrawer" right temporary fixed>
      <v-list>
        <theme-switch />
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import getRepositories from '~/apollo/queries/getRepositories.graphql'

export default {
  components: {
    ThemeSwitch: () => import('./ThemeSwitch.vue'),
  },

  data() {
    return {
      viewer: null,
      drawer: false,
      fixed: false,
      contents: [
        {
          icon: 'mdi-home',
          title: 'Welcome',
          to: '/',
        },
      ],
      blogs: [],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'README Stock',
      windowSize: {
        x: 0,
        y: 0,
      },
    }
  },

  computed: {
    items() {
      return this.blogs
    },
  },

  mounted() {
    this.getData()
  },

  methods: {
    onResize() {
      this.windowSize = {
        x: window.innerWidth,
        y: window.innerHeight,
      }
    },
    async getData() {
      const query = await this.$content('blogs' || 'index')
      const blogs = await query.fetch()
      this.blogs = blogs
    },
  },

  apollo: {
    viewer: {
      query: getRepositories,
    },
  },
}
</script>
