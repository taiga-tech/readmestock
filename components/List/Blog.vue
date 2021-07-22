<template>
  <v-list-group color="yellow">
    <template v-slot:activator>
      <v-list-item-icon>
        <v-icon>mdi-post-outline</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title v-text="'Blog'" />
      </v-list-item-content>
    </template>

    <v-list-item to="/blogs/" exact>
      <v-list-item-icon>
        <v-icon small>mdi-post</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title v-text="'一覧'" />
      </v-list-item-content>
    </v-list-item>

    <v-virtual-scroll :items="blogs" height="300" item-height="48">
      <template v-slot:default="{ item }">
        <v-list-item
          :key="item.path"
          :to="item.path + '/'"
          :disabled="!item.title"
          exact
        >
          <v-list-item-icon>
            <v-icon small>mdi-post</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-virtual-scroll>
  </v-list-group>
</template>

<script>
export default {
  props: {
    blogs: { type: Array, default: () => [] },
  },
}
</script>
