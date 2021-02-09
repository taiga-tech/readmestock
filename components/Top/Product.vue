<template>
  <v-col cols="12">
    <v-card>
      <v-card-actions class="pa-0">
        <v-card-title>product</v-card-title>
        <v-btn absolute right to="/readmes/">all</v-btn>
      </v-card-actions>
      <v-divider />
      <v-list>
        <v-list-item v-for="(product, i) in products" :key="i"
          ><v-list-item-avatar>#{{ i + 1 }}</v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ product.name }} </v-list-item-title>
            <v-list-item-subtitle>{{ product.to }}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-icon>
            <v-btn :href="product.to" target="_blank" rel="noopener"
              >README</v-btn
            >
            <v-btn :href="product.to" target="_blank" rel="noopener"
              >開く</v-btn
            >
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-card>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          name: 'ReservationApp',
          lang: 'Ruby on Rails',
          to: 'http://54.248.158.30/',
        },
        {
          name: 'FleamarketSample80b',
          lang: 'Ruby on Rails',
          to: 'http://18.224.192.120/',
        },
        {
          name: 'SmartOrder',
          lang: 'Ruby on Rails',
          to: 'https://smart-order-app.herokuapp.com',
        },
        { name: 'DivingApp', lang: 'Laravel', to: 'http://3.88.45.99/' },
        { name: 'Readme Stock', lang: 'Nuxt', to: 'https://taiga-tech.tk/' },
      ],
    }
  },
}
</script>
