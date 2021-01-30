<template>
  <v-list-group>
    <template v-slot:activator>
      <v-list-item-icon>
        <v-icon>mdi-github</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title v-text="'README'" />
      </v-list-item-content>
    </template>

    <v-list-item to="/readmes" router exact>
      <v-list-item-icon>
        <v-icon small>mdi-github</v-icon>
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
          :to="'/readmes/' + item.name"
          :disabled="!item.object"
          router
          exact
        >
          <v-list-item-icon>
            <v-icon small>mdi-github</v-icon>
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
export default {
  props: {
    viewer: {
      type: Object,
      default: null,
    },
  },
}
</script>
