<template>
  <div class="articles-container">
    <div class="articles-head">
      <img src="../assets/img/articlesHead.png" alt="#" class="img-head">
      <h2 class="title box articles-title">Articles</h2>
    </div>

    <div class="third-content">
      <div class="text-content3 box">
        <router-link to="/oneArticle">
          <div class="testImg">
            <img src="../assets/img/articleDecoration/article1.jpg" alt="" class="article-decoration">
          </div>
          <h3 class="subtitle">Testing</h3>
          <p>
            Dramatically actualize integrated leadership and enabled infrastructures. Professionally reconceptualize
            top-line technologies whereas functional paradigms.
          </p>
        </router-link>
      </div>
      
      <div class="text-content3 box">
        <router-link to="/oneArticle">
          <div class="testImg">
            <img src="../assets/img/articleDecoration/article2.jpg" alt="" class="article-decoration">
          </div>
          <h3 class="subtitle">Testing</h3>
          <p>
            Dramatically actualize integrated leadership and enabled infrastructures. Professionally reconceptualize
            top-line technologies whereas functional paradigms.
          </p>
        </router-link>
      </div>
      <div class="text-content3 box">
        <router-link to="/oneArticle">
          <div class="testImg">
            <img src="../assets/img/articleDecoration/article3.jpg" alt="" class="article-decoration">
          </div>
          <h3 class="subtitle">Testing</h3>
          <p>
            Dramatically actualize integrated leadership and enabled infrastructures. Professionally reconceptualize
            top-line technologies whereas functional paradigms.
          </p>
        </router-link>
      </div>
      <div class="text-content3 box">
        <router-link to="/oneArticle">
          <div class="testImg">
            <img src="../assets/img/articleDecoration/article4.jpg" alt="" class="article-decoration">
          </div>
          <h3 class="subtitle">Testing</h3>
          <p>
            Dramatically actualize integrated leadership and enabled infrastructures. Professionally reconceptualize
            top-line technologies whereas functional paradigms.
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'articles',
}
</script>

<style>
.img-head{
  opacity: 0.7;
}

.articles-title{
  margin: 2rem auto;
}

.article-decoration{
  height: 200px;
  width: 200px;
  border-radius: 50%;
}

@media screen and (min-width: 700px){
  .articles-title{
    width: 60%;
    margin: 2rem auto;
  }

  .third-content{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .text-content3{
    width: 48%;
  }
}

</style>