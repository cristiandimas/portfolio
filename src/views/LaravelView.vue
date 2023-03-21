<template>
  <div class="laravel">
    <div class="laravel__container">
      <projectList :filterProjects="filterProjects"></projectList>
      <pagination category="Laravel" @projectPages="filterData"></pagination>
    </div>
  </div>
</template>

<script>
import pagination from '@/components/pagination.vue'
import projectList from '@/components/projectList.vue'
  export default {
    name: "laravel",
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
  .laravel {
    position: absolute;
    display: flex;
    justify-content: end;
    width: 100%;

    /* background: lightcoral; */
  }

  /* All projects */
  .laravel__container {
    margin: 5rem 0;
    width: 90%;
    padding: 5rem;

    /* background: cyan; */
  }

  @media screen and (max-width:1000px) {
    .laravel__container {
      width: 100%;
      padding: 5rem 2rem;
    }
  }
  @media screen and (max-width:500px) {
    .laravel__container {
      padding: 5rem 1rem;
    }
  }
</style>
