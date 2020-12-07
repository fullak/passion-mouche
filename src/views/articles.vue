<template>
  <div class="articles-container">
    <div class="articles-head">
      <img src="../assets/img/articlesHead.jpg" alt="#" class="img-head">
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
          top-line technologies whereas functional paradigms. Objectively plagiarize optimal alignments without customized
          innovation. Seamlessly implement intermandated value for bricks-and-clicks expertise. Intrinsicly pontificate
          intuitive benefits vis-a-vis worldwide quality vectors.
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
            top-line technologies whereas functional paradigms. Objectively plagiarize optimal alignments without customized
            innovation. Seamlessly implement intermandated value for bricks-and-clicks expertise. Intrinsicly pontificate
            intuitive benefits vis-a-vis worldwide quality vectors.
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
            top-line technologies whereas functional paradigms. Objectively plagiarize optimal alignments without customized
            innovation. Seamlessly implement intermandated value for bricks-and-clicks expertise. Intrinsicly pontificate
            intuitive benefits vis-a-vis worldwide quality vectors.
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
            top-line technologies whereas functional paradigms. Objectively plagiarize optimal alignments without customized
            innovation. Seamlessly implement intermandated value for bricks-and-clicks expertise. Intrinsicly pontificate
            intuitive benefits vis-a-vis worldwide quality vectors.
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
.articles-container{
  margin:auto;
}

.articles-head{
  height: 500px;
}

.img-head{
  opacity: 0.8;
}

.articles-title{
  width: 400px;
  margin: -20rem auto;
}


.Articles{
  margin-top: 5rem;
}

.third-content{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 2rem auto 0;
  width: 80%;
  flex-wrap: wrap;
}

.text-content3{
  width: 45%;
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
}

.testImg{
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 0 auto 2rem;
}

.article-decoration{
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
</style>