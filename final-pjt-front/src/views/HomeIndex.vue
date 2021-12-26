<template>
  <div>
    <!-- <h2>안녕하세요</h2> -->
    <!-- <b-container class="container">
      <b-row>
        <b-col md="3" cols="6">
          <p>SPRING</p>
          <p>봄</p>
        </b-col>
        
        <b-col md="3" cols="6">
          <p>SUMMER</p>
          <p>여름</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="3" cols="6">
          <p>AUTUMN</p>
          <p>가을</p>
        </b-col>
        <b-col md="3" cols="6">
          <p>WINTER</p>
          <p>겨울</p>
        </b-col>
      </b-row>
    </b-container> -->
    <main class="page-content normalfont pt-5">
        <div class="card" data-aos="fade-right">
          <div class="content">
            <h2 class="title">봄 SPRING</h2>
              <p class="copy">계절을 열다, INTRO, 사이트 개요</p>
                <router-link :to="{name: 'Spring'}">
                  <button class="btn">View Spring</button>
                </router-link>
          </div>
        </div>
      

      <div class="card" data-aos="fade-left">
        <div class="content">
          <h2 class="title">여름 SUMMER</h2>
          <p class="copy">최고의 영화, HOT MOVIE, 뜨거운 여름 처럼, 가장 핫한 영화는?</p>
          <router-link :to="{name: 'Summer'}">
          <button class="btn">View Summer</button>
          </router-link>
        </div>
      </div>
      <div class="card" data-aos="fade-right">
        <div class="content">
          <h2 class="title">가을 AUTUMN</h2>
          <p class="copy">취향 저격, MOVIE TYPE, 천고마비의 계절 가을, 음식 취향으로 알아보는 당신의 영화는?</p>
          <router-link :to="{name: 'Autumn'}">
          <button class="btn">View Autumn</button>
          </router-link>
        </div>
      </div>
      <div class="card" data-aos="fade-left">
        <div class="content">
          <h2 class="title">겨울 WINTER</h2>
          <p class="copy">영화로 만나다, 추운 겨울에 함께 모여 추위를 녹이다, 우리들의 무비 토크</p>
          <router-link :to="{name: 'Winter'}">
          <button class="btn">View Winter</button>
          </router-link>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// scroll fade
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
  name: 'HomeIndex',

}
</script>

<style scoped>
.container{
  position: relative; 
}
.normalfont{
  font-family: DX시인과나;
}
.row{
  text-align: center;
  margin:0;
  padding-bottom: 3px;
  padding-left:0;
  padding-right:0;
}
.image {
  width: 50vw ;
  height: 50vmax;
  width: 22vw;
  max-height: 30vw;
  height: 100%;
  max-width: 100%;
}

.image-contain {
  object-fit: contain;
  object-position: center;
}

.image-cover {
  object-fit: cover;
  object-position: center;
}
p{
  font-size: 2vw;
  font-family: DX시인과나;
  font-weight: 1000;
  margin: -150px auto;
  padding:3vw 0;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: #008CBA;
}
@import url("https://fonts.googleapis.com/css?family=Cardo:400i|Rubik:400,700&display=swap");
:root {
  --d: 700ms;
  --e: cubic-bezier(0.19, 1, 0.22, 1);
  --font-sans: "Rubik", sans-serif;
  --font-serif: "Cardo", serif;
}

* {
  box-sizing: border-box;
}

html, body {
  height: 100%;
}

body {
  display: grid;
  place-items: center;
}

