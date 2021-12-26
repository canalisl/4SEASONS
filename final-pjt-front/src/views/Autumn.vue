<template>
  <div>
    <div class="img-wrap">
        <img src="../assets/autumn_main.png"/>
      <p class="mainfont">가을 AUTUMN</p>
    </div>
    <div class="centered pt-4 justify-content-center mx-auto my-auto intro">
      <p>당신의 음식으로부터 영화를 취향 저격♬</p>
    </div>
    <div class="mx-auto btncenter mt-5 pt-4 pb-5">
      <button class="custom-btn btn-6" @click="quest">START</button>
    </div>
    
    
  </div>
</template>

<script>

export default {
  name: 'Autumn',
  components:{
  },
  methods:{
    quest() {
      this.$router.push("/quiz")
    }
  },
  data () {
    return {
      
    }
  },
}
</script>

<style scoped>
.blur{
  filter: blur(5px);
}
.intro{
  font-size:20px; 
  font-weight:1000; 
  font-family: Dx시인과나; 
  /* color:brown; */
  background: -webkit-linear-gradient(#F9D405, #DF2712);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.btncenter{
  position: absolute;
  top: -20; left: 0; right: 0; bottom: -20;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.img-wrap {
  position: relative;
}
.img-wrap img {
  width: 100vw;
  max-width: 100%;
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
.centered { 
  position:absolute;
  left: 50%;
  transform: translateX(-50%);
}

.custom-btn {
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  /* padding: 10px 25px; */
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  /* position: relative; */
  display: inline-block;
   box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  outline: none;
}
.btn-6 {
  background: rgb(247,150,192);
  background: radial-gradient(circle, rgba(247,150,192,1) 0%, rgba(118,174,241,1) 100%);
  line-height: 42px;
  padding: 0;
  border: none;
}
.btn-6 span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}
.btn-6:before,
.btn-6:after {
  position: absolute;
  content: "";
  height: 0%;
  width: 1px;
 box-shadow:
   -1px -1px 20px 0px rgba(255,255,255,1),
   -4px -4px 5px 0px rgba(255,255,255,1),
   7px 7px 20px 0px rgba(0,0,0,.4),
   4px 4px 5px 0px rgba(0,0,0,.3);
}
.btn-6:before {
  right: 0;
  top: 0;
  transition: all 500ms ease;
}
.btn-6:after {
  left: 0;
  bottom: 0;
  transition: all 500ms ease;
}
.btn-6:hover{
  background: transparent;
  color: #76aef1;
  box-shadow: none;
}
.btn-6:hover:before {
  transition: all 500ms ease;
  height: 100%;
}
.btn-6:hover:after {
  transition: all 500ms ease;
  height: 100%;
}
.btn-6 span:before,
.btn-6 span:after {
  position: absolute;
  content: "";
  box-shadow:
   -1px -1px 20px 0px rgba(255,255,255,1),
   -4px -4px 5px 0px rgba(255,255,255,1),
   7px 7px 20px 0px rgba(0,0,0,.4),
   4px 4px 5px 0px rgba(0,0,0,.3);
}
.btn-6 span:before {
  left: 0;
  top: 0;
  width: 0%;
  height: .5px;
  transition: all 500ms ease;
}
.btn-6 span:after {
  right: 0;
  bottom: 0;
  width: 0%;
  height: .5px;
  transition: all 500ms ease;
}
.btn-6 span:hover:before {
  width: 100%;
}
.btn-6 span:hover:after {
  width: 100%;
}
body {
  background-color: #2b2c3a;
  padding: 20px;
}

#blossom_container {
  background-color: #f1f1f1;
  position: absolute;
  width: calc(100% - 40px);
  height: calc(100% - 40px);
}

.petal {
  background: url(http://talktofill.surge.sh/cherry-blossom.png) no-repeat;
}
.petal.petal-style1 {
  width: 45px;
  height: 20px;
  background-position: -31px 0;
}
.petal.petal-style2 {
  width: 42px;
  height: 22px;
  background-position: 0 -23px;
}
.petal.petal-style3 {
  width: 37px;
  height: 24px;
  background-position: 0 -50px;
}
.petal.petal-style4 {
  width: 26px;
  height: 34px;
  background-position: -49px -35px;
}
/* blossom */

</style>