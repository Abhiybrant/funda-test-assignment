<template>
  <div class='filter'>
    <label class="rbcontainer">Koop
      <input type="radio" checked="checked" v-model="propertytype" name="propertytype" v-bind:value="'koop'" @change="setFilter">
      <span class="rbcheckmark"></span>
    </label>
    <label class="rbcontainer">Huur
      <input type="radio" v-model="propertytype" name="propertytype" v-bind:value="'huur'" @change="setFilter">
      <span class="rbcheckmark"></span>
    </label>
  </div>
</template>

<script>
export default {
  emits: ['change-filter'],
  data() {
    return {
      propertytype: 'koop'
    };
  },
  methods: {
    setFilter() {
      this.$emit('change-filter', this.propertytype);
    }
  }
}
</script>

<style scoped>

.filter {
    display: flex;
    justify-content: space-around;
}
/* START : Radio button style */
.rbcontainer {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 15px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #F59A83;
}

/* Hide the browser's default radio button */
.rbcontainer input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.rbcheckmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.rbcontainer:hover input ~ .rbcheckmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.rbcontainer input:checked ~ .rbcheckmark {
  background-color: #F59A83;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.rbcheckmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.rbcontainer input:checked ~ .rbcheckmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.rbcontainer .rbcheckmark:after {
  top: 9px;
	left: 9px;
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background: white;
}
/* End : Radio button style */
</style>