<template>
  <button :class="mode" @click="btnClickHandler(true)" type="button">
    <slot></slot>
  </button>
</template>

<script>
/** 
 * Created only one variant of the Button, Can create more variants when needed 
 * */

export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: 'btn'
    },
    btnClickHandler: {
      type: Function
    }
  }
}
</script>

<style scoped>

.btn {
    background-image: linear-gradient(to right bottom, #FBDB89, #F48982);
    border-radius: 10rem;
    border: none;
    text-transform: uppercase;
    color: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: all .2s; 
  }
  
  .btn:hover, .btn-small:hover {
    transform: scale(1.05); 
  }
  .btn:focus, .btn-small:focus {
    outline: none; 
  }
  .btn > *:first-child, .btn-small > *:first-child {
    margin-right: 1rem; 
  }
  
  .btn {
    padding: 1.3rem 3rem;
    font-size: 1.4rem; 
  }
  
  .btn svg {
    height: 2.25rem;
    width: 2.25rem;
    fill: currentColor; 
  }

  @media only screen and (max-width: 425px) {
    .btn {
      padding: 1.3rem 1.5rem;
    }
  }
</style>