<template>
  <div>
    <div class="top-title">
      <img src="../assets/img/contact.png" alt="#" class="contact-img"/>
      <h2 class="title contact-title box">Nous contacter</h2>
    </div>
    <div class="contact-content">
      <FormContact class="form-contact box"/>
      <div class="contact-infos">
        <div class="us-infos box">
          <h2 class="title">Nos coordonées</h2>
          <ul>
            <li>
              email : <a href="mailto:email@email.com">email@email.com</a>
            </li>
            <li>Phone : 01.01.01.01.01</li>
            <br/>
            <li>
              <address>
                Address : Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Ad aliquid
              </address>
            </li>
          </ul>
        </div>
        <div class="maps-infos box">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10965.413750755246!2d3.7883775!3d46.6000178!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x217f8c1a164a9617!2sR%C3%A9servoir%20de%20Givallois!5e0!3m2!1sfr!2sfr!4v1607163786131!5m2!1sfr!2sfr"
              height="300"
              width="100%"
              frameborder="0"
              style="border:0;"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormContact from "../components/formContact";

export default {
  name: "contact",
  components: {
    FormContact,
  },
};
</script>

<style>
.contact-img{
  opacity: 0.7;
}

.contact-title {
  margin: 2rem auto;
}

@media screen and (min-width: 700px) {
  .contact-title{
    width: 60%;
    margin: 2rem auto;
  }

  .contact-infos{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 3rem 1rem;
  }

  .us-infos{
    width: 48%;
  }

  .maps-infos{
    width: 48%;
  }
}
</style>
