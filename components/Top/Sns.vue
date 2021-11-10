<template>
  <v-row dense>
    <v-col v-for="(sns, i) in socials" :key="i" cols="6">
      <v-card hover>
        <v-list-item :href="sns.href" target="_blank" rel="noopener">
          <v-list-item-icon>
            <v-icon :color="sns.color">
              {{ sns.icon }}
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              {{ sns.name }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { socials } from '~/assets/constants/socials.js'

export default {
  data() {
    return { socials }
  },
}
</script>
