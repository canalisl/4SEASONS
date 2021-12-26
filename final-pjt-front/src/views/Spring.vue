<template>
  <div>
    
    <div class="img-wrap">
      <img class="" src="../assets/image_28.png" alt="">
      <p class="mainfont">봄 SPRING</p>
    </div>

    <b-container class="bv-example-row">
      <b-row class="b-row flexbox-centering">
        <b-col cols="6" >
          <div data-aos="fade-right">
            <p class="detail"> 일상에 지친 사람들에게, </p>
            <p class="detail">쉼을 주는 영화</p>
            <p class="detail">계절과 함께하는 영화 추천</p>
          </div>
        </b-col>
        <b-col cols="6" id="b-col">
          <div data-aos="fade-left"><img class="image image-cover detailimg_r " src="../assets/spring_2.png" alt=""></div>
        </b-col>
      </b-row>

      <b-row class="b-row flexbox-centering">
        <b-col cols="6" id="b-col">
          <div data-aos="fade-right"><img class="image image-cover detailimg_l" src="../assets/spring_3.png" alt=""></div>
        </b-col>
        <b-col cols="6" >
          <div data-aos="fade-left">
            <p class="detail_r"> 지금 모두가 가장 보고싶은 </p>
            <p class="detail_r"> 영화 정보를 제공합니다. </p>
          </div>
        </b-col>
      </b-row>

      <b-row class="b-row flexbox-centering">
        <b-col cols="6">
          <div data-aos="fade-right">
          <p class="detail"> 당신을 취향 저격!</p>
          <p class="detail"> 성향테스트로 보는 당신의 영화 </p>
          </div>
        </b-col>
        <b-col cols="6" id="b-col">
          <div data-aos="fade-left"><img class="image image-cover detailimg_r" src="../assets/spring_4.png" alt=""></div>
        </b-col>  
      </b-row>

      <b-row class="b-row flexbox-centering">
        <b-col cols="6" id="b-col">
          <div data-aos="fade-right"><img class="image image-cover detailimg_l" src="../assets/spring_5.png" alt=""></div>
        </b-col>
        <b-col cols="6">
          <div data-aos="fade-left">
          <p class="detail_r"> 와글와글. 이 영화를 보는 </p>
          <p class="detail_r"> 다른 사람들과 나눌 이야기 </p>
          </div>
        </b-col>
      </b-row>
      
    </b-container>
    <div class="petal">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
      <span></span>
    </div>
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
  name: 'Spring',
}
</script>

