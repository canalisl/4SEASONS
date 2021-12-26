<template>
  <div>
    <b-container class="pt-5">
      <b-row>
        <b-col class="title pt-5 mx-auto" md="12" cols="6">
          <p>당신의 취향은? </p>
          <p> 당신이 좋아할 장르는?{{$store.state.game_genre[0]}}! </p>
        </b-col>
        <b-col class="mx-auto" cols="6" md="12" @click="ShowMovieDetail">
          <div class="cards">
            <figure class="card">
              <img :src="movieimgsrc">
            <figcaption><strong>{{$store.state.fall_movie.title}}</strong></figcaption>
            </figure>
          </div>
        </b-col>
      </b-row>

      <b-row>
        <b-col class="title pt-5 mx-auto" md ="12" cols="6">
          <p>당신은 {{$store.state.game_genre[1]}}단이시군요?</p>
          <p>당신에게 어울리는 영화는? {{$store.state.game_genre[2]}}</p>
        </b-col>
        <b-col class="mx-auto" cols="6" md="12" @click="ShowMovieDetail2">
            <div class="cards">
              <figure class="card">
                <img :src="movieimgsrc2">
              <figcaption><strong>{{$store.state.mint_movie.title}}</strong></figcaption>
              </figure>
            </div>
        </b-col>
      </b-row>
      
    </b-container>
  </div>
</template>

<script>

export default {
  props:{
    genre:String,
    type:String,
    type_genre:String,
    movies:Array,
    type_movie:Array,
  },
  data: function (){
    return {
      genremovie: [],
      movietype:['판타지', '공포'],
      randommovies:[],
      randomtypemovies:[],
      randomgenre:[],
    }
  },
  methods:{
    setMovies: function () {
      this.randommovies = this.movies[Math.floor(Math.random() * this.movies.length)] //랜덤으로 보내줄 영화 추출
      this.randomtypemovies = this.type_movie[Math.floor(Math.random() * this.type_movie.length)] //랜덤으로 민초반민초 영화 추출
      // console.log(this.movies.length)
    },
    ShowMovieDetail: function () {
      this.$router.push({ name: 'MovieDetail', params: { movie: this.$store.state.fall_movie }})
    },
    ShowMovieDetail2: function () {
      this.$router.push({ name: 'MovieDetail', params: { movie: this.$store.state.mint_movie }})
    },
  },
  created: function () {
    this.setMovies()
    this.randomgenre.push(this.genre, this.type, this.type_genre)
    this.$store.dispatch('updateFallMovie', this.randommovies)
    this.$store.dispatch('updateMintMovie', this.randomtypemovies)
    this.$store.dispatch('gameData', this.randomgenre)
    
    
  },
  computed: {
    movieimgsrc: function () {
      
      return 'https://www.themoviedb.org/t/p/w1280/' + this.$store.state.fall_movie.poster_path
    },
    movieimgsrc2: function () {
      
      return 'https://www.themoviedb.org/t/p/w1280/' + this.$store.state.mint_movie.poster_path
    },
  } 
}
</script>

<style scoped>
.container{
  position: relative;
  display: flex;
  justify-content: center;
}
.title{
  justify-content: center;
  text-align: center;
  font-family: dx시인과나;
  font-size: 2vw;
}
.view-button{
  width:10vw;
  height:3vw;
}
.movieimg {
  height: auto;
  width:10vw;
}

.abs,
.cards .card figcaption,
.cards .card:after,
.news .card figcaption,
.news .card:after,
.news .article figcaption {
  position: absolute;
}
.rel,
.cards .card,
.news .card,
.news .article {
  position: relative;
}
.fix {
  position: fixed;
}
.dfix {
  display: inline;
}
.dib {
  display: inline-block;
}
.db {
  display: block;
}
.dn {
  display: none;
}
.df,
.cards,
.news {
  display: flex;
  justify-content:center;
}
.dif {
  display: inline-flex;
}
.dg {
  display: grid;
}
.dig {
  display: inline-grid;
}
.vm {
  vertical-align: middle;
}
body {
  background: #24282f;
  font-family: 'Alegreya Sans';
}
.wrapper {
  padding: 15px;
}
.cards,
.news {
  flex-flow: row wrap;
}
.cards .card,
.news .card {
  margin: 20px;
  width: 180px;
  height: 270px;
  overflow: hidden;
  box-shadow: 0 5px 10px rgba(0,0,0,0.8);
  transform-origin: center top;
  transform-style: preserve-3d;
  transform: translateZ(0);
  transition: 0.3s;
}
.cards .card img,
.news .card img {
  width: 100%;
  min-height: 100%;
}
.cards .card figcaption,
.news .card figcaption {
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  padding-bottom: 10px;
  font-size: 20px;
  background: none;
  color: #fff;
  transform: translateY(100%);
  transition: 0.3s;
}
.cards .card:after,
.news .card:after {
  content: '';
  z-index: 10;
  width: 200%;
  height: 100%;
  top: -90%;
  left: -20px;
  opacity: 0.1;
  transform: rotate(45deg);
  background: linear-gradient(to top, transparent, #fff 15%, rgba(255,255,255,0.5));
  transition: 0.3s;
}
.cards .card:hover,
.news .card:hover,
.cards .card:focus,
.news .card:focus,
.cards .card:active,
.news .card:active {
  box-shadow: 0 8px 16px 3px rgba(0,0,0,0.6);
  transform: translateY(-3px) scale(1.05) rotateX(15deg);
}
.cards .card:hover figcaption,
.news .card:hover figcaption,
.cards .card:focus figcaption,
.news .card:focus figcaption,
.cards .card:active figcaption,
.news .card:active figcaption {
  transform: none;
}
.cards .card:hover:after,
.news .card:hover:after,
.cards .card:focus:after,
.news .card:focus:after,
.cards .card:active:after,
.news .card:active:after {
  transform: rotate(25deg);
  top: -40%;
  opacity: 0.15;
}
.news .article {
  overflow: hidden;
  width: 350px;
  height: 235px;
  margin: 20px;
}
.news .article img {
  width: 100%;
  min-height: 100%;
  transition: 0.2s;
}
.news .article figcaption {
  font-size: 14px;
  text-shadow: 0 1px 0 rgba(51,51,51,0.3);
  color: #fff;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 40px;
  box-shadow: 0 0 2px rgba(0,0,0,0.2);
  background: rgba(6,18,53,0.6);
  opacity: 0;
  transform: scale(1.15);
  transition: 0.2s;
}
.news .article figcaption h3 {
  color: #3792e3;
  font-size: 16px;
  margin-bottom: 0;
  font-weight: bold;
}
.news .article:hover img,
.news .article:focus img,
.news .article:active img {
  filter: blur(3px);
  transform: scale(0.97);
}
.news .article:hover figcaption,
.news .article:focus figcaption,
.news .article:active figcaption {
  opacity: 1;
  transform: none;
}
/* div p{

} */
</style>