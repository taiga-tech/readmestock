<template>
  <v-col cols="12">
    <v-card>
      <v-card-actions class="pa-0">
        <v-card-title>Product</v-card-title>
        <v-btn absolute right to="/readmes/">all</v-btn>
      </v-card-actions>
      <v-divider />

      <v-list>
        <v-alert border="left" text type="warning" class="mx-5">
          現在AWSリソース整理中のため、アクセスできないサービスがあります。
        </v-alert>
        <template v-for="(product, i) in products">
          <v-list-item :key="i">
            <v-list-item-avatar>
              <v-icon large :color="product.color">{{ product.icon }}</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>
                {{ product.name }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ product.to }}
              </v-list-item-subtitle>
            </v-list-item-content>
            <template>
              <v-btn-toggle group dense>
                <v-btn small :to="'/readmes/' + product.name + '/'">
                  <v-icon :left="!$vuetify.breakpoint.xs">
                    {{ mdiFileDocumentOutline }}
                  </v-icon>
                  <span class="hidden-sm-and-down">README</span>
                </v-btn>
                <v-btn
                  small
                  :href="'https://github.com/taiga-tech/' + product.name + '/'"
                  target="_blank"
                  rel="noopener"
                >
                  <v-icon :left="!$vuetify.breakpoint.xs" color="purple">{{
                    mdiGithub
                  }}</v-icon>
                  <span class="hidden-sm-and-down">GitHub</span>
                </v-btn>
                <v-btn
                  small
                  :disabled="!product.href"
                  :href="product.href"
                  target="_blank"
                  rel="noopener"
                >
                  <v-icon :left="!$vuetify.breakpoint.xs">
                    {{ mdiOpenInNew }}
                  </v-icon>
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
import { mdiGithub, mdiFileDocumentOutline, mdiOpenInNew } from '@mdi/js'
import { products } from '~/assets/constants/products.js'

export default {
  data() {
    return { products, mdiGithub, mdiFileDocumentOutline, mdiOpenInNew }
  },
}
</script>