<style scoped>
.gradationbg{
  background: -webkit-linear-gradient(#FFE8E8, #FFb4b4);
}
.img-wrap {
  position: relative;
}
.img-wrap img {
  width: 100vw;
  max-width: 100%;
}
.bv-example-row{
  margin-top: 5%;
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
.image {
  width: 100%;
  height: auto;
  max-width: 100%;
  
}

.image-contain {
  object-fit: contain;
  object-position: center;
}

.image-cover {
  object-fit: cover;
  object-position: right top;
}

.b-row {
  width: auto;
  height: 60%;
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
.detailimg_r{
  float:right;
}
.detailimg_l{
  float:left;
}
#b-col{
  padding-left:0;
  padding-right:0;
}
/* blossom */
@import url("https://fonts.googleapis.com/css?family=Homemade+Apple");
body {
  background-color: #050d19;
  perspective: 3000px;
}

.navbar {
  background: none;
  border: none;
  overflow: hidden;
}

.navbar-nav {
  display: inline-block;
}

.petal {
  width: 100%;
  position: absolute;
  top: -150px;
  text-align: left;
}

.petal span {
  display: inline-block;
  overflow: hidden;
  width: 14px;
  height: 14px;
  border-radius: 200px 10px 200px 200px;
  background: linear-gradient(to bottom, #faaca8, #ddd6f3);
  z-index: 1;
  transform: skewX(30deg);
  backface-visibility: visible;
  -webkit-animation: fallingSakura1 7s ease infinite;
}

.petal span:nth-of-type(3n+2) {
  -webkit-animation: fallingSakura2 7s ease infinite;
}

.petal span:nth-of-type(3n+1) {
  -webkit-animation: fallingSakura3 7s ease infinite;
}

.petal span:nth-of-type(n) {
  -webkit-animation-delay: -1.9s;
}

.petal span:nth-of-type(2n) {
  -webkit-animation-delay: 3.9s;
}

.petal span:nth-of-type(3n) {
  -webkit-animation-delay: 2.3s;
}

.petal span:nth-of-type(4n) {
  -webkit-animation-delay: 4.4s;
}

.petal span:nth-of-type(5n) {
  -webkit-animation-delay: 5s;
}

.petal span:nth-of-type(6n) {
  -webkit-animation-delay: 3.5s;
}

.petal span:nth-of-type(7n) {
  -webkit-animation-delay: 2.8s;
}

.petal span:nth-of-type(8n) {
  -webkit-animation-delay: 1.5s;
}

.petal span:nth-of-type(9n) {
  -webkit-animation-delay: 3.3s;
}

.petal span:nth-of-type(10n) {
  -webkit-animation-delay: 2.5s;
}

.petal span:nth-of-type(11n) {
  -webkit-animation-delay: 1.2s;
}

.petal span:nth-of-type(12n) {
  -webkit-animation-delay: 4.1s;
}

.petal span:nth-of-type(13n) {
  -webkit-animation-delay: 5.8s;
}

.petal span:nth-of-type(14n) {
  -webkit-animation-delay: -0.1s;
}

.petal span:nth-of-type(15n) {
  -webkit-animation-delay: 6.3s;
}

.petal span:nth-of-type(16n) {
  -webkit-animation-delay: -1s;
}

.petal span:nth-of-type(17n) {
  -webkit-animation-delay: 7.4s;
}

.petal span:nth-of-type(18n) {
  -webkit-animation-delay: -0.3s;
}

.petal span:nth-of-type(19n) {
  -webkit-animation-delay: 8.3s;
}

.petal span:nth-of-type(20n) {
  -webkit-animation-delay: -0.6s;
}

.petal span:nth-of-type(21n) {
  -webkit-animation-delay: 7.7s;
}

.petal span:nth-of-type(2n+2) {
  background: linear-gradient(to right, #fffbd5, #F15F79);
}

.petal span:nth-of-type(3n+1) {
  background: linear-gradient(to right, #DD5E89, #F7BB97);
}

.petal span:nth-of-type(3n+2) {
  border-radius: 20px 1px;
}

.petal span:nth-of-type(3n+3) {
  transform: rotateX(-180deg);
}

.petal span:nth-of-type(3n+2) {
  animation-duration: 12sec;
}

.petal span:nth-of-type(4n+2) {
  animation-duration: 9sec;
}

.petal span:nth-of-type(5n+2) {
  width: 12px;
  height: 12px;
  box-shadow: 1.5px 1.5px 8px #fc7bd1;
}

.petal span:nth-of-type(4n+3) {
  width: 10px;
  height: 10px;
  box-shadow: 1px 1px 6px #fc7bd1;
}

@-webkit-keyframes fallingSakura1 {
  0% {
    -webkit-transform: translate3d(0, 0, 0) rotateX(0deg);
    opacity: 1;
  }
  100% {
    -webkit-transform: translate3d(400px, 1200px, 0px) rotateX(-290deg);
    opacity: 0.3;
  }
}
@-webkit-keyframes fallingSakura2 {
  0% {
    -webkit-transform: translate3d(0, 0, 0) rotateX(-20deg);
    opacity: 1;
  }
  100% {
    -webkit-transform: translate3d(200px, 1200px, 0px) rotateX(-70deg);
    opacity: 0.2;
  }
}
@-webkit-keyframes fallingSakura3 {
  0% {
    -webkit-transform: translate3d(0, 0, 0) rotateX(90deg);
    opacity: 1;
  }
  100% {
    -webkit-transform: translate3d(500px, 1200px, 0px) rotateX(290deg);
    opacity: 0;
  }
}
</style>