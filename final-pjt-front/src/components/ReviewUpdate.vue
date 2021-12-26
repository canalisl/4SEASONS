<template>
  <div class="normalfont">
    <br>
    <br>
    <br>
    <div class="card row offset-2 col-6 " style="border:none">
    <div class="specialposition">
        <button
        @click="updateReview(review)"
      >Update</button>
    </div>
    <div class="row offset-4">
      <div >
      <div class="box">
        <div class="container__item">
          <form>
            <button type="button" class="btn btn--primary btn--inside uppercase">Review Title</button>
            <input type="text" v-model.trim="review.title" class="form__field" />
          </form>
          </div>
      </div>
      <div class="boc">
        <div class="container__item">
          <form>
            <button type="button" class="btn btn--primary btn--inside uppercase">Movie Name</button>
            <input type="text" v-model.trim="review.movie_title" class="form__field"/>
          </form>
        </div>
        </div>
        <div class="box">
          <div class="container__item">
            <form >
              <button type="button" class="btn btn--primary btn--inside uppercase spbtn">CONTENT</button>
              <textarea v-model.trim="review.content" class="textfield" cols="30" rows="10"></textarea>
            </form>
          </div>
        </div>
        </div>
      </div>
    </div>
        
  </div>
  <!-- <div>
    <h1>Review 수정 2번 적음</h1>
    <h1>Review 수정</h1>
    <div>
      <div>리뷰 제목 수정: <input 
        type="text"
        v-model.trim="review.title"
      ></div>
      <div>
        <p></p>
      <p>영화 제목: <input type="text" v-model.trim="review.movie_title"></p>
      영화 내용: <textarea v-model.trim="review.content" cols="30" rows="10">
      </textarea>
      <p>영화 평점: <input type="float" v-model.trim="review.rank"></p>
      </div>
      <button
        @click="updateReview(review)"
      >
        수정
      </button>
    </div>
  </div> -->

</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'ReviewUpdate',
  methods:{
    ...mapActions([
      'updateReview'
    ])
  },
  computed: {
    ...mapState([
      'review',
    ])
  }

}
</script>

<style scoped>
   :root {
  background: #f5f6fa;
  color: #9c9c9c;
  /* font: 1rem "PT Sans", sans-serif; */
}

/* html,
body,
.container {
  height: 100%;
} */
.normalfont {
  font-style: DX시인과나;
}
a {
  color: inherit;
}
a:hover {
  color: #7f8ff4;
}
.card {
  display: flex;
  justify-content: center;
  align-items:center;
}
.specialposition {
  display: flex;
  margin: 0 -1000px 0 0;
  /* border:-100px; */
  /* align-items: flex-end; */
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.cardposition {
  display: flex;
  align-items: center;
  /* align-content: center; */
}
.uppercase {
  text-transform: uppercase;
}
.spbtn {
  margin: 0 -40px 500px 0;
  width: 172px;
}
.btn {
  display: inline-block;
  background: transparent;
  color: inherit;
  font: inherit;
  border: 0;
  outline: 0;
  padding: 0;
  transition: all 200ms ease-in;
  cursor: pointer;
}
.btn--primary {
  background: #7f8ff4;
  color: #fff;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  padding: 12px 36px;
}
.btn--primary:hover {
  background: #6c7ff2;
}
.btn--primary:active {
  background: #7f8ff4;
  box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, 0.2);
}
.btn--inside {
  margin-left: -96px;
}

.form__field {
  width: 360px;
  background: #fff;
  margin: 20px 0 0 0;
  color: #a3a3a3;
  font: inherit;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
  border: 0;
  outline: 0;
  padding: 22px 18px;
}
.textfield {
  width: 360px;
  margin: 20px 0 0 37px;
  background: #fff;
  color: #a3a3a3;
  font: inherit;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
  border: 0;
  outline: 0;
  padding: 22px 18px;
}
</style>