.page-content {
  display: grid;
  justify-items:center;
  grid-gap: 1rem;
  padding: 1rem;
  max-width: 1024px;
  margin: 0 auto;
  font-family: var(--font-sans);
}
@media (min-height: 400px) {
  .page-content {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media (min-width: 600px) {
  .page-content {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media (min-width: 600px) {
  .page-content {
    grid-template-columns: repeat(2, 1fr);
  }
}

.card {
  position: relative;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  padding: 1rem;
  width: 60%;
  text-align: center;
  color: whitesmoke;
  background-color: whitesmoke;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1), 0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1), 0 16px 16px rgba(0, 0, 0, 0.1);
}
@media (min-width: 600px) {
  .card {
    height: 400px;
  }
}
.card:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 110%;
  background-size: cover;
  background-position: 0 0;
  transition: transform calc(var(--d) * 1.5) var(--e);
  pointer-events: none;
}
.nodeco{
  text-decoration: none;
}
.card:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200%;
  pointer-events: none;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.009) 11.7%, rgba(0, 0, 0, 0.034) 22.1%, rgba(0, 0, 0, 0.072) 31.2%, rgba(0, 0, 0, 0.123) 39.4%, rgba(0, 0, 0, 0.182) 46.6%, rgba(0, 0, 0, 0.249) 53.1%, rgba(0, 0, 0, 0.32) 58.9%, rgba(0, 0, 0, 0.394) 64.3%, rgba(0, 0, 0, 0.468) 69.3%, rgba(0, 0, 0, 0.54) 74.1%, rgba(0, 0, 0, 0.607) 78.8%, rgba(0, 0, 0, 0.668) 83.6%, rgba(0, 0, 0, 0.721) 88.7%, rgba(0, 0, 0, 0.762) 94.1%, rgba(0, 0, 0, 0.79) 100%);
  transform: translateY(-50%);
  transition: transform calc(var(--d) * 2) var(--e);
}
.card:nth-child(1):before {
  background-image: url(../assets/index_spring.png);
}
.card:nth-child(2):before {
  background-image: url(../assets/index_summer.png);
}
.card:nth-child(3):before {
  background-image: url(../assets/index_autumn.png);
}
.card:nth-child(4):before {
  background-image: url(../assets/index_winter.png);
}

.content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem;
  transition: transform var(--d) var(--e);
  z-index: 1;
}
.content > * + * {
  margin-top: 1rem;
}

.title {
  font-size: 1.3rem;
  font-weight: bold;
  line-height: 1.2;
  font-family: DX시인과나;
}

.copy {
  /* font-family: var(--font-serif); */
  font-family: DX시인과나;
  font-size: 1.125rem;
  font-style: italic;
  line-height: 1.35;
}

.btn {
  cursor: pointer;
  margin-top: 6rem;
  padding: 0.75rem 1.5rem;
  font-size: 0.65rem;
  font-weight: bold;
  letter-spacing: 0.025rem;
  text-transform: uppercase;
  color: white;
  background-color: black;
  border: none;
  font-family: DX시인과나;
}
.btn:hover {
  background-color: #0d0d0d;
}
.btn:focus {
  outline: 1px dashed yellow;
  outline-offset: 3px;
}

@media (hover: hover) and (min-width: 600px) {
  .card:after {
    transform: translateY(0);
  }

  .content {
    transform: translateY(calc(100% - 4.5rem));
  }
  .content > *:not(.title) {
    opacity: 0;
    transform: translateY(1rem);
    transition: transform var(--d) var(--e), opacity var(--d) var(--e);
  }

  .card:hover,
.card:focus-within {
    align-items: center;
  }
  .card:hover:before,
.card:focus-within:before {
    transform: translateY(-4%);
  }
  .card:hover:after,
.card:focus-within:after {
    transform: translateY(-50%);
  }
  .card:hover .content,
.card:focus-within .content {
    transform: translateY(0);
  }
  .card:hover .content > *:not(.title),
.card:focus-within .content > *:not(.title) {
    opacity: 1;
    transform: translateY(0);
    transition-delay: calc(var(--d) / 8);
  }

  .card:focus-within:before, .card:focus-within:after,
.card:focus-within .content,
.card:focus-within .content > *:not(.title) {
    transition-duration: 0s;
  }
}
</style>

// <b-container class="container">
//       <b-row>
//         <b-col md="3" cols="6">
//           <p>SPRING</p>
//           <p>봄</p>
//         </b-col>
        
//         <b-col md="3" cols="6" class="spring">
//             <img class="image image-cover" src="../assets/index_spring.png" alt="">
//         </b-col>
        
//         <b-col md="3" cols="6">
//           <img class="image image-cover" src="../assets/index_summer.png" alt="">
//         </b-col>
//         <b-col md="3" cols="6">
//           <p>SUMMER</p>
//           <p>여름</p>
//         </b-col>
//       </b-row>
//       <b-row>
//         <b-col md="3" cols="6">
//           <p>AUTUMN</p>
//           <p>가을</p>
//         </b-col>
//         <b-col md="3" cols="6">
//           <img class="image image-cover" src="../assets/index_autumn.png" alt="">
//         </b-col>
//         <b-col md="3" cols="6">
//           <img class="image image-cover" src="../assets/index_winter.png" alt="">
//         </b-col>
//         <b-col md="3" cols="6">
//           <p>WINTER</p>
//           <p>겨울</p>
//         </b-col>
//       </b-row>
//     </b-container>