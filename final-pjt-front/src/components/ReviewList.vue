<template>
  <div id="review-list" class="row bgground">
    <!-- <h1>Community</h1> -->
    <!-- <button @click="getReviews">getreviews</button> -->
    <div class="maintextfont community">
      <div class="container">
        <!-- <div class="card"> -->
        <div class="wrapper">
          <div class="typing-demo normalfont" style="text-color:white">
            당신을 위한, 커뮤니티
          </div>
      </div>
    </div>

        
      <!-- </div> -->
      <div class="row offset-8">
        <router-link :to="{ name: 'ReviewForm' }">
          <!-- <button> 새로운 글 작성</button> -->
          <div >
            <div class="button_base b04_3d_tick">
              <div>New Review</div>
              <div>Create</div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <!-- {{ reviews }} -->
    <b-card-group deck class="row col-12 row-cols-sm-2 row-cols-md-5 g-4">
      <review-list-item
        v-for="review in reviews"
        :key="review.id"
        :review="review"
      >
     </review-list-item>
    </b-card-group>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ReviewListItem from '@/components/ReviewListItem'

// import { mapState } from 'vuex'
// import axios from 'axios'

export default {
  name: 'ReviewList',
  components : {
    ReviewListItem,
  },
  data() {
    return{
      id: this.$route.params.id,
      
    }
  },
  methods: {
    ...mapActions([
      'getReviews',
      'getReview',
    ]),
  },
  computed: {
    ...mapState([
      'reviews',
      'review',
    ])
  },
  created: function () {
    if (this.$store.getters.isLogin) {
      this.getReviews()
    } else {
      this.$router.push({ name: 'Login' })
    }
  }
  }
</script>

<style scoped>

  body {
  height: 80vh;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  
  filter: drop-shadow(0 0 10px white);
}
  .normalfont {
    font-family: DX시인과나;
    font-style: initial;
    color:black;
    font-weight: bold;
  }
  .bgground{
    background: radial-gradient(ellipse at bottom, #1B1717 0%, #1B1717 100%);
  }
  .bggroundnone{
  background: none;  
  }
  .btncolor{
    background: #630000
  }
  .maintextfont {
    display: flex;
    font-family: DX시인과나;
    font-style: initial;
    color:black;
    justify-content: center;
  }
  
  .community {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center ;
    height: 300px;
    border: none;
    color:white;
    background: radial-gradient(ellipse at bottom, #1B1717 0%, #1B1717 100%);
  }
  /* typing letters */
  .wrapper {
  height: 20vh;
  /*This part is important for centering*/
  display: flex;
  align-items: center;
  justify-content: center;
}

.typing-demo {
  width: 22ch;
  animation: typing 2s steps(22), blink .5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: DX시인과나;
  color:#EEEBDD;
  font-size: 2em;
}

@keyframes typing {
  from {
    width: 0
  }
}
    
@keyframes blink {
  50% {
    border-color: transparent
  }
}
  /* b04 */
  .b04_3d_tick {
    perspective: 500px;
    -webkit-perspective: 500px;
    -moz-perspective: 500px;
    perspective-origin: center top;
    -webkit-perspective-origin: center top;
    -moz-perspective-origin: center top;
  }

  .b04_3d_tick div {
      position: absolute;
      text-align: center;
      width: 100%;
      height: 50px;
      box-sizing: border-box;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      padding: 10px;
      border: #000000 solid 1px;
  }

  .b04_3d_tick div:nth-child(1) {
      color: #EEEBDD;
      background-color: #630000 ;
      transition: all 0.2s ease;
      -webkit-transition: all 0.2s ease;
      -moz-transition: all 0.2s ease;
  }

  .b04_3d_tick div:nth-child(2) {
      color: #630000;
      background-color: #EEEBDD;
      transform: rotateX(90deg);
      -webkit-transform: rotateX(90deg);
      -moz-transform: rotateX(90deg);
      transition: all 0.2s ease;
      -webkit-transition: all 0.2s ease;
      -moz-transition: all 0.2s ease;
      transform-origin: left top;
      -webkit-transform-origin: left top;
      -moz-transform-origin: left top;
    }

    .b04_3d_tick:hover div:nth-child(1) {
        transition: all 0.2s ease;
        -webkit-transition: all 0.2s ease;
        -moz-transition: all 0.2s ease;
        background-color: #EEEBDD;
    }

    .b04_3d_tick:hover div:nth-child(2) {
        transition: all 0.2s ease;
        -webkit-transition: all 0.2s ease;
        -moz-transition: all 0.2s ease;
        transform: rotateX(0deg);
        -webkit-transform: rotateX(0deg);
        -moz-transform: rotateX(0deg);
    }

  /* base */
    .preserve-3d {
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
}

body {
    padding: 0;
    margin: 0;
    border: 0;
    overflow-x: none;
    background-color: #ffffff;
    font-family: Roboto Condensed, sans-serif;
    font-size: 12px;
    font-smooth: always;
    -webkit-font-smoothing: antialiased;
}

.back {
    width: 33%;
    height: 200px;
    float: left;
    background-color: #eeeeee;
    border: 10px;
    border-color: #ffffff;
    border-style: solid;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    counter-increment: bc;
    padding: 0px 5px 5px 5px;
}

.back:before {
    content: counter(bc) "_";
    position: absolute;
    padding: 10px;
}

@media screen and (max-width: 1260px) {
    .back {
        width: 50%;
    }
}

@media screen and (max-width: 840px) {
    .back {
        width: 100%;
    }
}

.button_base {
    margin: 0;
    border: 0;
    font-size: 18px;
    position: relative;
    top: 50%;
    left: 50%;
    margin-top: -25px;
    margin-left: -100px;
    width: 200px;
    height: 50px;
    text-align: center;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-user-select: none;
    cursor: default;
}

.button_base:hover {
    cursor: pointer;
}

</style>


  // props: ['reviews',],
  // methods : {
  //   setToken: function () {
  //     const token = localStorage.getItem('jwt')
  //     const config = {
  //       Authorization : `JWT ${token}`
  //     }
  //     return config
  //   },
  //   getReviews: function () {
  //     const headers = this.setToken()

  //     // const reviewItem = {
  //     //   title: this.reviewTitle,
  //     //   token: this.setToken(),
  //     // }
  //     // // this.$store.commit('CREATE_REVIEW', reviewItem)
  //     // this.$store.dispatch('createReview', reviewItem)
  //     // this.reviewTitle = null
  //     axios({
  //       url: 'http://127.0.0.1:8000/community/reviews/',
  //       method: 'get',
  //       headers
  //     })
  //     .then((res) => {
  //       // console.log(res)
  //       console.log(res.data)
  //       this.$store.reviews = res.data
  //       console.log(this.$store.reviews.title)
  //     })
  //     .catch((err) => { 
  //       console.log(err)
  //     })
  //   }
  // },
  // computed: {
  //   reviews: function () {
  //     return this.$store.state.reviews
  //   }
  //   ...mapState({
  //   'datas': 'reviews',
  //   })