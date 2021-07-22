import getRepositories from '~/apollo/queries/getRepositories.graphql'
import getReadme from '~/apollo/queries/getReadme'

export const state = () => ({
  index: null,
  readme: null,
  count: null,
  user: null,
})

export const getters = {
  glIndex: (state) => (state.glIndex ? state.glIndex : null),
  index: (state) => (state.index ? state.index : null),
  readme: (state) => (state.readme ? state.readme : null),
  count: (state) => (state.count ? state.count : null),
  user: (state) => (state.user ? state.user : null),
}

export const mutations = {
  setGlIndex(state, data) {
    state.glIndex = data
  },

  setIndex(state, data) {
    state.index = data
  },

  setReadme(state, data) {
    state.readme = data
  },

  setCount(state, data) {
    state.count = data
  },

  setUser(state, data) {
    state.user = data
  },
}

export const actions = {
  async index({ commit }, sort) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: getRepositories,
      variables: { orderBy: sort },
    })

    commit('setIndex', response.data.viewer)
  },

  async readme({ commit }, slug) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: getReadme,
      variables: { name: slug },
    })

    commit('setReadme', response.data.viewer)
  },
}
