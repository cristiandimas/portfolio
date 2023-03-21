<template>
    <div class="home" @mousemove="mouseMove">
        <div class="home__landscape">
            <img class="home__img" loading="lazy" src="@/assets/backgroundcb.svg" alt="landscape background">
        </div>
        <div class="home__title" :style="style">
            <h1 class="home__cristian">Cristian Barrantes</h1>
            <P class="home__dev">FULLSTACK</P>
        </div>

 

        <div class="home__title home__title--front" :style="style">
            <h2 class="home__cristian home__cristian--front">Cristian Barrantes</h2>
            <P class="home__dev home__dev--front">FULLSTACK</P>
        </div>
        <div class="home__button">
            <router-link to="/portfolio" class="home__portfolio">
                    Portfolio
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name:'HomeView',
        data (){
            return {
                move:false,
                x:'',
                halfScreen:'',
                translateX:'',
                style:{
                    transform:'',
                    transition:'all 2s',
                }
            }
        },
        methods: {
            setMove(value){
                this.move = value;
            },
            mouseMove({clientX}){
                this.x               = clientX /16;
                this.halfScreen      = window.innerWidth / 32;
                this.translateX      = `${this.x-this.halfScreen}px`;
                this.style.transform = `translate(${this.translateX})`
            }
        }
    }
</script>

<style scoped>

/*/////////////////////////////////////*/
    .home {
      
        display: flex;
        position: relative;
        justify-content: center;
        align-items: end;
        width: 100%;
        height: 100vh;
        
        
    }
    .home__landscape{
        position: absolute;
        width: 100%;
        height: 100vh;
        z-index: 1;
    }

    .home__img{
       height: 100%
    }

    /* Title of the back */

    .home__title{
        position: absolute;
        z-index: 1;
        top: 20vh;
        line-height: 19vh;
    }
    .home__cristian {
        font-size: 9vw;
        font-weight: 600;
    }
    .home__dev {
        text-align: center;
        font-weight: 600;
        font-size: 10vw;
    }

    
    /* Title of the front */

    .home__title--front {
        z-index: 2;
    }

    .home__cristian--front {
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke: 0.063rem;
    }
    .home__dev--front {
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke: 0.063rem;
    }

    /* Button Portfolio */

    .home__button {
        border: 0.25rem solid var(--letter-color);
        border-radius: 1rem;
        position: absolute;
        bottom: 12vh;
        z-index: 3;
    }

    .home__portfolio {
        display: flex;
        position: relative;
        justify-content: center;
        width: 16.75rem;
        font-size: 3.55rem;
        border-radius: 0.625rem;
        overflow: hidden;
    }

    .home__portfolio:hover{
        background-color: var(--letter-color);
        color: var(--background-body);
        transition: 1s;
    }

    @media screen and (max-width:1024px){

        .home {
            overflow: hidden;
            
        }

        .home__title {
            line-height: 14vh;
        }

        .home__landscape {
            width: 130%;
            overflow: hidden;
            
        }

        .home__animation {
            width: 120%;
            overflow: hidden;
        }
    }

    @media screen and (max-width:800px) {
        .home__landscape {
            padding-bottom: 8.5rem;
            margin-bottom: 2.5rem;
            width: 100%;
            
        }

        .home__img{
             height: 100%
        }

        .home__landscape:before{
            content: "";
            background: var(--background-footer);
            position: absolute;
            z-index: 3;
            bottom: 0;
            width: 100%;
            height: 2.5rem;
        }

        .home__animation {
            margin-bottom: 16rem;
            width: 200%;
        }

        .home__title{
            line-height: 6vh;
            top: 35vh;
        }

        .home__button {
            bottom: 20vh;
        }

    }

    @media screen and (max-width:400px) {

        .home__landscape {
            padding-bottom: 7rem;
        }

        .home__landscape:before{
            height: 7rem;
        }

        .home__animation {
            margin-bottom: 14.5rem;
        }

        .home__portfolio {
            width: 12rem;
            font-size: 2.75rem;
        }
    }
</style>