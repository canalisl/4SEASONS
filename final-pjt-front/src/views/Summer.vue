<template>
  <div id="bg">
    <div class="img-wrap">
      <img class="" src="../assets/summer_main.png" alt="">
      <p class="mainfont">여름 SUMMER</p>
    </div>
    <br>
    <br>
    <div class="gradationbg">
      <movie-list :movies="movies" :id="mid"></movie-list>
      <movie-list :movies="pmovies" :id="pmid"></movie-list>
      <movie-list :movies="rmovies" :id="rmid"></movie-list>
      <movie-list :movies="tmovies" :id="tmid"></movie-list>
    </div>
  </div>
</template>

<script>
import MovieList from '@/components/MovieList'
import axios from 'axios'


export default {
  name: 'Summer',
  components: {
    MovieList,
  },
  data: function () {
    return {
        movies: [],
        tmovies: [],
        pmovies: [],
        rmovies: [],
        mid: '지금 이맘때 개봉한 영화',
        tmid: '평점 높은 영화',
        pmid: '흥행대박! 인기영화',
        rmid: '최근 개봉한 영화',
      }
  },
  
  methods: {
    setToken: function () {
    const token = localStorage.getItem('jwt')
    const config = {
      Authorization : `JWT ${token}`
    }
      return config
    },
    getSeasonMovies: function () {
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/movies/summer-recommend/nowtime/',
        headers: this.setToken(),
      })
        .then(res => {
          console.log(res.data)
          this.movies=res.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    getTopMovies: function () {
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/movies/summer-recommend/top-rated/',
        headers: this.setToken(),
      })
        .then(res => {
          console.log(res.data)
          this.tmovies=res.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    getPopularMovies: function () {
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/movies/summer-recommend/popular/',
        headers: this.setToken(),
      })
        .then(res => {
          console.log(res.data)
          this.pmovies=res.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    getRecentMovies: function () {
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/movies/summer-recommend/recent/',
        headers: this.setToken(),
      })
        .then(res => {
          console.log(res.data)
          this.rmovies=res.data
        })
        .catch(err => {
          console.log(err)
        })
    },

  },
  created: function () {
    this.getSeasonMovies()
    this.getTopMovies()
    this.getPopularMovies()
    this.getRecentMovies()
  },
  mounted() {
    this.$nextTick(function () {
      // 전체 화면내용이 렌더링된 후에 아래의 코드가 실행됩니다.
    })
  },
  // computed: {
  //   ...mapState([
  //     'movies'
  //   ])
  // }
}
</script>

<style scoped>
.img-wrap {
  position: relative;
}
.img-wrap img {
  width: 100vw;
  max-width: 100%;
  /* height: 40vw; */
}
.mainfont{
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  font-family: DX시인과나;
  font-style: normal;
  font-weight: 500;
  font-size: 5vw;
  line-height: 144px;

  color:white;
}
.gradationbg{
  background: -webkit-linear-gradient(white, #8ab6d6);
}
</style>
