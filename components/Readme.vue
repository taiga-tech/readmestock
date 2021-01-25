<template>
  <!-- Graphql -->
  <!-- <v-card
    class="markdown-body line-numbers"
    v-html="$md.render(viewer.repository.object.text)"
  /> -->

  <!-- Restapi -->
  <v-card
    class="markdown-body line-numbers"
    max-width="980"
    v-html="$md.render(viewer)"
  />
</template>

<script>
import Prism from '~/plugins/prism'

export default {
  props: {
    viewer: { type: String, default: '' },
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
          content: this.viewer,
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
