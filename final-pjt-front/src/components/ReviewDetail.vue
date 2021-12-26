<template>
  <div class="card">
    <div class="container">
        <div class="col-10">
                  <h1></h1>
                  <div class="title-container cardcontent">
                    <!-- <h1>Review Detail</h1> -->
                    <!-- <h1 class="title code ">&lt;details&gt; &amp; &lt;summary&gt;</h1> -->
                      <div><h3 class="card-title code code-details normalfont">&lt;{{review.title}}'s detail&gt;</h3></div>
                  </div>
                  <div class=" normalfont">
                    <div class="card cardcontent">
                      <div class="card-description nom">
                        <div>
                        <p>{{review.id}}번째 게시글</p><hr>
                        <p class="nomf">리뷰 제목: {{review.title}}</p><hr>
                        <p>영화 제목: {{ review.movie_title }}</p>
                        <p>내용: {{ review.content }}</p>
                        <p>랭크: {{ review.rank }}점</p><hr>
                        </div>
                      </div>
                    </div>
                </div>
                <div class="btnposition">
                <router-link :to="{ name: 'ReviewUpdate' }">
                  <b-button class="normalfont btncl">수정</b-button>
                </router-link>
                <b-button class="normalfont btncl" @click="deleteReview(review)">삭제</b-button>
                </div>
                <hr>
                <!-- {{review}}
                <p>{{review.id}}번째 게시글</p>
                <p>리뷰 제목: {{review.title}}</p>
                <p>영화 제목: {{ review.movie_title }}</p>
                <p>내용: {{ review.content }}</p>
                <p>랭크: {{ review.rank }}점</p>
                <hr> -->
                  <div class="sample">
                  <h3 class="sample-title cardcontent nom2">COMMENTS</h3>
                    <p class="normalfont cardpadding">{{review.comment_count}}개의 댓글</p>
                    <comment-list-item
                      v-for="(comment, idx) in comments"
                      :key="idx"
                      :comment="comment"
                    >
                    <!-- {{comment}} -->
                    </comment-list-item>
                    <comment-form></comment-form>
                  </div>
        </div>
    </div>
  </div>
</template>

<script>
import CommentListItem from '@/components/comments/CommentListItem'
import CommentForm from '@/components/comments/CommentForm'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ReviewDetail',
  props: {
  },
  components: {
    CommentListItem,
    CommentForm,
  },
  methods: {
    ...mapActions([
      'getReview',
      'deleteReview'
    ]),
  },
  computed: {
    ...mapState([
      'review',
      'comments',
    ])
  },
  created: function () {
    if (this.$store.getters.isLogin) {
      this.getReview()
    } else {
      this.$router.push({ name: 'Login' })
    }
  },
}
</script>

<style scoped>
  /* @charset "UTF-8"; */
  .normalfont {
    font-family: DX시인과나;
    font-style: initial;
    color:black;
    font-weight: bold;
  }
  .btncl {
    background-color: #810000;
    color: white;
  }
  .btnposition {
    justify-items: center;
  }
  .nom {
    color: #1b1717
  }
  .nom2{
    background: #810000
  }
  .nonefont {
    color:none;
    font-weight:normal;
  }
  .container {
    padding: 0 20px;
    max-width: 800px;
    margin: 50px auto;
  }

  .title {
    font-size: 3rem;
    display: inline-block;
    color: #9796F0;
    background: linear-gradient(to right, #783F8E, #9796F0 20%, #FBC7D4, #E36588);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

.card {
  display: flex;
  justify-content: center;
  /* text-align: center; */
  border-radius: 10px;
  background: #FFF;
  padding: 20px;
  box-shadow: 4px 4px 12px 1px rgba(0, 0, 0, 0.2);
  line-height: 1.5;
}
.cardcontent {
  text-align: center;
}
.cardpadding {
  padding: 10px 0 0 20px;
}
.card + .card {
  margin-left: 20px;
}
.card-list {
  display: flex;
  flex: 1;
}
.card-title {
  margin: 0 0 20px 0;
  letter-spacing: 1px;
}
.card-description {
  margin: 0;
}
.card-details .card-title {
  color: #783F8E;
}
.card-summary .card-title {
  color: #E36588;
}
@media (max-width: 500px) {
  .card {
    flex: 1;
  }
}

.sample {
  margin-top: 40px;
  border-radius: 10px;
  overflow: hidden;
}
.sample-title {
  line-height: 2.5;
  font-size: 0.75rem;
  background: #810000;
  color: #FFF;
  padding: 0 20px;
  letter-spacing: 1px;
}

.speech {
  display: inline-block;
  margin: 20px 0 0 7px;
  padding: 20px;
  background: rgb(160, 211, 253);
  border-radius: 0 10px 10px 10px;
  position: relative;
  -webkit-animation: speech 0.3s cubic-bezier(0.01, 0.29, 0.38, 2.37);
          animation: speech 0.3s cubic-bezier(0.01, 0.29, 0.38, 2.37);
  transform-origin: top left;
}
.speech:before {
  content: "";
  position: absolute;
  border: 8px solid transparent;
  top: -16px;
  left: 0;
  border-bottom-color: #FFF;
}
.nomf {
  color: #630000
}
:root {
  font-size: 16px;
}

html, body {
  width: 100%;
  height: 100%;
  display: flex;
  background: #f7fcff;
  color: #738290;
  font-family: DX시인과나;
}

* {
  box-sizing: border-box;
}
*:before, *:after {
  box-sizing: inherit;
}

@-webkit-keyframes speech {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes speech {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@-webkit-keyframes cat {
  50% {
    transform: scale(1.1);
  }
}
@keyframes cat {
  50% {
    transform: scale(1.1);
  }
}
</style>