import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HomeIndex from '../views/HomeIndex.vue'
import Spring from '../views/Spring.vue'
import Summer from '../views/Summer.vue'
import Autumn from '../views/Autumn.vue'
import Winter from '../views/Winter.vue'
import Profile from '../views/Profile.vue'
import Signup from '@/views/accounts/Signup'
import Login from '@/views/accounts/Login'
import ReviewForm from '@/components/ReviewForm'
import ReviewDetail from '@/components/ReviewDetail'
import ReviewUpdate from '@/components/ReviewUpdate'
import MovieDetail from '@/components/MovieDetail'
import quiz from '@/views/games/quiz'
import answer from '@/views/games/answer'


Vue.use(VueRouter)

const routes = [
  {
    path: '/accounts/signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/accounts/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/homeindex',
    name: 'HomeIndex',
    component: HomeIndex
  },
  {
    path: '/spring',
    name: 'Spring',
    component: Spring
  },
  {
    path: '/summer',
    name: 'Summer',
    component: Summer
  },
  {
    path: '/autumn',
    name: 'Autumn',
    component: Autumn
  },
  {
    path: '/winter',
    name: 'Winter',
    component: Winter
  },
  
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/winter/reviewform',
    name: 'ReviewForm',
    component: ReviewForm
  },
  {
    path: '/winter/review-detail/:review_id',
    name: 'ReviewDetail',
    component: ReviewDetail
  },
  {
    path: ' /winter/reviewupdate',
    name: 'ReviewUpdate',
    component: ReviewUpdate
  },
  {
    path: '/moviedetail',
    name: 'MovieDetail',
    component: MovieDetail,
    props: true
  },
  
  {
    path: '/quiz',
    name: 'quiz',
    component: quiz,
    transitionName: 'fade'
  },
  {
    path: '/answer',
    name: 'answer',
    component: answer,
    props:true,
    transitionName: 'fade'
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
