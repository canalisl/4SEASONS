<template>
  <div id="app">
    <vs-navbar text-color="white" active-text-color="black" id="navbar"  >
      <div slot="title">
        <vs-navbar-title>
          <router-link id="title" to="/"><img src="./assets/logo.png" class="d-inline-block align-center justify-content-center" alt="Kitten"></router-link>
        </vs-navbar-title>
      </div>
      <div id="nav">
        <vs-navbar-item index="0" id="navitem" v-if="isLogin">
          <router-link to="/homeindex"> HomeIndex </router-link>
        </vs-navbar-item>
        <vs-navbar-item index="1" id="navitem" v-if="isLogin">
          <router-link to="/spring"> Spring </router-link>
        </vs-navbar-item>
        <vs-navbar-item index="2" id="navitem" v-if="isLogin">
          <router-link to="/summer"> Summer </router-link>
        </vs-navbar-item>
        <vs-navbar-item index="3" id="navitem" v-if="isLogin">
          <router-link to="/autumn"> Autumn </router-link>
        </vs-navbar-item>
        <vs-navbar-item index="4" id="navitem" v-if="isLogin">
          <router-link to="/winter"> Winter </router-link>
        </vs-navbar-item>

        <vs-navbar-item index="0" id="navitem" v-if="Logout">
          <router-link :to="{ name: 'Login' }"> HomeIndex </router-link>
        </vs-navbar-item>
        <vs-navbar-item index="1" id="navitem" v-if="Logout">
          <router-link :to="{ name: 'Login' }"> Spring </router-link>
        </vs-navbar-item>
        <vs-navbar-item index="2" id="navitem" v-if="Logout">
          <router-link :to="{ name: 'Login' }"> Summer </router-link>
        </vs-navbar-item>
        <vs-navbar-item index="3" id="navitem" v-if="Logout">
          <router-link :to="{ name: 'Login' }"> Autumn </router-link>
        </vs-navbar-item>
        <vs-navbar-item index="4" id="navitem" v-if="Logout">
          <router-link :to="{ name: 'Login' }"> Winter </router-link>
        </vs-navbar-item>
      </div>
      <div id="navright">
        <div v-if="isLogin">
          <vs-navbar-item index="6" id="navitem">
              <router-link @click.native="logout" to="#">Logout</router-link>
          </vs-navbar-item>
        </div>
        <div v-else>
          <vs-navbar-item index="5" id="navitem">
            <router-link :to="{ name: 'Signup' }">Signup</router-link>
          </vs-navbar-item>
          <vs-navbar-item index="6" id="navitem">
            <router-link :to="{ name: 'Login' }">Login</router-link>
          </vs-navbar-item>
        </div>

      </div>

      <vs-spacer></vs-spacer>
    </vs-navbar>
    <transition
        name="fade"
        mode="out-in"
       >
        <router-view @login="isLogin=true"/> 
         <!-- <router-view/> -->
       </transition>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  // data () {
  //   return {
  //     isChecked: false
  //   }
  // },
  methods: {
    ...mapActions([
      'logout',
    ])
    // logout: function () {
    //   this.isLogin = false
    //   localStorage.removeItem('jwt')
    //   this.$router.push({ name: 'Login' })
    // }
  },
  computed: {
    ...mapGetters([
      'isLogin',
    ])
  },
  // created () {
  //   if(document.location.pathname === '/moviedetail'){
  //     this.isChecked = true;
  //   }
  // },
  // created: function () {
  //   const token = localStorage.getItem('jwt')

  //   if (token) {
  //     this.isLogin = true
  //   }
  // }
}
</script>


<style scoped>
#title {
  text-decoration: none;
}

#nav {
  position:absolute;
  left:50%;top:0;
  margin-left:-375px; /* negative margin equal to half the width */
  width:750px;
  list-style:none;
  color:red;
  text-decoration: none;
}
#navright {
  position:absolute;
  left:90%;top:0;
  margin-left:-150px; /* negative margin equal to half the width */
  width:750px;
  list-style:none;
  color:red;
  text-decoration: none;
}

#navitem{
  float:left;
  display:block;
  text-align:center;
  width:150px; /* fixed width */
  color:red;
  text-decoration: none;
}
#navbar{
  position:fixed;
}
#navbarcol{/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#fceabb+0,fccd4d+50,f8b500+51,fbdf93+100;Orange+3D+%235 */
background: #fceabb; /* Old browsers */
background: -moz-linear-gradient(45deg,  #fceabb 0%, #fccd4d 50%, #f8b500 51%, #fbdf93 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(45deg,  #fceabb 0%,#fccd4d 50%,#f8b500 51%,#fbdf93 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(45deg,  #fceabb 0%,#fccd4d 50%,#f8b500 51%,#fbdf93 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fceabb', endColorstr='#fbdf93',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}
</style>
