<template>
  <div class="container">
    <header class="header">
      <form class="search">
          <input type="text" class="search__field" v-model="searchQuery" placeholder="Search for city (Almere/Amsterdam)">
          <base-button :btnClickHandler="handlerSearch">
              Find in my city
          </base-button>
      </form>
    </header>

    <div class="results" v-if="propertiesList">
      <property-filter @change-filter="setFilters"></property-filter>
      <ul class="results__list">
        <property-results
          v-for="property in propertiesList"
          :key="property.id"
          :id="property.id"
          :post-code="property.postCode"
          :image="property.image"
          :address="property.address"
        ></property-results>
      </ul>
    </div>
    <div v-if="isLoading">
      <base-loader></base-loader>
    </div>
    <div class="property__detail" id="personDetailsSection" v-else-if="property">
        <property-detail :property="property"></property-detail>
    </div>
    <div v-else>
      Unable to fetch object, please check console, in case of proxy failure, please switch proxy.
    </div>
  </div>
</template>

<script>
import PropertyFilter from '../../components/properties/PropertyFilter';
import PropertyDetail from '../../components/properties/PropertyDetail';
import PropertyResults from '../../components/properties/PropertyResults';

export default {
  props:['propertyId'],
  components: {
    PropertyFilter,
    PropertyDetail,
    PropertyResults
  },
  data() {
    return {
      isLoading: false,
      error: null,
      propertyType: 'koop',
      searchQuery: ''
    };
  },
  created() {
    /* Load all the properties on the first page load */
    this.loadProperties();
  },
  watch: {
    propertyId(newId){
      this.loadProperty(true, newId);
    }
  },
  computed: {
    property() {
      return this.$store.getters['properties/property'];
    },
    hasProperty() {
      return !this.isLoading && this.$store.getters['properties/hasProperty'];
    },
    propertiesList() {
      return this.$store.getters['properties/propertiesList'];
    },
    getFirstProperty() {
      return this.$store.getters['properties/firstProperty'];
    }
  },
  methods: {
    setFilters(propertyType) {
      this.propertyType = propertyType;
      this.loadProperties(true, this.propertyType);
    },
    async loadProperty(refresh = false, propertyId) {
      this.isLoading = true;
      try {
        await this.$store.dispatch('properties/loadProperty', {
          forceRefresh: refresh,
          propertyType: this.propertyType,
          Id: propertyId
        });
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }
      this.isLoading = false;
    },
    async loadProperties(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch('properties/loadProperties', {
          forceRefresh: refresh,
          propertyType: this.propertyType,
          searchQuery: this.searchQuery
        });

        /* Show the first property detail when the property list is available  */
        this.loadProperty(true, this.getFirstProperty);

      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }
      this.isLoading = false;
    },
    handlerSearch() {
      this.loadProperties(true, this.propertyType);
    }
  }
}
</script>

<style scoped>

  .container {
    max-width: 120rem;
    margin: 4vw auto;
    background-color: #fff;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 2rem 6rem 0.5rem rgba(101, 90, 86, 0.2);
    display: grid;
    grid-template-rows: 10rem minmax(100rem, auto);
    grid-template-columns: 1.1fr 2fr;
    grid-template-areas: "head head" "results property"; 
  }
  
  @media only screen and (max-width: 68.75em) {
    .container {
      width: 100%;
      margin: 0;
      border-radius: 0; 
    }
  }
  
  .link:link,
  .link:visited {
    color: #968B87; 
  }
  
  .header {
    grid-area: head;
    background-color: #F9F5F3;
    display: flex;
    align-items: center;
    justify-content: space-between; 
  }
  
  .search {
    background-color: #fff;
    border-radius: 10rem;
    display: flex;
    align-items: center;
    padding-left: 3rem;
    margin-left: 2rem;
    transition: all .3s; 
  }

  .search:focus-within {
    transform: translateY(-2px);
    box-shadow: 0 0.7rem 3rem rgba(101, 90, 86, 0.08); 
  }

  .search__field {
    border: none;
    background: none;
    font-family: inherit;
    color: inherit;
    font-size: 1.7rem;
    width: 30rem; 
  }

  .search__field:focus {
    outline: none; 
  }

  .search__field::placeholder {
    color: #DAD0CC; 
  }
  
  /* Styling for search results block */
  .results {
    grid-area: results;
    padding: 3rem 0; 
  }
  
  .property__detail {
    grid-area: property;
    background-color: #F9F5F3;
    border-top: 1px solid #fff;
  }

  @media only screen and (max-width: 767px) {
    .container {
      grid-template-columns: 1fr;
      grid-template-areas:
      "head"
      "results" 
      "property";
    }
  }

  @media only screen and (max-width: 525px) {
    .search__field {
      width: 24rem!important;
    }
  }

  @media only screen and (max-width: 425px) {
    .search__field {
      width: 16rem!important;
    }
  }
  
</style>