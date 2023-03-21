<template>
  <div class="container">
    <preloader />
    <HeaderView />
    <ContentView />
    <FooterView />
  </div>
</template>

<script>
  import preloader from '@/components/preloader.vue'
  import HeaderView from '@/views/HeaderView.vue'
  import ContentView from '@/views/ContentView.vue'
  import FooterView from '@/views/FooterView.vue'

  export default {
    name:'App',
    components: {
      'preloader':preloader,
      'HeaderView':HeaderView,
      'ContentView':ContentView,
      'FooterView':FooterView,
    }
  }

</script>
<style>
#app {
  font-family: var(--font);
  color: var(--letter-color);
}

.container {
  background: var(--background-body);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

/*  Pagination  */
  .pagination-container{
    display: flex;
    justify-content: center;
    padding: 1rem;
  }

  .pagination {
    display: inline-block; 
  }

  .pagination__item {
    display: inline;
  }

  .pagination__a {
    color: var(--letter-color);
    float: left;
    padding: 0.5rem 1rem;
    text-decoration: none;
    margin: 0.25rem;
    border: 0.25rem solid var(--letter-color);
    border-radius: 1rem;
  }

  .active {
    background-color: var(--letter-color);
    color: var(--background-footer);
    border: 0.25rem solid var(--letter-color);
    border-radius: 1rem;
  }

  .pagination__a:hover {
    border: 0.25rem solid var(--letter-color);
    border-radius: 1rem;
    background-color: var(--letter-color);
    color: var(--background-footer);
  }

@media screen and (max-width:1530px){
  .container {
    overflow: visible;
  }
    }
@media screen and (max-width:450px){
  .pagination__a {
    padding: 0.25rem 0.4rem;
    border-radius: 0.5rem;
}
}
</style>
