<template>
  <div
    outlined
    class="markdown-body line-numbers"
    v-html="$md.render(md)"
  ></div>
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
    padding: 15px;
  }
}

code[class*='language-'],
pre[class*='language-'] {
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
  data() {
    return {
      cors: 'https://cors-anywhere.herokuapp.com/',
      md: '',
    }
  },

  mounted() {
    this.getReadme()
    Prism.highlightAll()
  },

  methods: {
    async getReadme() {
      const response = await this.$axios.$get(
        `${this.cors}https://raw.githubusercontent.com/taiga-tech/${this.$parent.readmesSlug}/master/README.md`
      )
      this.md = response
    },
  },
}
</script>
