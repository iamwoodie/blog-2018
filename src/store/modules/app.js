const app = {
  state: {
      curRouteName: '',
      isFresh: true
  },
  mutations: {
      setRouteName: (state, routeName) => {
          state.curRouteName = routeName
      },
      setIsFresh: (state, isFresh) => {
          state.isFresh = true
      }
  },
  actions: {

  }
}

export default app
