<template>
  <v-card-actions>
    <v-btn
      v-if="prev"
      text
      :to="prev.path"
      class="text-decoration-none text-capitalize"
      color="#55a0f4"
    >
      <v-icon color="#fff" left>{{ mdiArrowLeft }}</v-icon>
      {{ prev.path }}
    </v-btn>

    <v-spacer />

    <v-btn
      v-if="next"
      text
      :to="next.path"
      class="text-decoration-none text-capitalize"
      color="#55a0f4"
    >
      {{ next.path }}
      <v-icon color="#fff" right>{{ mdiArrowRight }}</v-icon>
    </v-btn>
  </v-card-actions>
</template>

<script>
import { mdiArrowLeft, mdiArrowRight } from '@mdi/js'

export default {
  props: {
    prev: { type: Object, default: () => null },
    next: { type: Object, default: () => null },
  },
  data() {
    return { mdiArrowLeft, mdiArrowRight }
  },
}
</script>
