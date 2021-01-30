<template>
  <article>
    <v-alert border="left" outlined type="warning" dismissible>
      現在準備中です。準備出来次第投稿していきます！
    </v-alert>
    <v-card
      elevation="0"
      class="markdown-body"
      max-width="980"
      color="#00000000"
    >
      <v-card-title :class="$vuetify.breakpoint.xs ? 'text-h5' : 'text-h4'">
        {{ blogs.title }}
      </v-card-title>
      <v-card-subtitle>
        <div align="end">
          <div>
            作成日:
            {{ $moment(blogs.createdAt).format('L') }}
          </div>
          <div>最終更新日: {{ $moment(blogs.updatedAt).fromNow() }}</div>
        </div>
        <v-chip-group column>
          <v-chip
            v-for="(tag, i) in blogs.tags"
            :key="i"
            outlined
            draggable
            small
            label
            >{{ tag }}</v-chip
          >
        </v-chip-group>
      </v-card-subtitle>
      <nuxt-content :document="blogs" />
    </v-card>

    <!-- <v-navigation-drawer
      fixed
      floating
      clipped
      right
      app
      :value="true"
      color="#00000000"
      class="py-4 pr-3"
    >
      <ul style="list-style: none">
        <li
          v-for="(to, i) in blogs.toc"
          :key="i"
          class="pl-3 text-body-2 py-1 font-weight-regular text--disabled"
          :class="to.depth == 2 ? 'pl-0' : 'pl-6'"
        >
          {{ to.text }}
          <v-divider />
        </li>
      </ul>
    </v-navigation-drawer>
    <pre>{{ blogs.body.children }}</pre> -->
  </article>
</template>

<script>
import Prism from '~/plugins/prism'

export default {
  async asyncData({ $content, params }) {
    const blogs = await $content('blogs', params.slug || 'index').fetch()
    return { blogs }
  },

  data() {
    return {
      tree: [],
    }
  },

  mounted() {
    Prism.highlightAll()
  },

  head() {
    return {
      title: this.blogs.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.blogs.discription,
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.markdown-body {
  pre[class*='language-'],
  code[class*='language-'] {
    text-shadow: none;
    // background-color: rgba(45, 45, 45, 1);
    code[class*='language-'] {
      background-color: rgba(45, 45, 45, 1);
    }
    span.token.operator {
      background: rgba(45, 45, 45, 0);
      background-color: rgba(45, 45, 45, 0);
    }
    .token.operator,
    .token.entity,
    .token.url,
    .language-css .token.string,
    .style .token.string {
      background: none;
    }
  }
}
</style>
