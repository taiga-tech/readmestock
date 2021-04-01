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
        :to="'/readmes/' + re.name + '/'"
        nuxt
        tile
        hover
        :loading="!re.name"
        :disabled="re.onMaster ? false : true || re.onMain ? false : true"
        style="color: #f6f6f6"
        min-width="256"
        min-height="200"
      >
        <v-card-title>{{ re.name }}</v-card-title>

        <v-card-subtitle v-if="re.languages.nodes">
          owner: {{ re.owner.login }}
          <v-chip-group column>
            <v-chip
              v-for="(lang, index) in re.languages.nodes"
              :key="index"
              outlined
              x-small
              :color="lang.color"
            >
              {{ lang.name }}</v-chip
            >
          </v-chip-group>
        </v-card-subtitle>

        <v-card-text v-if="re.discription" class="description-wrapper">
          <span class="description">{{ re.discription }}</span>
        </v-card-text>
        <v-btn text x-small absolute bottom right>
          {{ $moment(re.createdAt).calendar() }} -
          {{ $moment(re.updatedAt).fromNow() }}
        </v-btn>
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

<style lang="scss" scoped>
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
