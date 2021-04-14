<template>
  <funda-header></funda-header>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
import FundaHeader from './components/layout/Header.vue';

export default {
  components: {
    FundaHeader
  }  
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Nunito+Sans:400,600,700");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  font-family: 'Nunito Sans', sans-serif;
  margin: 0;
}

  * {
    margin: 0;
    padding: 0; 
  }
  
  *,
  *::before,
  *::after {
    box-sizing: inherit; 
  }
  
  html {
    box-sizing: border-box;
    font-size: 62.5%; 
  }
  
  @media only screen and (max-width: 68.75em) {
    html {
      font-size: 60%; 
    } 
  }
  
  body {
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 400;
    line-height: 1.6;
    color: #655A56;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: calc(100vh - 2 * 4vw); 
  }

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>