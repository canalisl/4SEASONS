<template>
  <div class="container normalfont">
    
    <span v-if="id === '지금 이맘때 개봉한 영화'" style="">👩‍🦰 <span class="set">당신의 계절의 영화</span></span>
    <h6 v-else style="text-decoration:blink">⭐</h6>
    <h2 style="text-decoration:blink">{{ id }}</h2>
    <carousel class="mx-4 mb-8" 
    :paginationEnabled=false 
    :perPage=7
    :minSwipeDistance=3
    :navigationEnabled="true"
    :perPageCustom="[[768, 4], [1024, 5], [1240, 6], [1520, 7]]"
    >
      <slide v-for="movie in movies"
        :key="movie.id">
        <movie-list-item :movie="movie"></movie-list-item>
      </slide>
    </carousel>
    <br>
    <br>
  </div>
</template>


<script>
import MovieListItem from '@/components/MovieListItem'

export default {
  name: 'MovieList',
  components: {
    MovieListItem,
  },
  props:{
    movies : Array,
    id : String,
  },
}
</script>

<style>
.normalfont h2{
    font-family: DX시인과나;
    font-style: initial;
    color:black;
    font-weight: bold;
  }
  .set{
    font-family: DX시인과나;
    font-style: initial;
    color:black;
    font-weight: bold;
  }
</style>
