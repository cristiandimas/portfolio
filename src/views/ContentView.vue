<template>
    <div class="content">

        <nav v-show="!isHome" class="content__nav">
            <router-link to="/portfolio" class="content__link"><i class="fa-solid fa-table-list"></i> All projects</router-link>
            <router-link to="/react" class="content__link"><i class="fa-brands fa-react"></i> react </router-link>
            <!-- <router-link to="/laravel" class="content__link"><i class="fa-brands fa-laravel"></i> Laravel </router-link> -->
            <router-link to="/vanilla" class="content__link"><i class="fa-brands fa-js"></i> Vanilla JS</router-link>
            <router-link to="/node" class="content__link"><i class="fa-solid fa-server"></i> Node JS</router-link>
            <router-link to="/skill" class="content__link"><i class="fa-solid fa-book"></i> Skill</router-link>
        </nav>
        <router-view v-slot="{ Component }">
            <transition name="fade">
                <component :is="Component"></component>
            </transition>
        </router-view>
    </div>
</template>

<script>
    export default {
        name: "content",
        computed: {
            isHome() {
                return this.$route.name === 'home'
            },
        }
    }
</script>

<style scoped>
    .content {
        display: flex;
        position: relative;
        width: 100%;
        height: 100%;
        z-index: 3;
    }
    .content__nav {
        display: flex;
        position: fixed;
        width: 10%;
        z-index: 4;
        padding: 2rem;
        gap: 2rem;
        flex-direction: column;
        /* align-self: center; */
        top: 30%;
        background: var(--background-body);
        border-radius: 0 1rem 1rem 0;
        border: 0.25rem solid var(--letter-color);
        border-left-color: var(--background-body);
        transition: all 2s; 
    }

    .content__link {
        font-weight: bold;
        color: var(--letter-gradient);
    }
    
    .content__link:hover {
        color: var(--letter-color);
    }

    .router-link-exact-active {
        color: var(--letter-color);
    }

    .fa-solid, .fa-brands {
        margin-right: 0.313rem;
    }

/* Route transition */
    .fade-enter-from {
        opacity: 0;
    }
    .fade-enter-active {
        opacity: 0;
        transition: all 1s ease-in;
    }
    .fade-leave-to {
        opacity: 0;
        transform: translateY(10rem);
    }
    .fade-leave-active {
        transition: all 1s ease-in;
    }


    @media screen and (max-width:1400px){
        .content__nav {
            gap: 1rem;
            padding: 1rem;
        }
    }

    @media screen and (max-width:1000px) {
    .content__nav {
        display: none;
    }
    }
</style>