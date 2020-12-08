<template>
  <div class="mainContent-container">
    <div class="second-container">
      <div class="img-container">
        <img src="../../assets/img/2.jpg" class="img-content" alt="#"/>
      </div>

      <div class="second-content">
        <div class="text-content2">
          <div class="text-box">
            <h2 class="title information-title">Informations</h2>
            <p class="text-details">
              Dramatically actualize integrated leadership and enabled infrastructures. Professionally reconceptualize
              top-line technologies whereas functional paradigms. Objectively plagiarize optimal alignments without
              customized
              innovation. Seamlessly implement intermandated value for bricks-and-clicks expertise. Intrinsicly
              pontificate
              intuitive benefits vis-a-vis worldwide quality vectors.
              Intrinsicly evisculate fully tested potentialities vis-a-vis cutting-edge synergy. Intrinsicly repurpose
              client-centered portals vis-a-vis strategic models. Enthusiastically parallel task worldwide communities
              through error-free synergy. Appropriately expedite long-term high-impact testing procedures and tactical
              best
              practices. Quickly myocardinate team driven.
            </p>
          </div>
        </div>
      </div>
    </div>


    <img src="../../assets/img/articleDecoration/article2.jpg" alt="" class="test">


    <h2 class="title Articles">Last articles</h2>
    <div class="third-content">
      <div class="text-content3 box">
        <router-link to="/oneArticle">
          <div class="img-container">
            <img src="../../assets/img/articleDecoration/article1.jpg" alt="" class="img-content">
          </div>
          <h3 class="subtitle">Testing</h3>
          <p>
            Dramatically actualize integrated leadership and enabled infrastructures. Professionally reconceptualize
            top-line technologies whereas functional paradigms. Objectively plagiarize optimal alignments without
            customized.
          </p>
        </router-link>
      </div>
      <div class="text-content3 box">
        <router-link to="/oneArticle">
          <div class="img-container">
            <img src="../../assets/img/articleDecoration/article2.jpg" alt="" class="img-content">
          </div>
          <h3 class="subtitle">Testing</h3>
          <p>
            Dramatically actualize integrated leadership and enabled infrastructures. Professionally reconceptualize
            top-line technologies whereas functional paradigms. Objectively plagiarize optimal alignments without
            customized.
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'mainContent',
  components: {
  }
}
</script>

<style>
.img-container {
  height: 200px;
  width: 200px;
  margin: 2rem auto;
}

.img-content {
  height: 200px;
  border-radius: 50%;
}

.Articles {
  margin-top: 5rem;
}

.third-content{
  width: 90%;
  margin: auto;
}

.text-details{
  width: 80%;
  margin: auto;
}

.test{
  margin-top: 2rem;
}
@media screen and (min-width: 1028px) {

  .second-container {
    display: flex;
    flex-direction: row;
    margin: 5rem auto;
  }

  .second-content {
    width: 60%;
    margin: auto;
  }

  .third-content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .text-content3 {
    width: 40%;
    margin: 2rem auto;
  }

  .test {
    margin-top: 2rem;
    opacity: 0.8;
    height: 500px;
    width: 100%;
  }
}
</style>

