import getUser from '~/apollo/queries/global/getUser.graphql'
import globalRepositories from '~/apollo/queries/global/getRepositories.graphql'
import getPublicTotalCount from '~/apollo/queries/global/getPublicTotalCount.graphql'

export const actions = {
  async nuxtServerInit({ commit }, { app, $content }) {
    app.$axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

    const repoResponse = await this.app.apolloProvider.defaultClient.query({
      query: globalRepositories,
    })
    commit('gh-readme/setGlIndex', repoResponse.data.viewer)

    const userResponse = await this.app.apolloProvider.defaultClient.query({
      query: getUser,
      variables: { login: 'taiga-tech' },
    })
    commit('gh-readme/setUser', userResponse.data.user)

    const countResponse = await this.app.apolloProvider.defaultClient.query({
      query: getPublicTotalCount,
    })

    commit('gh-readme/setCount', countResponse.data.viewer)

    const blogs = await $content('blogs' || 'index')
      .sortBy('createdAt', 'desc')
      .fetch()

    commit('blogs/setIndex', blogs)
  },
}
