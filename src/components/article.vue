<template>
    <div>   
        <div class="img-article">
            <img src="../assets/img/3.jpg" alt="#" class="article-img">
        </div>
        <div class="article-container box">
            <h2 class="title article-title">Title</h2>
            <p class="has-text-justified article-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, consectetur? 
                Commodi nobis omnis eius non quaerat facilis voluptates iste, magnam accusantium repellendus 
                autem expedita necessitatibus maiores, aut possimus consectetur fuga.
            </p>
            <h3 class="subtitle">subTitle</h3>
            <p class="has-text-justified article-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, consectetur? 
                Commodi nobis omnis eius non quaerat facilis voluptates iste, magnam accusantium repellendus 
                autem expedita necessitatibus maiores, aut possimus consectetur fuga.
            </p>
            <p class="has-text-justified article-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, consectetur? 
                Commodi nobis omnis eius non quaerat facilis voluptates iste, magnam accusantium repellendus 
                autem expedita necessitatibus maiores, aut possimus consectetur fuga.
            </p>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'thisArticle'
}
</script>

<style scoped>
.img-article{
    height: 300px;
    width: 750px;
    margin: -10rem auto;
}

.article-container{
    height: 500px;
    width: 80%;
    margin: 15rem auto;
}

.article-img{
    border-radius: 20px;
    z-index:initial;
}

.title,
.subtitle{
    margin-top: 2rem;
}

.article-text{
    width: 70%;
    margin: auto;
}
</style>