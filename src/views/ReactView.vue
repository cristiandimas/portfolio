<template>
  <div class="react">
    <div class="react__container">
      <projectList :filterProjects="filterProjects"></projectList>
      <pagination category="React" @projectPages="filterData"></pagination>
    </div>
  </div>
</template>

<script>
import pagination from '@/components/pagination.vue'
import projectList from '@/components/projectList.vue'
  export default {
    name: "react",
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
    },   
  }
</script>

<style scoped>
  .react {
    position: absolute;
    display: flex;
    justify-content: end;
    width: 100%;

    /* background: lightcoral; */
  }

  /* All projects */
  .react__container {
    margin: 3rem 0;
    width: 90%;
    padding: 5rem;

    /* background: cyan; */
  }


  @media screen and (max-width:1000px) {
    .react__container {
      width: 100%;
      padding: 5rem 2rem;
    }
  }

  @media screen and (max-width:500px) {
    .react__container {
      padding: 5rem 1rem;
    }
  }

</style>
