<template>
  <div>
    <div class="img-wrap">
      <div data-aos="fade-down">
      <img class="main-img" src="../assets/main_main.png" alt="">
      </div>
      <p class="mainfont">WELCOME TO '4SEASONS'</p>
      <router-link :to="{ name: 'Login' }"><button class="login">Log In</button></router-link>

    </div>
    <b-container class="bv-example-row">
      <div data-aos="fade-up">
      <b-row class="b-row flexbox-centering firstrow">
        <b-col cols="12" id="b-col"><img class="image image-cover" src="../assets/image 32.png" alt=""></b-col>
      </b-row>
      </div>

      <div data-aos="fade-right">
        <b-row class="b-row flexbox-centering bg-spring">
          <b-col cols="6" id="b-col">
            <img class="image image-cover detailimg_l" src="../assets/main_spring.png" alt="">
          </b-col>
        
          <b-col cols="6" >
            <p class="detail_r"> 봄. </p>
            <p class="detail_r"> 당신이 좋아하는 모든 영화 정보에 대해서 </p>
          </b-col>
        </b-row>
      </div>

      <div data-aos="fade-left">
      <b-row class="b-row flexbox-centering bg-summer">
        <b-col cols="6" >
          <p class="detail"> 여름. </p>
          <p class="detail"> 지금 가장 뜨거운 영화를 소개</p>
        </b-col>
        <b-col cols="6" id="b-col">
          <img class="image image-cover detailimg_r " src="../assets/main_summer.png" alt="">
        </b-col>
      </b-row>
      </div>

      <div data-aos="fade-right">
      <b-row class="b-row flexbox-centering bg-autumn">
        <b-col cols="6" id="b-col">
          <img class="image image-cover detailimg_l" src="../assets/main_autumn.png" alt="">
        </b-col>
        <b-col cols="6">
          <p class="detail_r"> 가을. </p>
          <p class="detail_r"> 당신의 취향을 저격할 영화와 취향테스트 </p>
        </b-col>
      </b-row>
      </div>

      <div data-aos="fade-left">
      <b-row class="b-row flexbox-centering bg-winter">
        <b-col cols="6">
          <p class="detail"> 겨울. </p>
          <p class="detail"> 당신과 함께 따뜻한 겨울을 보낼 누군가를 위해 </p>
        </b-col>
        <b-col cols="6" id="b-col">
          <img class="image image-cover detailimg_r" src="../assets/winter_about.jpg" alt="">
        </b-col>
      </b-row>
      </div>
    </b-container>  
    
      

  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

export default {
  name: 'Home',
  components: {

  }
}
</script>

<style scoped>
.container{
  position: relative;
}
.img-wrap {
  position: relative;
}
.main-img {
  height: auto;
  width:100vw;
  max-width: 100%;
  opacity: 0.7;
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
.flexbox-centering {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}
.b-row {
  width: auto;
  height: 60%;
}

.season-block{
  text-align: center;
  vertical-align: middle;
}
.firstrow{
  margin-bottom: 10%;
  margin-top:10%;
}
.bg-spring {
  background: rgba(252, 221, 221, 0.66);
}
.bg-summer {
  background: #D8E8FA;
}
.bg-autumn {
  background: rgba(193, 150, 126, 0.52);
}
.bg-winter {
  background: #F4F1F1;
}


.detail{

  font-family: DX시인과나;
  font-style: normal;
  font-size: 1.5vw;
  text-align: left;
}
.detail_r{

  font-family: DX시인과나;
  font-style: normal;
  font-size: 1.5vw;
  text-align: right;
}
.container {
  position: relative;
}

#b-col{
  padding-left:0;
  padding-right:0;
}
.image {
  width: 100%;
  height: auto;
  max-width: 100%;
  
}

.full-width {
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  margin-top:-30%;
  /* margin-bottom:-50%; */
  max-width: 100vw;
  max-height: 80vw;
  width: 100vw;
  /* max-height: 100%; */
  overflow: hidden;
}

#seasons{
  position:absolute;
  opacity: 1;
  top:40%;
  /* max-width:80%; */
}
.login{
  position:absolute;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  top:60%;
  left:50%;
  transform: translate(-50%, -50%);
  /* -ms-transform: translate(-50%, -50%); */
  justify-content: center;
  background-color:rgba(2, 128, 144, 0.2);
  /* height: 10%;
  width: 10%; */
  /* left: 40%; */
  /* top: 60%; */
  border-radius: 30px;
  font-family: DX시인과나;
  font-weight: 1000;
  font-size:1.5vw;
  padding: 1vw 2vw;
  margin: 8vw 0;
}
/* Modal */
/* Full-width input fields */
input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */
button {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  /* width: 100%; */
}

button:hover {
  opacity: 0.8;
}

/* Extra styles for the cancel button */
.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

/* Center the image and position the close button */
.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
  position: relative;
}

img.avatar {
  width: 40%;
  border-radius: 50%;
}

.container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  padding-top: 60px;
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button (x) */
.close {
  position: absolute;
  right: 25px;
  top: 0;
  color: #000;
  font-size: 35px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: red;
  cursor: pointer;
}

/* Add Zoom Animation */
.animate {
  -webkit-animation: animatezoom 0.6s;
  animation: animatezoom 0.6s
}

@-webkit-keyframes animatezoom {
  from {-webkit-transform: scale(0)} 
  to {-webkit-transform: scale(1)}
}
  
@keyframes animatezoom {
  from {transform: scale(0)} 
  to {transform: scale(1)}
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
     display: block;
     float: none;
  }
  .cancelbtn {
     width: 100%;
  }
}

</style>
