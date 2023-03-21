<template>
    <transition-group
        appear=""
        tag="ul"
        class="projects__transition"
        @before-enter="beforeEnter"
        @enter="enter"
    >
        <li class="projects__page" v-for="(project, index) in filterProjects" :key="project.id" :data-index="index"  @mouseover="setIndex(index)" @mouseout="setIndex(false)">
        <img :class="{'projects__img':(indexId != index+1),'projects__imghover':(indexId === index+1)}" :src="project.image" alt="image of all projects list" loading="lazy">
            <div class="projects__card">
            <h3 class="projects__title">{{project.title}}</h3>
            <p class="projects__text">{{project.objective}}</p>
            <div class="projects__buttons">
                <a rel="noopener noreferrer" :title="project.links.titleCode" class="projects__btn" :href="project.links.hrefCode" target="_blank">Code</a>
                <a rel="noopener noreferrer" :title="project.links.titlePage" class="projects__btn" :href="project.links.hrefPage" target="_blank">Website</a>
            </div>
            </div>
        </li>       
    </transition-group>
</template>
<script>
import gsap from 'gsap'
    export default {
        name: "projectList",
        props:{
            filterProjects: Object
        },
        data(){
            return{
                indexId:'0',
            }
        },
        methods: {
        setIndex(value){
          this.indexId = (value === false) ? '0' : value + 1;
        },
        beforeEnter(el) {
          el.style.opacity = 0;
          el.style.transform = 'translateY(60px)'
        },
        enter (el) {
          gsap.to(el,{
            opacity:1,
            y:0,
            duration: 1.5,
            delay: el.dataset.index * 0.7,
          })
        },
        },
    }
</script>
<style scoped>
.projects__transition {
    display: grid;
    gap: 0.938rem;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 30rem), 1fr));
    grid-auto-rows: minmax(10rem, 18rem);
    /* background: lightgoldenrodyellow; */
  }

  .projects__page {
    background-color: var(--background-footer);
    box-shadow: 0.125rem 0.125rem 0.375rem 0 var(--background-footer);
    border-radius: 1.25rem;
    text-align: center;
    overflow: hidden;
  }

  .projects__img {
    width: 100%;
    height: 100%;
    border-radius: 1.25rem;
    transition: all 2s;
  }
  .projects__imghover {
    width: 100%;
    height: 50%;
    border-radius: 1.25rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    transition: all 2s;
  }

  .projects__card {
    display: block;
  }
  

  .projects__title {
    margin: 1rem 0;
    font-size: 1rem;
    z-index: 5;
  }

  .projects__text {
    font-size: 0.8rem;
    margin: 1rem;
  }

  .projects__buttons {
    display: flex;
    justify-content: space-around;
  }

  .projects__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 6.25rem;
    height: 1.875rem;
    cursor: pointer;
    color: var(--letter-color);
    border: 0.25rem solid var(--letter-color);
    border-radius: 0.5rem;
  }

  .projects__btn:hover {
    background: var(--letter-color);
    color: var(--background-body);
  }

  @media screen and (min-width:2350px){
    .projects__transition {
      grid-template-columns: repeat(3, minmax(min(100%, 30rem), 1fr));
      grid-auto-rows: minmax(10rem, 25rem);
    }
  }
  
  @media screen and (max-width:1700px) {
    .projects__transition {
      grid-template-columns: repeat(3, minmax(min(100%, 25rem), 1fr));
      grid-auto-rows: minmax(10rem, 15rem);
    }
  }
  @media screen and (max-width:1500px) {
    .projects__transition {
      grid-template-columns: repeat(auto-fill, minmax(min(100%, 25rem), 1fr));
    }
  }

</style>