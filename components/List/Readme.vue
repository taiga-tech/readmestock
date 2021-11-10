<template>
  <v-list-group color="purple">
    <template v-slot:activator>
      <v-list-item-icon>
        <v-icon>{{ mdiGithub }}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title v-text="'README'" />
      </v-list-item-content>
    </template>

    <v-list-item to="/readmes/" exact nuxt>
      <v-list-item-icon>
        <v-icon small>{{ mdiGithub }}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title v-text="'一覧'" />
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
          :color="
            item.primaryLanguage &&
            (item.onMaster
              ? item.primaryLanguage.color
              : null || item.onMain
              ? item.primaryLanguage.color
              : null)
          "
          :to="'/readmes/' + item.name + '/'"
          :disabled="item.onMaster ? false : true || item.onMain ? false : true"
          nuxt
          exact
        >
          <v-list-item-icon>
            <v-icon small>{{ mdiGithub }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.name" />
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-virtual-scroll>
  </v-list-group>
</template>

<script>
import { mdiGithub } from '@mdi/js'

export default {
  props: {
    viewer: {
      type: Object,
      default: null,
    },
  },
  data() {
    return { mdiGithub }
  },
}
</script>
