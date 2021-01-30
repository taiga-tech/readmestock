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
        :to="re.path"
        tile
        :loading="!re.title"
        :disabled="!re.title"
        min-width="256"
        min-height="200"
      >
        <v-card-title>{{ re.title }}</v-card-title>

        <v-card-subtitle v-if="re.tags">
          <v-chip-group v-if="re.tags" column>
            <v-chip
              v-for="(tag, index) in re.tags"
              :key="index"
              outlined
              x-small
              >{{ tag }}</v-chip
            >
          </v-chip-group>
        </v-card-subtitle>

        <v-card-text v-if="re.discription != ''" class="description-wrapper">
          <span class="description">{{ re.discription }}</span>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    results: {
      type: Array,
      required: true,
      default: Array,
    },
  },
}
</script>

<style lang="scss">
.list-container {
  display: grid;
  justify-content: start;
  gap: 3px;

  @media only screen and (min-width: 1900px) {
    grid-template-columns: repeat(5, 20%);
  }
  @media only screen and (max-width: 1900px) {
    grid-template-columns: repeat(4, 25%);
  }
  @media only screen and (max-width: 1300px) {
    grid-template-columns: repeat(3, 33.333%);
  }
  @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 50%);
  }
  @media only screen and (max-width: 599px) {
    grid-template-columns: 100%;
    gap: 1px;
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
