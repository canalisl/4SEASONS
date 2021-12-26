<template>
  <div>
    <div class="container">
      <div v-if="(qIdx < 3)" class="title pt-5 mx-auto">
        <!-- <p>{{this.qnaList[qIdx].q}}</p> -->
        <p>여러분의 선택은?</p>
      </div>
      <transition name="slide-fade" mod="out-in">
        <div v-if="(qIdx < 3)" class="animate__fadeOutRight row row-cols-1 row-cols-md-2 answerBox mx-auto pt-5">
          <div class="col" cols="3" lg="5">
            <b-card class="card animate__fadeOutRight" @click="quest1">
              <img :src="require(`@/assets/question/${qIdx}-A.png`)" class="card-img-top leftImage" alt="...">
            </b-card>
          </div>
          <div class="col lg-5" cols="3" lg="5" offset-lg="2">
            <b-card class="card">
              <img @click="quest2" :src="require(`@/assets/question/${qIdx}-B.png`)" class="card-img-top rightImage" alt="...">
            </b-card>
          </div>
        </div>        
      </transition>
      
      <div v-if="(qIdx >= 3)" class="title pt-5 mx-auto load">
        <div class="wrapper">
          <div class="box-wrap">
              <div class="box one"></div>
              <div class="box two"></div>
              <div class="box three"></div>
              <div class="box four"></div>
              <div class="box five"></div>
              <div class="box six"></div>
          </div>
        </div>
        <section>
          <div class="loading loading04">
            <span>당</span>
            <span>신</span>
            <span>의</span>
            <span>&nbsp;</span>
            <span>취</span>
            <span>향</span>
            <span>을</span>
            <span>&nbsp;</span>
            <span>분</span>
            <span>석</span>
            <span>중</span>
          </div>
        </section>
      </div>
      
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data: function() {
    return {
      qnaList : [
        {
          q: '1. 민트초코 vs 반민초단?',
          a: [
            { type: [0, 1, 2] },
            { type: [3, 4, 5] },
          ]
        },
        {
          q: '2. 추운 겨울 붕어빵은 팥? 슈크림?',
          a: [
            { type: [0, 1, 5] },
            { type: [2, 3, 4] },
          ]
        },
        {
          q: '3. 커피는 얼죽아? 뜨죽따',
          a: [
            { type: [0, 2, 4] },
            { type: [1, 3, 5] },
          ]
        },
      ],
      genreList: ['액션',	'애니메이션', '코미디',	'공포', '로맨스', '스릴러',	'판타지', '범죄', '전쟁', '가족'],
      result:[0,0,0,0,0,0,0,0,0,0],
      choice:[],
      qIdx:0,
      genre:'', // 장르 이름 보내줄거
      type:'', // 민초 반민초 여부
      type_genre:'', //민초반민초 여부에 따른 장르
      // genremovie: [],
      randommovies:[], //랜덤추출영화 담을것
      movies: [], //불러온 특정장르 영화 담을 그릇
      type_movie:[],
    }
  },
  methods:{
    quest1: function () {
      var target = this.qnaList[this.qIdx].a[0].type
      
      for(let i = 0; i < target.length; i++){
          // console.log(i)
        this.result[target[i]] += 1
      }
      this.qIdx++
      this.choice.push(1)
      if (this.qIdx==3){
        var idx = this.result.indexOf(Math.max(...this.result))
        this.genre=this.genreList[idx]
        this.getSeasonMovies() //장르 영화 리스트 불러오기
        this.seperatemint() //민초 여부 파악
        this.getTypeMovies()
        setTimeout(() => {
          this.quest()}, 5000)
        }
    },
    quest2: function () {
      var target = this.qnaList[this.qIdx].a[1].type
      
      for(let i = 0; i < target.length; i++){
          // console.log(i)
        this.result[target[i]] += 1
      }
      this.qIdx++
      this.choice.push(2)
      if (this.qIdx==3){
        var idx = this.result.indexOf(Math.max(...this.result))
        this.genre=this.genreList[idx]
        this.getSeasonMovies() //장르 영화 리스트 불러오기
        this.seperatemint() //민초 여부 파악
        this.getTypeMovies()
        setTimeout(() => {
          this.quest()}, 5000)
        }
    },
    quest: function () { //정답화면으로 보내기
      
      this.$router.push({name: 'answer', params: {genre: this.genre, type: this.type, type_genre: this.type_genre, movies:this.movies, type_movie:this.type_movie}})
    },

    setToken: function () { //axios 요청을 위한 토큰설정
    const token = localStorage.getItem('jwt')
    const config = {
      Authorization : `JWT ${token}`
    }
      return config
    },
    seperatemint: function() {
      if (this.choice[0] === 2){
        this.type = "반민초"
      }
      else{
        this.type = "민초"
      }
      this.seperatemintType()
    },
    seperatemintType: function () {
      if (this.choice[0] === 2){
        this.type_genre = "판타지" 
      }
      else{
        this.type_genre = "범죄"
      }

    },
    
    getSeasonMovies: function () {
      axios({
        method: 'get',
        url: `http://127.0.0.1:8000/movies/fall-recommend/${this.genre}/`,
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
    getTypeMovies: function () {
      axios({
        method: 'get',
        url: `http://127.0.0.1:8000/movies/fall-recommend/${this.type_genre}/`,
        headers: this.setToken(),
      })
        .then(res => {
          console.log(res.data)
          this.type_movie=res.data
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created: function () {
    // this.getMovies()
  },
}
</script>

<style scoped>
.title{
  text-align: center;
  font-family: 'Jua', sans-serif;
  font-size: 3vw;
}
.load{
  position: absolute;
  top: 30%;
  bottom: 0;
  left: 0;
  right: 0;
}
.answerBox{
  width: 80%;
  height: auto;
}
.card-body{
  display: flex;
  justify-content: center;
}
.card img{
  
  height: 25vw;
  max-width: 90%;
}
/* 애니메이션 진입 및 진출은 다른 지속 시간 및  */
/* 타이밍 기능을 사용할 수 있습니다. */
.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
img:hover {
    z-index:100;
    width:400px;  /* 사진크기 조절 */
    transform:scale(1.2, 1.4);  /* 가로2배 새로 1.5배 로 커짐 */
    transition: transform.5s;  /* 커지는 시간 */
}
/* loading window */
*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.wrapper {
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -100px;
  width: 200px;
  height: 200px;
  background-color: transparent;
  border: none;
  -webkit-user-select: none;
}

.wrapper .box-wrap {
  width: 70%;
  height: 70%;
  margin: calc((100% - 70%)/2) calc((100% - 70%)/2);
  position: relative;
  transform: rotate(-45deg);
}

.wrapper .box-wrap .box {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(135, 0, 0, 0.6);
  background: linear-gradient(to right, #141562, #486fbc, #eab5a1, #8dd6ff, #4973c9, #d07ca7, #f4915e, #f5919e, #b46f89, #141562, #486fbc);
  background-position: 0% 50%;
  background-size: 1000% 1000%;
  visibility: hidden;
}

.wrapper .box-wrap .box.one {
  animation: moveGradient 15s infinite, oneMove 3.5s infinite;
}

.wrapper .box-wrap .box.two {
  animation: moveGradient 15s infinite, twoMove 3.5s 0.15s infinite;
}

.wrapper .box-wrap .box.three {
  animation: moveGradient 15s infinite, threeMove 3.5s 0.3s infinite;
}

.wrapper .box-wrap .box.four {
  animation: moveGradient 15s infinite, fourMove 3.5s 0.575s infinite;
}

.wrapper .box-wrap .box.five {
  animation: moveGradient 15s infinite, fiveMove 3.5s 0.725s infinite;
}

.wrapper .box-wrap .box.six {
  animation: moveGradient 15s infinite, sixMove 3.5s 0.875s infinite;
}

@keyframes moveGradient {
  to {
    background-position: 100% 50%;
  }
}
@keyframes oneMove {
  0% {
    visibility: visible;
    clip-path: inset(0% 35% 70% round 5%);
    animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  }
  14.2857% {
    clip-path: inset(0% 35% 70% round 5%);
    animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  }
  28.5714% {
    clip-path: inset(35% round 5%);
    animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  }
  42.8571% {
    clip-path: inset(35% 70% 35% 0 round 5%);
    animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  }
  57.1428% {
    clip-path: inset(35% 70% 35% 0 round 5%);
    animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  }
  71.4285% {
    clip-path: inset(0% 70% 70% 0 round 5%);
    animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  }
  85.7142% {
    clip-path: inset(0% 70% 70% 0 round 5%);
    animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  }
  100% {
    clip-path: inset(0% 35% 70% round 5%);
    animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  }
}
@keyframes twoMove {
  0% {
    visibility: visible;
    clip-path: inset(0% 70% 70% 0 round 5%);
    animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  }
  14.2857% {
    clip-path: inset(0% 70% 70% 0 round 5%);
    animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  }
  28.5714% {
    clip-path: inset(0% 35% 70% round 5%);
    animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  }
  42.8571% {
    clip-path: inset(0% 35% 70% round 5%);
    animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  }
  57.1428% {
    clip-path: inset(35% round 5%);
    animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  }
  71.4285% {
    clip-path: inset(35% 70% 35% 0 round 5%);
    animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  }
  85.7142% {
    clip-path: inset(35% 70% 35% 0 round 5%);
    animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  }
  100% {
    clip-path: inset(0% 70% 70% 0 round 5%);
    animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  }
}
@keyframes threeMove {
  0% {
    visibility: visible;
    clip-path: inset(35% 70% 35% 0 round 5%);
    animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  }
  14.2857% {
    clip-path: inset(35% 70% 35% 0 round 5%);
    animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  }
  28.5714% {
    clip-path: inset(0% 70% 70% 0 round 5%);
    animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  }
  42.8571% {
    clip-path: inset(0% 70% 70% 0 round 5%);
    animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  }
  57.1428% {
    clip-path: inset(0% 35% 70% round 5%);
    animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  }
  71.4285% {
    clip-path: inset(0% 35% 70% round 5%);
    animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  }
  85.7142% {
    clip-path: inset(35% round 5%);
    animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  }
  100% {
    clip-path: inset(35% 70% 35% 0 round 5%);
    animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  }
}
@keyframes fourMove {
  0% {
    visibility: visible;
    clip-path: inset(35% 0% 35% 70% round 5%);
    animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  }
  14.2857% {
    clip-path: inset(35% 0% 35% 70% round 5%);
    animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  }
  28.5714% {
    clip-path: inset(35% round 5%);
    animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  }
  42.8571% {
    clip-path: inset(70% 35% 0% 35% round 5%);
    animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  }
  57.1428% {
    clip-path: inset(70% 35% 0% 35% round 5%);
    animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  }
  71.4285% {
    clip-path: inset(70% 0 0 70% round 5%);
    animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  }
  85.7142% {
    clip-path: inset(70% 0 0 70% round 5%);
    animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  }
  100% {
    clip-path: inset(35% 0% 35% 70% round 5%);
    animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  }
}
@keyframes fiveMove {
  0% {
    visibility: visible;
    clip-path: inset(70% 0 0 70% round 5%);
    animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  }
  14.2857% {
    clip-path: inset(70% 0 0 70% round 5%);
    animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  }
  28.5714% {
    clip-path: inset(35% 0% 35% 70% round 5%);
    animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  }
  42.8571% {
    clip-path: inset(35% 0% 35% 70% round 5%);
    animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  }
  57.1428% {
    clip-path: inset(35% round 5%);
    animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  }
  71.4285% {
    clip-path: inset(70% 35% 0% 35% round 5%);
    animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  }
  85.7142% {
    clip-path: inset(70% 35% 0% 35% round 5%);
    animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  }
  100% {
    clip-path: inset(70% 0 0 70% round 5%);
    animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  }
}
@keyframes sixMove {
  0% {
    visibility: visible;
    clip-path: inset(70% 35% 0% 35% round 5%);
    animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  }
  14.2857% {
    clip-path: inset(70% 35% 0% 35% round 5%);
    animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  }
  28.5714% {
    clip-path: inset(70% 0 0 70% round 5%);
    animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  }
  42.8571% {
    clip-path: inset(70% 0 0 70% round 5%);
    animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  }
  57.1428% {
    clip-path: inset(35% 0% 35% 70% round 5%);
    animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  }
  71.4285% {
    clip-path: inset(35% 0% 35% 70% round 5%);
    animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  }
  85.7142% {
    clip-path: inset(35% round 5%);
    animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  }
  100% {
    clip-path: inset(70% 35% 0% 35% round 5%);
    animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  }
}
/* loading message */
/* common */
.loading {
  font-size: 84px;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  text-align: center;
}
.loading span {
  display: inline-block;
  margin: 0 -0.05em;
}
/* code #4 */
.loading04 span {
  animation: loading04 0.7s infinite;
}
.loading04 span:nth-child(2) {
  animation-delay: 0.1s;
}
.loading04 span:nth-child(3) {
  animation-delay: 0.2s;
}
.loading04 span:nth-child(4) {
  animation-delay: 0.3s;
}
.loading04 span:nth-child(5) {
  animation-delay: 0.4s;
}
.loading04 span:nth-child(6) {
  animation-delay: 0.5s;
}
.loading04 span:nth-child(7) {
  animation-delay: 0.6s;
}

@keyframes loading04 {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(15px);
  }
}
</style>