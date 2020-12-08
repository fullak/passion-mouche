<template>
  <div>
    <div class="img-article">
      <img src="../assets/img/3.png" alt="#" class="article-img">
    </div>
    <div class="article-container box">
      <h2 class="title article-title">Title</h2>
      <p class="has-text-justified article-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
        consectetur?
        Commodi nobis omnis eius non quaerat facilis voluptates iste, magnam accusantium repellendus
        autem expedita necessitatibus maiores, aut possimus consectetur fuga.
      </p>
      <h3 class="subtitle">subTitle</h3>
      <p class="has-text-justified article-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
        consectetur?
        Commodi nobis omnis eius non quaerat facilis voluptates iste, magnam accusantium repellendus
        autem expedita necessitatibus maiores, aut possimus consectetur fuga.
      </p>
      <p class="has-text-justified article-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
        consectetur?
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
.img-article {
  margin: 5rem auto 2rem;
  width: 80%;
}

.article-img {
  border-radius: 20px;
}

@media screen and (min-width: 700px){
  .article-container{
    width: 70%;
    margin: auto;
  }
}
</style>