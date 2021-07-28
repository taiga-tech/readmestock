import getRelease from '~/apollo/queries/getRelease.graphql'

export const state = () => ({
  index: null,
})

export const getters = {
  index: (state) => (state.index ? state.index : null),
}

export const mutations = {
  setIndex(state, data) {
    state.index = data
  },
}

export const actions = {
  async index({ commit }) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: getRelease,
    })

    commit('setIndex', response.data.viewer)
  },
}
