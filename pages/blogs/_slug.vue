<template>
  <article>
    <warning-alert style="max-width: 940px; margin: 0 auto" />
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

      <markdown-content v-if="blogs" :result="blogs" params="blogs" />
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
export default {
  components: {
    WarningAlert: () => import('~/components/WarningAlert'),
    MarkdownContent: () => import('~/components/Markdown/MarkdownContent'),
  },

  async asyncData({ $content, params, payload }) {
    // if (payload) {
    //   return { blogs: payload }
    // } else {
    return { blogs: await $content('blogs', params.slug || 'index').fetch() }
    // }
  },

  data() {
    return {
      tree: [],
      blogs: null,
    }
  },
}
</script>

<style lang="scss" src="~/assets/scss/custom.scss"></style>
