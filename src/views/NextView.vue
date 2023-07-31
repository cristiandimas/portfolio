<template>
  <div class="next">
    <div class="next__container">
      <projectList :filterProjects="filterProjects"></projectList>
      <pagination category="Next" @projectPages="filterData"></pagination>
    </div>
  </div>
</template>

<script>
import pagination from '@/components/pagination.vue'
import projectList from '@/components/projectList.vue'
  export default {
    name: "next",
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
  .next {
    position: absolute;
    display: flex;
    justify-content: end;
    width: 100%;

    /* background: lightcoral; */
  }

  /* All projects */
  .next__container {
    margin: 3rem 0;
    width: 90%;
    padding: 5rem;

    /* background: cyan; */
  }

  @media screen and (max-width:1000px) {
    .next__container {
      width: 100%;
      padding: 5rem 2rem;
    }
  }
  @media screen and (max-width:500px) {
    .next__container {
      padding: 5rem 1rem;
    }
  }
</style>
