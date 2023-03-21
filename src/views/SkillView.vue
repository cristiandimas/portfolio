<template>
  <div class="skill">
    <div class="skill__container">
      <transition-group
          appear=""
          tag="ul"
          class="skill__skills"
          @before-enter="beforeEnter"
          @enter="enter"
        >  
        <li class="skill__page" v-for="(skill, index) in skills" :key="skill.id" :data-index="index"  @mouseover="setIndex(index)" @mouseout="setIndex(false)">
          <img class="skill__img" :src="skill.image" alt="images of the technologies used" loading="lazy">
        </li>
      </transition-group>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import { skillsData } from '@/components/skillsData.js'
  export default {
    name: "skill",
    data(){
      return{
        skills : skillsData,
        indexId:'0',
      }
    },
    methods:{
      setIndex(value){
        if (value === false) {
          this.indexId='0';
        }else{
          this.indexId= value + 1;
        }
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
          delay: el.dataset.index * 0.3,
        })
      }
    }
  }
</script>

<style scoped>
  .skill {
    position: absolute;
    display: flex;
    justify-content: end;
    width: 100%;

    /* background: lightcoral; */
  }

  /* All projects */
  .skill__container {
    margin: 5rem 0;
    width: 70%;
    padding: 5rem;

    /* background: cyan; */
  }

  .skill__skills {
    display: grid;
    gap: 3.125rem;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 8rem), 1fr));
    grid-auto-rows: minmax(3.125rem, 8rem);
  }

  .skill__page {
    background-color: var(--background-footer);
    box-shadow: 0.125rem 0.125rem 0.375rem 0 var(--background-footer);
    border-radius: 1.25rem;
    text-align: center;
    overflow: hidden;
    padding: 1rem;
  }

  .skill__img {
    width: 100%;
    height: 100%;
    border-radius: 1.25rem;
    object-fit: contain;
  }

  @media screen and (max-width:1000px) {
    .skill__container {
      width: 100%;
      padding: 5rem 2rem;
    }
  }

  @media screen and (max-width:500px) {
    .skill__container {
      padding: 5rem 1rem;
    }
  }

</style>
