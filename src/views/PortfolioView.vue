<template>
  <div class="portfolio">
      <div class="portfolio__container">
        <projectList :filterProjects="filterProjects"></projectList>
          <pagination category="All" @projectPages="filterData"></pagination>
      </div>
  </div>
</template>

<script>
import pagination from '@/components/pagination.vue'
import projectList from '@/components/projectList.vue'
  export default {
    name: "portfolio",
    components:{
      pagination,
      projectList
    },
    data(){
      return{
        filterProjects: [],
      }
    },
    methods:{
      filterData(value){
        this.filterProjects = value;
      },
    }
  }
</script>

<style scoped>
  .portfolio {
    position: absolute;
    display: flex;
    justify-content: end;
    width: 100%;
     
    /* background: lightcoral; */
  }

  /* All projects */
  .portfolio__container {
    margin: 5rem 0;
    width: 90%;
    padding: 5rem;
    
    /* background: cyan; */
  }

  @media screen and (max-width:1000px) {
    .portfolio__container {
      width: 100%;
      
      padding: 5rem 2rem;
    }
  }

  @media screen and (max-width:500px) {
    .portfolio__container{
      padding: 5rem 1rem;
    }
  }

</style>

