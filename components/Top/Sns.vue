<template>
  <v-row dense>
    <v-col v-for="(s, i) in sns" :key="i" cols="6">
      <v-card hover>
        <v-list-item :href="s.href" target="_blank" rel="noopener">
          <v-list-item-avatar>
            <v-icon left :color="s.color">mdi-{{ s.icon }}</v-icon>
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
import sns from '~/assets/json/socials.json'
export default {
  data() {
    return { sns }
  },
}
</script>
