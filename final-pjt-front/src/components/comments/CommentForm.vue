<template>
  <div>
    <!-- <hr>
    댓글 내용: <input @key.enter="createComment(content)" type="text" v-model.trim="content"> 
    <button
      @click="createComment(content)"
      >댓글 생성</button> -->
  <div class="container">
    <div class="container__item">
      <input @keypress.enter="createComment(content)" type="text" v-model.trim="content" class="form__field " placeholder="Write Your Comment"/>
      <button @click="createComment(content)" type="button" class="btn btn--primary btn--inside uppercase">댓글을 작성하다.</button>
    </div>
  </div>
  </div>


</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'CommentForm',
  props: {
    review: Object,
  },
  data: function () {
    return {
        content: '',
      }
    },
  state: {
    ...mapState([
      'review',
      'commentItem',
    ])
  },
  methods: {
    ...mapActions([
      'createComment',
    ]),
    // this.content = '',
  }
}
</script>

<style scoped>
  :root {
  background: #f5f6fa;
  color: #9c9c9c;
  font: 1rem "PT Sans", sans-serif;
}

html,
body,
.container {
  height: 100%;
}

a {
  color: inherit;
}
a:hover {
  color: #7f8ff4;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.uppercase {
  text-transform: uppercase;
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
  padding: 12px 30px;
  font-family: DX시인과나;
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
  width: 450px;
  background: rgb(246, 251, 255);
  color: #616161;
  font: inherit;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
  border: 2px dashed rgb(123, 165, 255);
  outline: 0;
  margin: 0 0 0 40px;
  padding: 22px 18px;
  font-family: DX시인과나;
}
</style>