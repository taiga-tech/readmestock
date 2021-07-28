<template>
  <!-- <v-list-group>
    <template v-slot:activator>
      <v-list-item-icon>
        <v-icon>mdi-information-variant</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title v-text="'info'" />
      </v-list-item-content>
    </template>

    <v-virtual-scroll :items="items" height="300" item-height="48">
      <template v-slot:default="{ item }">
        <v-list-item :key="item.to" :to="'/info/' + item.to + '/'" router exact>
          <v-list-item-icon>
            <v-icon small>mdi-{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.name" />
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-virtual-scroll>
  </v-list-group> -->

  <v-list>
    <v-list-item
      v-for="item in items"
      :key="item.to"
      :to="'/info/' + item.to + '/'"
      nuxt
      exact
    >
      <v-list-item-icon>
        <v-icon small>mdi-{{ item.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title v-text="item.name" />
      </v-list-item-content>
    </v-list-item>
    <v-list-item to="/info/release-notes/" nuxt exact color="green">
      <v-list-item-icon>
        <v-icon small>mdi-tag-outline</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title v-text="lts" />
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  props: {
    lts: { type: String, default: '' },
  },
  data() {
    return {
      items: [
        { name: 'このサイトについて', to: 'about', icon: 'application' },
        { name: 'お問い合わせ', to: 'contact', icon: 'chat-question-outline' },
      ],
    }
  },
}
</script>
