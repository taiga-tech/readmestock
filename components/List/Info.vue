<template>
  <v-list>
    <v-list-item-group>
      <v-list-item
        v-for="item in items"
        :key="item.to"
        :color="item.color"
        :to="'/info/' + item.to + '/'"
        nuxt
        exact
      >
        <v-list-item-icon>
          <v-icon small>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.name" />
        </v-list-item-content>
        <v-chip
          v-if="item.text === 'Latest'"
          x-small
          outlined
          :color="item.color"
        >
          {{ item.text }}
        </v-chip>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
import { mdiApplication, mdiChatQuestionOutline, mdiTagOutline } from '@mdi/js'

export default {
  props: {
    lts: { type: String, default: '' },
  },

  data() {
    return {
      items: [
        {
          name: 'このサイトについて',
          to: 'about',
          icon: mdiApplication,
          color: undefined,
          text: null,
        },
        {
          name: 'お問い合わせ',
          to: 'contact',
          icon: mdiChatQuestionOutline,
          color: undefined,
          text: null,
        },
        {
          name: this.lts,
          to: 'release-notes',
          icon: mdiTagOutline,
          color: 'green',
          text: 'Latest',
        },
      ],
    }
  },
}
</script>
