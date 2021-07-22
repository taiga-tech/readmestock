export const state = () => ({
  index: null,
  show: null,
  prev: null,
  next: null,
})

export const getters = {
  index: (state) => (state.index ? state.index : null),
  show: (state) => (state.show ? state.show : null),
  prev: (state) => (state.prev ? state.prev : null),
  next: (state) => (state.next ? state.next : null),
}

export const mutations = {
  setIndex(state, data) {
    state.index = data
  },
  setShow(state, data) {
    state.show = data
  },
  setPrev(state, data) {
    state.prev = data
  },
  setNext(state, data) {
    state.next = data
  },
}

export const actions = {
  async index({ commit }, sort) {
    const blogs = await this.$content('blogs' || 'index')
      .sortBy(sort.field, sort.direction)
      .fetch()
      .catch((err) => {
        console.error(err)
      })

    commit('setIndex', blogs)
  },

  async show({ commit }, slug) {
    // console.log(await $content('blogs', slug || 'index').fetch())
    const blogs = await this.$content('blogs', slug || 'index')
      .fetch()
      .catch((err) => {
        console.error(err)
      })

    // ページ切り替えができん！！！
    const [prev, next] = await this.$content('blogs')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(slug)
      .fetch()
      .catch((err) => {
        console.error(err)
      })

    commit('setShow', blogs)
    commit('setPrev', prev)
    commit('setNext', next)
  },
}
