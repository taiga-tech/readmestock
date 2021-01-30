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
      title: this.slug,
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

<style lang="scss">
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;

  img {
    background: none;
    max-width: 100%;
  }
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 5px;
  }
}

pre[class*='language-'],
code[class*='language-'] {
  text-shadow: none;
  // background-color: rgba(45, 45, 45, 1);
  code[class*='language-'] {
    background-color: rgba(45, 45, 45, 1);
  }
  .token.operator {
    background-color: rgba(45, 45, 45, 0);
  }
}

.markdown-body table {
  display: block;
  width: 100%;
  overflow: auto;
  color: rgb(204, 204, 204);
}

.markdown-body table th {
  font-weight: 600;
}

.markdown-body table td,
.markdown-body table th {
  padding: 6px 13px;
  border: 1px solid #3b434b;
}

.markdown-body table tr {
  border-top: 1px solid #0f1218;
  background-color: #0f1218;
}

.markdown-body table tr:nth-child(2n) {
  background-color: #161c21;
}
</style>
