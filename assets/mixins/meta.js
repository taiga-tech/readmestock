export default {
  head() {
    return {
      title: this.meta.title ? this.meta.title + ' | ' : 'README Stock',

      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.meta.description
            ? this.meta.description
            : 'Nuxt + GitHubAPI v4(GraphQL) + Netlifyを使用したポートフォリオサイト',
        },
        { hid: 'og:type', property: 'og:type', content: this.meta.type },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.meta.title
            ? this.meta.title + ' | README Stock'
            : 'README Stock',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.meta.description
            ? this.meta.description
            : 'Nuxt + GitHubAPI v4(GraphQL) + Netlifyを使用したポートフォリオサイト',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://taiga-tech.tk/' + this.meta.url + '/',
        },
        { hid: 'og:image', property: 'og:image', content: this.meta.image },
      ],
    }
  },
}
