<template>
  <v-card
    ref="readme"
    elevation="0"
    class="markdown-body line-numbers"
    max-width="980"
    color="#00000000"
  >
    <v-list-item dense>
      <v-list-item-avatar>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              fab
              v-bind="attrs"
              :href="viewer.url"
              rel="noopener"
              target="_blank"
              style="text-decoration: none"
              aria-label="github"
              v-on="on"
              ><v-icon x-large>mdi-github</v-icon>
            </v-btn>
          </template>
          <span>Go to Github</span>
        </v-tooltip>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>
          <strong>{{ viewer.repository.owner.login }}</strong>
        </v-list-item-title>

        <v-list-item-subtitle>
          {{ $moment(viewer.repository.createdAt).calendar() }} - 最終更新
          {{ $moment(viewer.repository.updatedAt).fromNow() }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-title
      class="pt-0"
      :class="$vuetify.breakpoint.xs ? 'text-h5' : 'text-h4'"
    >
      {{ viewer.repository.name }}
      <span class="mx-2">
        <v-btn
          small
          :href="viewer.repository.url"
          target="_blank"
          rel="noopener"
          style="text-decoration: none; text-transform: none"
        >
          <v-icon left color="purple">mdi-github</v-icon>
          GitHub
        </v-btn>
        <v-btn
          v-if="viewer.repository.homepageUrl"
          small
          :href="viewer.repository.homepageUrl"
          target="_blank"
          rel="noopener"
          style="text-decoration: none"
        >
          <v-icon left>mdi-open-in-new</v-icon>
          site
        </v-btn>
      </span>
    </v-card-title>

    <v-card-subtitle v-if="viewer.repository.languages.nodes !== 0">
      <v-chip-group mandatory>
        <v-chip
          v-for="(lang, i) in viewer.repository.languages.nodes"
          :key="i"
          :color="lang.color"
          outlined
          small
        >
          {{ lang.name }}
        </v-chip>
      </v-chip-group>
    </v-card-subtitle>

    <base-markdown>
      <div
        v-html="
          $md.render(
            viewer.repository.onMaster
              ? '[[toc]]' + '\n\n' + viewer.repository.onMaster.text
              : '[[toc]]' + '\n\n' + viewer.repository.onMain.text
          )
        "
      />
    </base-markdown>
  </v-card>
</template>

<script>
import Meta from '~/assets/mixins/meta.js'

export default {
  mixins: [Meta],

  props: {
    viewer: { type: Object, default: () => null },
    slug: { type: String, default: '' },
  },

  data() {
    return {
      meta: {
        title: this.viewer.repository.name,
        description: null,
        url: 'readmes/' + this.viewer.repository.name,
      },
    }
  },

  mounted() {
    this.updateDescription()
  },

  methods: {
    updateDescription() {
      this.meta.description = this.$refs.readme.$vnode.elm.textContent.replace(
        /\s/g,
        ''
      )
    },
  },
}
</script>
