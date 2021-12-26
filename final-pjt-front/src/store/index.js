import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authToken: localStorage.getItem('jwt'),
    movies: [],
    reviews: [],
    review: [],
    comments: [],
    commentItem: [],
    comment: [],
    commentcheck: '',
    liked: [0],
    fall_movie: [],
    mint_movie: [],
    game_genre: [],
  },
  getters: {
    isLogin: function (state) {
      return state.authToken ? true : false
    },
    config: function (state) {
      return {
        Authorization: `JWT ${state.authToken}`
      }
    },
    // isCommentUpdate: function (state) {
    //   return state.commentcheck ? true: false
    // }
  },
  mutations: {
    SET_TOKEN: function (state, token) {
      state.authToken = token
      localStorage.setItem('jwt', token)
    },
    REMOVE_TOKEN: function (state) {
      localStorage.removeItem('jwt')
      state.authToken = ''
    },
    SET_REVIEWS: function (state, reviews) {
      state.reviews = reviews
      state.comments = reviews.comments
    },
    SET_REVIEW: function (state, review) {
      state.review = review
      state.comments = review.comments
    },
    SET_COMMENT: function ( ){},
    UPDATE_COMMENT: function (state, commentItem) {
      state.comments = state.comments.map((comment) => {
        if (comment === commentItem) {
          return { ...comment, content: commentItem.content }
        }
        return comment
      })
    },
    LOAD_MOVIE_LIST: function (state, results) {
      state.movies = results
      console.log(this.movies)
    },
    CREATE_REVIEW: function (state, reviewItem) {
      state.reviews.push(reviewItem)
    },
    DELETE_REVIEW: function (state, reviewItem) {
      const idx = state.reviews.indexOf(reviewItem)
      state.reviews.splice(idx, 1)
    },
    UPDATE_FALL_MOVIE: function (state, results) {
      state.fall_movie = results
    },
    UPDATE_MINT_MOVIE: function (state, results) {
      state.mint_movie = results
    },
    GAME_DATA: function (state, results) {
      state.game_genre = results
    }
  },
  actions: {
    login: function ({ commit }, credentials ) {
      axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/accounts/api-token-auth/',
        data: credentials,
      })
      .then((res) => {
        commit('SET_TOKEN', res.data.token)
        router.push({ name: 'HomeIndex' })
      })
      .catch(err => {
        console.log(err)
      })
    },
    logout: function ({ commit }) {
      commit('REMOVE_TOKEN')
      router.push({ name: 'Login' })
    },
    signup: function (context, credentials) {
      axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/accounts/signup/',
        data: credentials,
      })
        .then(() => {
          router.push({ name: 'Login' })
        })
        .catch(err => {
          console.log(err)
        })
    },
    getReviews: function ({ commit, getters }) {
      const headers = getters.config
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/community/reviews/',
        headers,
      })
      .then((res) => {
        console.log(res)
        commit('SET_REVIEWS', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
    },
    getReview: function ({ commit , getters, state }, data) {
      const headers = getters.config
      const review_id = data.id
      axios({
        method: 'get',
        url: `http://127.0.0.1:8000/community/reviews/${review_id}/`,
        headers,
      })
      .then((res) => {
        console.log('its')
        console.log(res)
        commit('SET_REVIEW', res.data)
        console.log(state.review)
      })
      .catch((err) => {
        console.log(err)
      })
    },
    LoadMovieList: function ({commit}) {
      axios ({
        method: 'get',
        url: 'http://127.0.0.1:8000/movies/summer-recommend/popular/',
        headers: this.setToken(),
      })
      .then((res) => {
        console.log(res)
        commit('LOAD_MOVIE_LIST', res.data.results)
      })
    },
    createReview: function ({ getters, state }, reviewItems) {
      const headers = getters.config
      // const reviewItem = {
      //   title, content
      // }
      const reviewItem = reviewItems
      console.log(reviewItem)
      if (reviewItem.title) {
        axios({
          method: 'post',
          url: 'http://127.0.0.1:8000/community/reviews/',
          data: reviewItem,
          headers,
        })
        .then(() => {
          // context.commit('CREATE_REVIEW', reviewItem)
          console.log(reviewItem)
          state.review = reviewItem
          router.push({ name : 'Winter'})
        })
        .catch((err) => {
          console.log(err)
        })
      }
    },
    deleteReview: function ({ getters, dispatch, state}) {
      const headers = getters.config
      const review_id = state.review.id
      axios({
        method: 'delete',
        url: `http://127.0.0.1:8000/community/reviews/${review_id}`,
        headers,
      })
      .then(() => {
        dispatch('getReviews')
        router.push({ name: 'Winter' })
      })
      .catch((err)=> {
        console.log(err)
      })
    },
    updateReview: function ({ getters, state }, context) {
      const headers = getters.config
      const reviewItem = context
      const review_id = state.review.id

      axios({
        method: 'put',
        url: `http://127.0.0.1:8000/community/reviews/${review_id}/`,
        data: reviewItem,
        headers,
      })
      .then(() => {
        // dispatch('getReview')
        // router.push({ name: 'Winter'})
        router.push({ path: `/winter/review-detail/${review_id}`})
      })
    },
    createComment: function ({ getters, state }, content ) {
      const headers = getters.config
      const commentItem = {
        content,
      }
      const review_id = state.review.id
      if (commentItem.content) {
        console.log(commentItem)
        axios({
          method: 'post',
          url: `http://127.0.0.1:8000/community/review/${review_id}/comment/`,
          data: commentItem,
          headers,
        })
        .then((res) => {
          // console.log(res.data)
          state.comment = res.data
          // console.log('state.comment testing')
          console.log(state.comment)
          // console.log('state.comment testing')
          state.comments.push( res.data )
          router.push({ name: 'ReviewDetail' })
        })
        .catch((err) => {
          console.log(err)
        })
      }
    },
    deleteComment: function ({ getters, dispatch, state }, comment) {
      const headers = getters.config
      state.comment = comment
      console.log('its')
      console.log(state.comment)
      const comment_id = state.comment.id
      axios({
        method: 'delete',
        url: `http://127.0.0.1:8000/community/comments/${comment_id}/`,
        headers,
      })
      .then(() => {
        dispatch('getReview', state.review)
        router.push({ name: 'ReviewDetail' })
      })
      .catch((err) => {
        console.log(err)
      })
    },
    updateComment: function ({ getters, dispatch, state }, comment ) {
      const headers = getters.config
      // state.comment = comment
      console.log(state.comment)
      console.log(state.comment)
      const comment_id = state.comment.id
      // const review_id = comment.review.id
      axios({
        method: 'put',
        url: `http://127.0.0.1:8000/community/comments/${comment_id}/`,
        data: comment,
        headers,
      })
      .then((res) => { 
        // commit('UPDATE_COMMENT', res.data)
        dispatch('getReview', state.review)
        console.log(res)
        router.push({ name: 'ReviewDetail' })
      })
      .catch((err) => {
        console.log(err)
      })
    },
    // getComment: function ({state}) {
    //   state.comment = comment
    // },
    updateCommentCheck: function ({ state }) {
      if (state.commentcheck) {
        state.commentcheck = ''
      } else {
      state.commentcheck = 'true'
      console.log(state.commentcheck)
      }
    },
    updateFallMovie: function ({commit}, movieitem){
      commit('UPDATE_FALL_MOVIE', movieitem)
    },
    updateMintMovie: function ({commit}, movieitem){
      commit('UPDATE_MINT_MOVIE', movieitem)
    },
    gameData: function ({commit}, genreitem){
      commit('GAME_DATA', genreitem)
    },
  },
  
  modules: {
  }
})
