<template>
  <!-- Graphql -->
  <v-card
    elevation="0"
    class="markdown-body line-numbers"
    max-width="980"
    color="#00000000"
  >
    <v-card-title class="text-h5">
      <v-row>
        <v-col>
          {{ viewer.repository.name }}
        </v-col>
        <v-col class="shrink">
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
        </v-col>
      </v-row>
    </v-card-title>
    <v-card-subtitle>
      <div align="end">
        <div>owner: {{ viewer.repository.owner.login }}</div>
        <div>
          作成日:
          {{ $moment(viewer.repository.createdAt).calendar() }}
        </div>
        <div>
          最終更新日: {{ $moment(viewer.repository.updatedAt).fromNow() }}
        </div>
      </div>
      <v-chip-group>
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
    <div v-html="$md.render(viewer.repository.object.text)"></div>
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
</style>
