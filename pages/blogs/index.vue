<template>
  <v-container>
    <v-row justify="start" dense>
      <v-col
        v-for="b in blogs"
        :key="b.slug"
        cols="12"
        sm="6"
        md="4"
        lg="4"
        xl="3"
      >
        <nuxt-link :to="'/blogs/' + b.slug">
          <v-card elevation="5" outlined min-height="200" class="pa-4">
            <div class="text-h5">{{ b.title }}</div>
            <p>{{ b.discription }}</p>
          </v-card>
        </nuxt-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const query = await $content('blogs' || 'index').limit(10)
    const blogs = await query.fetch()
    return { blogs }
  },
}
</script>
