<template>
  <div>
    <v-row>
      <v-spacer />
      <v-col
        ><v-select
          v-model="selectSort"
          label="並び替え"
          :items="sortItems"
          item-text="name"
          item-value="orderValue"
        ></v-select
      ></v-col>
    </v-row>
    <client-only>
      <readme-index v-if="viewer" :results="viewer.repositories.nodes" />
    </client-only>
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
          name: '作成日新しい順',
          orderValue: {
            field: 'CREATED_AT',
            direction: 'DESC',
          },
        },
        {
          name: '作成日古い順',
          orderValue: {
            field: 'CREATED_AT',
            direction: 'ASC',
          },
        },
        {
          name: '最終更新日新しい順',
          orderValue: {
            field: 'UPDATED_AT',
            direction: 'DESC',
          },
        },
        {
          name: '最終更新日古い順',
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
