<template>
  <div>
    <div class="d-flex">
      <v-spacer />
      <div style="max-width: 200px">
        <v-select
          v-model="selectSort"
          solo
          dense
          menu-props="auto"
          prepend-inner-icon="mdi-swap-vertical"
          label="並び替え"
          :items="sortItems"
          item-text="name"
          item-value="orderValue"
        ></v-select>
      </div>
    </div>
    <readme-index v-if="viewer" :results="viewer.repositories.nodes" />
  </div>
</template>

<script>
import getRepositories from '~/apollo/queries/getRepositories.graphql'

export default {
  components: {
    ReadmeIndex: () => import('~/components/ReadmeIndex'),
  },

  data() {
    return {
      selectSort: {
        field: 'CREATED_AT',
        direction: 'DESC',
      },
      viewer: null,
      sortItems: [
        {
          name: '作成日降順',
          orderValue: {
            field: 'CREATED_AT',
            direction: 'DESC',
          },
        },
        {
          name: '作成日昇順',
          orderValue: {
            field: 'CREATED_AT',
            direction: 'ASC',
          },
        },
        {
          name: '最終更新日降順',
          orderValue: {
            field: 'UPDATED_AT',
            direction: 'DESC',
          },
        },
        {
          name: '最終更新日昇順',
          orderValue: {
            field: 'UPDATED_AT',
            direction: 'ASC',
          },
        },
      ],
    }
  },

  apollo: {
    viewer: {
      query: getRepositories,
      variables() {
        return {
          orderBy: this.selectSort,
        }
      },
    },
  },
}
</script>
