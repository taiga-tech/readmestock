<template>
  <div>
    <div v-if="md" class="markdown-body line-numbers" v-html="$md.render(md)" />
    <error-alert :error="error" :slug="slug" />
  </div>
</template>

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
    // background: none;
  }
  .token.operator {
    background-color: rgba(45, 45, 45, 0);
    // background: none;
  }
}
</style>

<script>
import Prism from '~/plugins/prism'

export default {
  components: {
    ErrorAlert: () => import('./ErrorAlert'),
  },
  data() {
    return {
      cors: 'https://cors-anywhere.herokuapp.com/',
      md: '',
      error: null,
    }
  },

  mounted() {
    this.getReadme()
    Prism.highlightAll()
  },

  methods: {
    async getReadme() {
      const response = await this.$axios
        .$get(
          `https://raw.githubusercontent.com/taiga-tech/${this.$parent.slug}/master/README.md`
        )
        .catch((error) => {
          this.error = error
        })
      this.md = response
    },
  },
}
</script>
