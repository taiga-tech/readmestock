<template>
  <v-list-group>
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
  </v-list-group>
</template>

<script>
export default {
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
