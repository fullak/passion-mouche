<template>
  <div class="form-contact">
    <div class="field">
      <label class="label has-text-left">Message</label>
      <div class="control">
        <textarea class="textarea is-primary" placeholder="Textarea"></textarea>
      </div>
    </div>

    <div class="field">
      <label class="label has-text-left">Name</label>
      <div class="control">
        <input class="input is-primary" type="text" placeholder="e.g Alex Smith">
      </div>
    </div>

    <div class="field">
      <label class="label has-text-left">Email</label>
      <div class="control">
        <input class="input is-primary" type="email" placeholder="e.g. alexsmith@gmail.com">
      </div>
    </div>

    <div class="field">
      <div class="control">
        <label class="checkbox">
          <input type="checkbox">
          I agree to the <a href="#">terms and conditions</a>
        </label>
      </div>
    </div>

    <div class="buttons-container">
      <button class="button is-primary form-buttons">Send</button>
      <button class="button is-light form-buttons">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'formContact',
  components: {
  }
}
</script>

<style>

.buttons-container{
  display: flex;
  flex-direction: row;
  width: 50%;
  margin: auto;
  justify-content: space-between;
}
</style>