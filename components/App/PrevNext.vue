<template>
  <v-card-actions>
    <v-btn
      v-if="prev"
      text
      :to="prev.path"
      class="text-decoration-none text-capitalize"
      color="#55a0f4"
    >
      <v-icon color="#fff" left>mdi-arrow-left</v-icon>
      {{ prev.title }}
    </v-btn>

    <v-spacer />

    <v-btn
      v-if="next"
      text
      :to="next.path"
      class="text-decoration-none text-capitalize"
      color="#55a0f4"
    >
      {{ next.title }}
      <v-icon color="#fff" right>mdi-arrow-right</v-icon>
    </v-btn>
    <!-- </div> -->
  </v-card-actions>
</template>

<script>
export default {
  props: {
    prev: { type: Object, default: () => null },
    next: { type: Object, default: () => null },
  },
}
</script>
