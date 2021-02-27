<template>
  <v-col cols="12">
    <v-card>
      <v-card-actions class="pa-0">
        <v-card-title>Product</v-card-title>
        <v-btn absolute right to="/readmes/">all</v-btn>
      </v-card-actions>
      <v-divider />

      <v-list>
        <template v-for="(product, i) in products">
          <v-list-item :key="i">
            <v-list-item-avatar># {{ i + 1 }}</v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{ product.name }} </v-list-item-title>
              <v-list-item-subtitle>{{ product.to }}</v-list-item-subtitle>
            </v-list-item-content>
            <template>
              <v-btn-toggle group dense>
                <v-btn small :to="'/readmes/' + product.name">
                  <v-icon :left="!$vuetify.breakpoint.xs">mdi-text</v-icon>
                  <span class="hidden-sm-and-down">README</span>
                </v-btn>
                <v-btn
                  small
                  :href="'https://github.com/taiga-tech/' + product.name"
                  target="_blank"
                  rel="noopener"
                >
                  <v-icon :left="!$vuetify.breakpoint.xs" color="purple"
                    >mdi-github</v-icon
                  >
                  <span class="hidden-sm-and-down">GitHub</span>
                </v-btn>
                <!-- <v-divider vertical class="mx-2" /> -->
                <v-btn small :href="product.to" target="_blank" rel="noopener">
                  <v-icon :left="!$vuetify.breakpoint.xs"
                    >mdi-open-in-new</v-icon
                  >
                  <span class="hidden-sm-and-down">site</span>
                </v-btn>
              </v-btn-toggle>
            </template>
          </v-list-item>
          <v-divider v-if="i < products.length - 1" :key="product.name" />
        </template>
      </v-list>
    </v-card>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { name: 'DivingApp', lang: 'Laravel', to: 'http://3.88.45.99/' },
        {
          name: 'ReservationApp',
          lang: 'Ruby on Rails',
          to: 'http://54.248.158.30/',
        },
        { name: 'ReadmeStock', lang: 'Nuxt', to: 'https://taiga-tech.tk/' },
        {
          name: 'SmartOrder',
          lang: 'Ruby on Rails',
          to: 'https://smart-order-app.herokuapp.com',
        },
        {
          name: 'Fleamarket_Sample_80b',
          lang: 'Ruby on Rails',
          to: 'http://18.224.192.120/',
        },
      ],
    }
  },
}
</script>
