<template>
        <div class="pagination-container">
            <ul class="pagination">
                <li class="pagination__item" @click="getPreviousPage()"><a class="pagination__a" href="#">Previous</a></li>
                <li class="pagination__item" v-for="page in totalPages()" :key="page.id" @click="getDataPage(page)"><a class="pagination__a" :class="isActive(page)" href="#">{{ page }}</a></li>
                <li class="pagination__item" @click="getNextPage()"><a class="pagination__a" href="#">Next</a></li>
            </ul>
        </div>
</template>
<script>
import { projectsData } from '@/components/projectsData.js'
    export default {
        name:"pagination",
        props:{
            category: String
        },
        data() {
            return{
                projects : projectsData,
                elementByPage: 6,
                dataPages:[],
                currentPage: 1
            }
        },
        mounted(){
            this.getDataPage(1);
            this.projectPages();
        },
        methods:{
            projectPages(){
                this.$emit('projectPages', this.dataPages)
            },
                totalPages(){
                return Math.ceil(this.filterProjects.length/this.elementByPage)
            },
                getDataPage(numberPage){
                this.currentPage = numberPage;
                this.dataPages=[];
                let start = (numberPage * this.elementByPage) - this.elementByPage;
                let end = (numberPage * this.elementByPage);
                this.dataPages = this.filterProjects.slice(start, end);
                this.projectPages();
            },
                getPreviousPage(){
                if (this.currentPage > 1) {
                this.currentPage--;
                }
                this.getDataPage(this.currentPage)
            },
                getNextPage(){
                if (this.currentPage < this.totalPages()) {
                this.currentPage++;
                }
                this.getDataPage(this.currentPage)
            },
                isActive(numberPage){
                return numberPage == this.currentPage ? 'active': ''
            }
        },
        computed: {
        filterProjects: function (){
            if (this.category === "All") {
                return this.projects;
            } else {
                return this.projects.filter(project => project.category.includes(this.category) === true)
            }
        }
    }
    }
</script>
<style scoped>
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