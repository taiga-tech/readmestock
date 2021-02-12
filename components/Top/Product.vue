<template>
  <v-col cols="12">
    <v-card>
      <v-card-actions class="pa-0">
        <v-card-title>Product</v-card-title>
        <v-btn absolute right to="/readmes/">all</v-btn>
      </v-card-actions>
      <v-divider />
      <!-- <v-expansion-panels accordion>
        <v-expansion-panel v-for="(product, i) in products" :key="i">
          <v-expansion-panel-header>
            {{ product.name }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels> -->

      <v-list>
        <template v-for="(product, i) in products">
          <v-list-item :key="i">
            <v-list-item-avatar># {{ i + 1 }}</v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{ product.name }} </v-list-item-title>
              <v-list-item-subtitle>{{ product.to }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-icon>
              <v-btn
                small
                :href="'https://github.com/taiga-tech/' + product.name"
                target="_blank"
                rel="noopener"
              >
                <v-icon left color="purple">mdi-github</v-icon>
                README
              </v-btn>
              <v-divider vertical class="mx-2" />
              <v-btn small :href="product.to" target="_blank" rel="noopener">
                <v-icon left>mdi-open-in-new</v-icon>
                site
              </v-btn>
            </v-list-item-icon>
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
        // {
        //   name: 'SmartOrder',
        //   lang: 'Ruby on Rails',
        //   to: 'https://smart-order-app.herokuapp.com',
        // },
        { name: 'Readme Stock', lang: 'Nuxt', to: 'https://taiga-tech.tk/' },
        {
          name: 'FleamarketSample80b',
          lang: 'Ruby on Rails',
          to: 'http://18.224.192.120/',
        },
      ],
    }
  },
}
</script>
