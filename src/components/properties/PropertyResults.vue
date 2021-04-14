<template>
  <li v-bind:key="id">
      <router-link :to="`/funda/${id}`" class="results__link">
      <figure class="results__fig">
          <img :src="image" alt="Test">
      </figure>
      <div class="results__data">
          <h4 class="results__name">{{address}}</h4>
          <p class="results__people_info">{{postCode}}</p>
          <p class="results__people_info">{{id}}</p>
      </div>
      </router-link>
  </li>
</template>

<script>

export default {
  props: ['id','postCode','image', 'address']
}
</script>

<style scoped>

  .results__list {
    list-style: none; 
  }

  .results__link:link, .results__link:visited {
    display: flex;
    align-items: center;
    padding: 1.5rem 3rem;
    transition: all .3s;
    border-right: 1px solid #fff;
    text-decoration: none; 
  }

  .results__link:hover {
    background-color: #F9F5F3;
    transform: translateY(-2px); 
  }

  .results__link--active {
    background-color: #F9F5F3; 
  }

  .results__fig {
    flex: 0 0 5.5rem;
    border-radius: 50%;
    overflow: hidden;
    height: 5.5rem;
    margin-right: 2rem;
    position: relative;
    backface-visibility: hidden; 
  }

  .results__fig::before {
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(to right bottom, #FBDB89, #F48982);
    opacity: .2; 
  }

  .results__fig img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all .3s; 
  }

  .results__name {
    font-size: 1.3rem;
    color: #F59A83;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: .3rem; 
  }

  .results__people_info {
    font-size: 1.1rem;
    color: #968B87;
    text-transform: uppercase;
    font-weight: 600; 
  }

  .results__pages {
    margin-top: 3rem;
    padding: 0 3rem; 
  }

  .results__pages::after {
    content: "";
    display: table;
    clear: both; 
  }

  .results__btn--prev {
    float: left;
    flex-direction: row-reverse; 
  }

  .results__btn--next {
    float: right; 
  }
  
</style>