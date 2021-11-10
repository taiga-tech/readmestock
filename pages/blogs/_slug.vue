<template>
  <v-container>
    <article>
      <app-warning style="max-width: 940px; margin: 0 auto" />
      <v-card
        elevation="0"
        class="markdown-body"
        max-width="980"
        color="#00000000"
      >
        <v-subheader>
          {{ $moment(blogs.createdAt).format('L') }} - 最終更新
          {{ $moment(blogs.updatedAt).fromNow() }}
        </v-subheader>
        <v-card-title
          class="pt-0"
          :class="$vuetify.breakpoint.xs ? 'text-h5' : 'text-h4'"
        >
          {{ blogs.title }}
        </v-card-title>
        <v-card-subtitle>
          <v-chip-group column>
            <v-chip
              v-for="(tag, i) in blogs.tags"
              :key="i"
              outlined
              draggable
              small
              v-text="tag"
            />
          </v-chip-group>
        </v-card-subtitle>
        <client-only>
          <markdown-content v-if="blogs" :result="blogs" params="blogs" />
        </client-only>
        <!-- <v-divider /> -->
        <!-- <app-prev-next :prev="prev" :next="next" /> -->
      </v-card>
    </article>
    <app-toc :toc="blogs.toc" />
  </v-container>
</template>

<script>
;(async () => await require('~/assets/scss/custom.scss'))()

export default {
  components: {
    AppWarning: () => import('~/components/App/Warning.vue'),
    MarkdownContent: () => import('~/components/Markdown/Content.vue'),
    AppToc: () => import('~/components/App/Toc.vue'),
  },
  async asyncData({ $content, store, params, payload }) {
    // if (payload) {
    //   return { blogs: payload }
    // } else {
    const slug = await params.slug

    const blogs = await $content('blogs', slug || 'index')
      .fetch()
      .catch((err) => {
        console.error(err)
      })

    // const [prev, next] = await $content('blogs')
    //   .only(['title', 'slug'])
    //   .sortBy('createdAt', 'asc')
    //   .surround(slug)
    //   .fetch()
    //   .catch((err) => {
    //     console.error(err)
    //   })
    // }

    return {
      blogs,
      // prev,
      // next,
    }
  },
}
</script>

<style lang="scss">
.nuxt-content {
  & h2,
  & h3,
  & h4,
  & h5,
  & h6 {
    & a {
      margin: 0 -1.5rem 0 -1.5rem;
      padding: 0 1.5rem 1.7rem 0;
    }

    color: #f1f1f1;

    & a,
    .icon-link {
      float: left;
      display: inline-block;
      height: 16px;
      margin-top: 4px;
      position: relative;
      width: 16px;

      & .icon-link {
        background-size: 16px 16px;
        visibility: hidden;
        content: '';
        display: inline-block;
        margin-right: 20px;
        vertical-align: middle;
        background-color: #f1f1f1;
        -webkit-mask-image: url('~/assets/images/link.svg');
        mask-image: url('~/assets/images/link.svg');
      }
    }

    &:hover {
      & .icon-link {
        visibility: visible;
      }
    }
  }
}
</style>
