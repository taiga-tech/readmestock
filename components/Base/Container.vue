<template>
  <v-container style="height: 100%" class="d-flex align-center">
    <div class="mx-auto" style="max-width: 940px">
      <v-card
        v-if="card"
        class="mx-auto"
        :max-width="maxWidth"
        :class="cardClass"
        :style="cardStyle"
      >
        <slot />
      </v-card>

      <div
        v-if="!card"
        class="mx-auto"
        :style="`max-width: ${maxWidth}px`"
        :class="cardClass"
      >
        <slot />
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  props: {
    maxWidth: { type: NaN, default: 940 },
    cardClass: { type: String, default: '' },
    cardStyle: { type: String, default: '' },
    card: { type: Boolean, default: true },
  },
}
</script>
