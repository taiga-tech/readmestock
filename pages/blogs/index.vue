<template>
  <v-container ref="index">
    <app-warning />
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
    <blog :results="blogs" />
  </v-container>
</template>

<script>
import { mdiSwapVertical } from '@mdi/js'
import Meta from '~/assets/mixins/meta.js'

export default {
  components: {
    AppWarning: () => import('~/components/App/Warning.vue'),
    Blog: () => import('~/components/Blog/Index.vue'),
  },
  mixins: [Meta],

  data() {
    return {
      meta: {
        title: 'ブログ一覧',
        description: '',
        url: 'blogs',
      },
      selectSort: {
        orderValue: {
          field: 'createdAt',
          direction: 'desc',
        },
      },
      sortItems: [
        {
          name: '新着',
          orderValue: {
            field: 'createdAt',
            direction: 'desc',
          },
        },
        {
          name: '更新日',
          orderValue: {
            field: 'updatedAt',
            direction: 'desc',
          },
        },
      ],
      mdiSwapVertical,
    }
  },

  computed: {
    blogs() {
      return this.$store.getters['blogs/index']
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
        .dispatch('blogs/index', this.selectSort)
        .catch((err) => {
          console.error(err)
        })
    },
  },
}
</script>
