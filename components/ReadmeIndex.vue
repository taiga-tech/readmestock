<template>
  <div class="list-container">
    <div v-for="(re, i) in results" :key="i">
      <v-skeleton-loader
        v-if="!results"
        transition
        type="card"
      ></v-skeleton-loader>

      <v-card
        v-else
        :to="param + '/' + re.node.name"
        tile
        :loading="!re.node.name"
        :disabled="!re.node.name"
        min-width="256"
        min-height="200"
      >
        <v-card-title>{{ re.node.name }}</v-card-title>

        <v-card-subtitle v-if="re.node.languages.nodes">
          <v-chip-group column>
            <v-chip
              v-for="(lang, index) in re.node.languages.nodes"
              :key="index"
              outlined
              x-small
              :color="lang.color"
            >
              {{ lang.name }}</v-chip
            >
          </v-chip-group>
        </v-card-subtitle>

        <v-card-text v-if="re.discription != ''" class="description-wrapper">
          <span class="description">{{ re.discription }}</span>
        </v-card-text>

        <v-card-subtitle>
          {{ re.node.createdAt }}
        </v-card-subtitle>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    param: {
      type: String,
      required: true,
      default: String,
    },
    results: {
      type: Array,
      required: true,
      default: Array,
    },
  },
}
</script>

<style lang="scss" scoped>
.list-container {
  display: grid;
  justify-content: start;
  gap: 3px;

  @media only screen and (min-width: 1900px) {
    grid-template-columns: repeat(5, 20%);
  }
  @media only screen and (max-width: 1900px) {
    grid-template-columns: repeat(4, auto);
  }
  @media only screen and (max-width: 1300px) {
    grid-template-columns: repeat(3, auto);
  }
  @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(2, auto);
  }
  @media only screen and (max-width: 599px) {
    grid-template-columns: 100%;
  }

  .description-wrapper {
    padding: 2px 16px;
    .description {
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
