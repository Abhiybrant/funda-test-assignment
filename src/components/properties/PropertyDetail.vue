<template>
  <div class="property__detail" id="personDetailsSection" v-if="property">
      <div class="property__detail__fig">
        <img class="property__detail__img" 
          :srcset="property.media[0]? property.media[0] : ''"
          sizes="(min-width: 1200px) 712px,(min-width: 1020px) 656px,100vw" 
          :src="property.defaultImage" 
          alt="property.jpeg"
        />
        <h1 class="property__detail__title">
            <span> {{ property.address}}</span>
        </h1>
    </div>
    <div class="property__detail__details">
        <div class="property__detail__info"  v-for="(value, name) in property.details" :key="name">
          <span class="info-key"> {{name}} </span>
          <span v-if="name==='PrijsGeformatteerd'" v-html="value" class="info-value"></span>
          <span v-else-if="name==='GewijzigdDatum'" class="info-value">{{formatDate(value)}}</span>
          <span v-else class="info-value">  {{ value}} </span>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['property'],
  computed: {},
  methods: {
    formatDate(dateString) {
      /* As I needed to format date only once, So keeping it here, can also be moved to utils for global usage */
      var date = new Date(parseInt(dateString.substr(6)));
      return (((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + ' / ' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + ' / ' + date.getFullYear());
    }
  }
}
</script>

<style scoped>

  .property__detail__fig {
    height: 30rem;
    position: relative;
    transform: scale(1.04) translateY(-1px);
    transform-origin: top; 
    margin: 0px 3rem;
  }

  .property__detail__fig::before {
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: .6; 
  }

  .property__detail__img {
    width: 100%;
    display: block;
    height: 100%;
    object-fit: cover; 
  }

  .property__detail__title {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 20%) skewY(-6deg);
    color: #fff;
    font-weight: 700;
    font-size: 2.75rem;
    text-transform: uppercase;
    width: 70%;
    line-height: 1.95;
    text-align: center; 
  }

  .property__detail__title span {
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    padding: 1.3rem 2rem;
    background-image: linear-gradient(to right bottom, #FBDB89, #F48982); 
  }

  .property__detail__details {
    display: block; /* flex */
    align-items: center;
    padding: 8rem 3rem 3rem 3rem; 
  }

  .property__detail__info {
    margin-top: 10px;
    font-size: 1.5rem;    
    display: flex;
    align-items: center; 
  }
  
  .property__detail__info:not(:last-child) {
    margin-right: 4rem; 
  }
  
  .property__detail:hover .people__detail__info-buttons {
    visibility: visible;
    opacity: 1;
    transform: translateY(0); 
  }
   
  .info-key {
    font-size: 1.3rem;
    color: #F59A83;
    font-weight: 600;
    margin-bottom: .3rem;
  }

  .info-value {
    font-size: 1.6rem;
    color: #968B87;
    font-weight: 600;
    margin-left: 10px;
  }
</style>