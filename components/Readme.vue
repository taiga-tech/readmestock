<template>
  <v-card
    elevation="0"
    class="markdown-body line-numbers"
    max-width="980"
    color="#00000000"
  >
    <v-card-title :class="$vuetify.breakpoint.xs ? 'text-h5' : 'text-h4'">
      {{ viewer.repository.name }}
    </v-card-title>

    <v-card-subtitle>
      <div align="end">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              large
              :href="viewer.repository.url"
              target="_blank"
              v-bind="attrs"
              style="text-decoration: none"
              v-on="on"
              ><v-icon>mdi-github</v-icon>
            </v-btn>
          </template>
          <span>Go to Github</span>
        </v-tooltip>

        {{ viewer.repository.owner.login }}
        <div>
          作成日:
          {{ $moment(viewer.repository.createdAt).calendar() }}
        </div>
        <div>
          最終更新日: {{ $moment(viewer.repository.updatedAt).fromNow() }}
        </div>
      </div>

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

    <v-divider />

    <div v-html="$md.render(viewer.repository.object.text)" />
  </v-card>
</template>

<script>
import Prism from '~/plugins/prism'

export default {
  props: {
    viewer: { type: Object, default: null },
    slug: { type: String, default: '' },
  },

  mounted() {
    Prism.highlightAll()
  },

  head() {
    return {
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.viewer.repository.object.text,
        },
      ],
    }
  },
}
</script>

<style lang="scss" src="~/assets/scss/custom.scss"></style>
