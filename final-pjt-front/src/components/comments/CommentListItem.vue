<template>
  <div>
    <!-- {{ comment }} -->
    <hr>
        <comment-update :comment="comment" ></comment-update>
      <div class="cardpadding2">
        <p class="normalfont">댓글번호: {{ comment.id }} </p>
        <!-- <p>작성자: {{ comment.user.username }}</p> -->
        
        <!-- <comment-update :comment="comment"></comment-update>
        <p>작성 시각: {{ comment.created_at }} /
          수정 시각: {{ comment.updated_at }}</p> -->
        <!-- <p>user: {{ comment.user }}</p> -->
            <div>
      <details class="sample-html-details">
        <summary class="sample-html-summary cardpadding santamargin"><span class="normalfont">{{ comment.user.username }}님의 생각은?</span></summary>
        <div class="speech normalfont">{{ comment.content }}</div>
        <div><b-button class="btncl" @click="deleteComment(comment)">삭제</b-button></div>
      </details>
    </div>
        <hr>
      </div>
    <div>
     <!-- store에서 가져옴: {{ $store.state.comments }} -->
    </div>
  </div>
</template>

<script>
import CommentUpdate from '@/components/comments/CommentUpdate'
import { mapActions, mapState } from 'vuex'
export default {
  components: {
    CommentUpdate,
  },
  props: {
    comment: Object
  },
  data: function () {
    return {
      commentcheck: '',
    }
  },
  computed: {
    ...mapState([
      'review',
      'comments',
      'commentcheck'
      // 'comment',
    ])
  },
  methods: {
    ...mapActions([
    'deleteComment',
    'updateCommentCheck',
  ]),
    isCommentUpdate: function(){
      this.commentcheck = 'true'
      console.log(this.commentcheck)
    }
  }
}
</script>

<style scoped>
  .normalfont {
    font-family: DX시인과나;
    font-style: initial;
    color:black;
    font-weight: bold;
  }
  .nonefont {
    color: none;
    font-weight: normal;
    font-style: normal;
  }
  .btncl {
    background-color: #810000;
    color: white;
  }
  .container2 {
  padding: 0 20px;
  max-width: 800px;
  margin: 0 auto;
}

.title2 {
  font-size: 3rem;
  display: inline-block;
  color: #9796F0;
  background: linear-gradient(to right, #783F8E, #9796F0 20%, #FBC7D4, #E36588);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.card2 {
  display: flex;
  justify-content: center;
  border-radius: 10px;
  background: #FFF;
  padding: 20px;
  box-shadow: 4px 4px 12px 1px rgba(0, 0, 0, 0.2);
  line-height: 1.5;
}
.cardpadding {
  padding: 10px 0 0 20px;
}
.santamargin {
  margin: 0 0 0 10px;
}
.cardpadding2 {
  padding: 5px 0 0 15px;
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
  line-height: 2;
  font-size: 0.75rem;
  background: #738290;
  color: #FFF;
  padding: 0 20px;
  letter-spacing: 1px;
}
.sample-code {
  border-left: 2px dashed #E4F0D0;
  border-right: 2px dashed #E4F0D0;
  padding: 20px;
  line-height: 1.5;
}
.sample-html {
  padding: 20px;
  background: #E4F0D0;
}
.sample-html-details[open] .sample-html-summary:before {
  content: "🙀";
  -webkit-animation: cat 0.2s cubic-bezier(0.01, 0.29, 0.38, 2.37);
          animation: cat 0.2s cubic-bezier(0.01, 0.29, 0.38, 2.37);
}
.sample-html-summary {
  list-style-image: none;
  cursor: pointer;
  padding-left: 60px;
  position: relative;
}
.sample-html-summary:before {
  content: "🎅";
  position: absolute;
  top: calc(50% - 18px);
  left: 0;
  font-size: 2rem;
}
.sample-html-summary:focus {
  outline: none;
}
.sample-html-summary::-webkit-details-marker {
  display: none;
}

.code, .sample-title {
  font-family: "Fira Mono", monospace;
}
.code-details {
  color: #783F8E;
}
.code-summary {
  color: #E36588;
}

.speech {
  display: inline-block;
  margin: 20px 0 0 60px;
  padding: 15px;
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
  border-bottom-color: rgb(160, 211, 253);
}

:root {
  font-size: 16px;
}

html, body {
  width: 100%;
  height: 100%;
  display: flex;
  background: #FFFCF7;
  color: #738290;
  font-family: "Roboto", sans-serif;
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