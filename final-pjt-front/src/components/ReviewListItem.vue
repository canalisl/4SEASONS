<template>
  <div>
    <b-card class="normalfont cardbg" style="height-100"
      header-class="card_header" 
      :header="review.movie_title"
      :header-tag="review.user.username"
      :footer="review.created_at" 
      footer-tag="footer"
      :title="review.title"
    >
    <!-- <b-card class="col" :title="review.title" :img-src="movieimgsrc" img-alt="Image" img-top> -->
      <b-card-text>
        <div>
          <p class="heartfont">❤<span class="normalfont">  작성자: {{ review.user.username }} </span>❤</p>
          <span class="normalfont demo-1"> {{ review.content }}</span>
          <span class="normalfont demo-1">{{ review.movie }}</span>
          <!-- <p>임시 review 데이터: {{ review }}</p> -->
          <router-link :to="{ name: 'ReviewDetail' , params: {review_id: this.review.id}}">
            <!-- <router-link :to="'/winter/review-detail/'+ review.id "> -->
            <p></p>
            <b-button class="normalfont btncl" @click="getReview(review)">Detail</b-button>
          </router-link>
            <!-- testing for modal -->
            <!-- <button @click="handleClickButton">Toggle Modal</button>
            <app-my-modal
              title="This is modal"
              :visible.sync="visible">
              <div>
                This is modal body
              </div>
            </app-my-modal> -->
        </div>
      </b-card-text>
      </b-card>
    <!-- <hr> -->
    <!-- <review-detail
      v-for="review in review"
      :key="review.id"
      :review="review"
      >
    </review-detail> -->
    <!-- <button @click="deleteReview">detail</button> -->


  </div>

</template>

<script>
import { mapActions } from 'vuex'
// import myModal from '@/components/myModal'
// import ReviewDetail from '@/components/ReviewDetail'

export default {
  name: 'ReviewListItem',
  components: {
      // ReviewDetail,
      // appMyModal: myModal
  },

  props: {
    review: Object
  },
  methods: {
    ...mapActions([
      'getReview',
    ]),
    deleteReview: function () {
      this.$store.dispatch('deleteReview', this.review)
    },

    // handleClickButton(){
    //   this.visible = !this.visible
    // } 
  },
}
</script>

<style scoped>
.card-header {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.card-title {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.demo-1 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
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
  font-size: 1vw;
  line-height: 144px;

  color:black;
}
  .normalfont {
    font-family: DX시인과나;
    font-style: initial;
    color:black;
    font-weight: bold;
  }
    .cardbg{
    background-color: #EEEBDD;
    color: #1B1717 0%, #1B1717 100%
  }
  .heartfont {
    font-weight:normal;
    color: #be0000;
  }
  .md-field,
  .md-focused,
  .md-input,
  .md-textarea,
  label {
    background: #365fd9 !important;
    border-style: none;
    border-radius: 5px;
    margin: 0 0 5px 0 !important;
    color: #fff !important;
    -webkit-text-fill-color: #ddd !important;
  }
  .btncl {
    background-color: #630000;
    color: white;
  }
  .addBtn {
    vertical-align: middle;
    margin-top: 12px;
    font-size: 24px;
    cursor: pointer;
  }

  .closeModalBtn {
    color: #42b983;
  }
</style>