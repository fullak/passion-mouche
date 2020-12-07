<template>
  <div class="mainContent-container">
    <div class="first-content">
      <div class="text-content box article">
        <h2 class="title">Bienvenue</h2>
        <p>
          Dramatically actualize integrated leadership and enabled infrastructures. Professionally reconceptualize
          top-line technologies whereas functional paradigms. Objectively plagiarize optimal alignments without customized
          innovation. Seamlessly implement intermandated value for bricks-and-clicks expertise. Intrinsicly pontificate
          intuitive benefits vis-a-vis worldwide quality vectors.

          Intrinsicly evisculate fully tested potentialities vis-a-vis cutting-edge synergy. Intrinsicly repurpose
          client-centered portals vis-a-vis strategic models. Enthusiastically parallel task worldwide communities
          through error-free synergy. Appropriately expedite long-term high-impact testing procedures and tactical best
          practices. Quickly myocardinate team driven.
        </p>
      </div>
    </div>

    <div class="img-container">
      <img src="../../assets/img/2.jpg" class="img-content" alt="#"/>
    </div>

    <div class="second-content">
      <div class="text-content2">
        <div class="text-box box">
          <h2 class="title information-title">Informations</h2>
          <p class="text-details">
            Dramatically actualize integrated leadership and enabled infrastructures. Professionally reconceptualize
            top-line technologies whereas functional paradigms. Objectively plagiarize optimal alignments without customized
            innovation. Seamlessly implement intermandated value for bricks-and-clicks expertise. Intrinsicly pontificate
            intuitive benefits vis-a-vis worldwide quality vectors.
            Intrinsicly evisculate fully tested potentialities vis-a-vis cutting-edge synergy. Intrinsicly repurpose
            client-centered portals vis-a-vis strategic models. Enthusiastically parallel task worldwide communities
            through error-free synergy. Appropriately expedite long-term high-impact testing procedures and tactical best
            practices. Quickly myocardinate team driven.
            </p>
        </div>
      </div>
    </div>

    <h2 class="title Articles">Last articles</h2>
    <div class="third-content">
      <div class="text-content3 box">
        <router-link to="/oneArticle">
          <div class="testImg">
            <img src="../../assets/img/articleDecoration/article1.jpg" alt="" class="article-decoration">
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
            <img src="../../assets/img/articleDecoration/article2.jpg" alt="" class="article-decoration">
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
  name: 'mainContent',
}
</script>

<style>
.first-content{
  width: 75%;
  margin: 10rem auto;
}

.text-content{
  width: 50%;
  margin-right: 2rem;
  float: right;
}

.box{
  opacity: 0.8%;
}

.img-container{
  width: 300px;
  height: 300px;
  margin-top: 1rem;
  border-radius: 50%;
}

.img-content{
  max-width: 100%;
  height: auto;
  margin: 2rem 0 0 8rem;
  border-radius: 50%;
}

.second-content{
  margin-top: 15rem;
}

.text-content2{
  background-image: url("../../assets/img/4.jpg");
  background-size: cover;
  opacity: 0.8%;
  height: 500px;
  left: 0;
  margin: 0 -10rem;
  padding-top: 5rem;
}

.text-box{
  width: 60%;
  margin: auto;
}

.information-title{
  color: black !important;
}

.text-details{
  width: 80%;
  margin: auto;
  color: black;
}

.Articles{
  margin-top: 5rem;
}

.third-content{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2rem;
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