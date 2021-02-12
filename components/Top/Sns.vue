<template>
  <v-row dense>
    <v-col v-for="(s, i) in sns" :key="i" cols="6">
      <v-card>
        <v-list-item :href="s.to" target="_blank" rel="noopener">
          <v-list-item-avatar>
            <v-icon>{{ s.icon }}</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
              {{ s.name }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: null,
    },
    viewer: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      sns: [
        {
          name: 'Twitter',
          to: 'https://twitter.com/Taiga_dev',
          icon: 'mdi-twitter',
        },
        {
          name: 'Wantedly',
          to: 'https://www.wantedly.com/users/137448604?profile_v1=true',
          icon: '',
        },
      ],
    }
  },
}
</script>
