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
        <v-divider />
        <app-prev-next :prev="prev" :next="next" />
      </v-card>
    </article>
    <app-toc :toc="blogs.toc" />
  </v-container>
</template>

<script>
export default {
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

    const [prev, next] = await $content('blogs')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(slug)
      .fetch()
      .catch((err) => {
        console.error(err)
      })

    // }

    return {
      blogs,
      prev,
      next,
    }
  },
}
</script>

<style lang="scss" src="~/assets/scss/custom.scss"></style>

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
      height: 14px;
      margin-top: 8px;
      position: relative;
      width: 14px;

      & .icon-link {
        background-image: url('~/assets/images/link.svg');
        background-size: 14px 14px;
        visibility: hidden;
        vertical-align: middle;
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
