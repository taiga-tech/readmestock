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

      <v-btn-toggle dense>
        <v-btn
          small
          :href="viewer.repository.url"
          target="_blank"
          rel="noopener"
          style="text-decoration: none"
        >
          <v-icon left color="purple">mdi-github</v-icon>
          readme
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
      </v-btn-toggle>
    </v-list-item>

    <v-card-title
      class="pt-0"
      :class="$vuetify.breakpoint.xs ? 'text-h5' : 'text-h4'"
    >
      {{ viewer.repository.name }}
    </v-card-title>

    <v-card-subtitle>
      <v-chip-group v-if="viewer.repository.languages.nodes.length != 0">
        <v-chip
          v-for="(lng, i) in viewer.repository.languages.nodes"
          :key="i"
          :color="lng.color"
          outlined
          small
        >
          {{ lng.name }}
        </v-chip>
      </v-chip-group>
    </v-card-subtitle>

    <div v-html="$md.render(viewer.repository.object.text)" />
  </v-card>
</template>

<script>
import Prism from '~/plugins/prism'
import Meta from '~/assets/mixins/meta.js'

export default {
  mixins: [Meta],
  props: {
    viewer: { type: Object, default: null },
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
    Prism.highlightAll()
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

<style lang="scss" src="~/assets/scss/custom.scss"></style>
