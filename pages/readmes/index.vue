<template>
  <v-container ref="index">
    <div class="d-flex">
      <v-spacer />
      <div style="max-width: 200px">
        <v-select
          v-model="selectSort"
          solo
          dense
          menu-props="auto"
          :prepend-inner-icon="mdiSwapVertical"
          label="並び替え"
          :items="sortItems"
          item-text="name"
          item-value="orderValue"
          @change="sortIndex"
        ></v-select>
      </div>
    </div>
    <readme v-if="viewer" :results="viewer.repositories.nodes" />
  </v-container>
</template>

<script>
import { mdiSwapVertical } from '@mdi/js'
import Meta from '~/assets/mixins/meta.js'

export default {
  components: { Readme: () => import('~/components/Readme/Index.vue') },
  mixins: [Meta],
  async asyncData({ store }) {
    await store
      .dispatch('gh-readme/index', {
        field: 'CREATED_AT',
        direction: 'DESC',
      })
      .catch((err) => {
        console.error(err)
      })
  },

  data() {
    return {
      meta: {
        title: 'README一覧',
        description: '',
        url: 'readmes',
      },
      selectSort: {
        field: 'CREATED_AT',
        direction: 'DESC',
      },
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
      mdiSwapVertical,
    }
  },

  computed: {
    viewer() {
      return this.$store.getters['gh-readme/index']
    },
  },

  mounted() {
    this.updateDescription()
  },

  methods: {
    updateDescription() {
      this.meta.description = this.$refs.index.textContent.replace(/\s/g, '')
    },

    async sortIndex() {
      await this.$store
        .dispatch('gh-readme/index', this.selectSort)
        .catch((err) => {
          console.error(err)
        })
    },
  },
}
</script>
