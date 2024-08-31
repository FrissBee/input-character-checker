<div>
  <label class="form-label"><b>Email</b></label>
  <div>
    <input type="hidden" name="email-hidden" value="">
    <input-character-checker 
      class="email-input"
      input-field="input"
      display-bar="hide"
      display-count-output="hide"
      type-input="email"
      required-field="required"
      placeholder-field="Your email..."
    ></input-character-checker>
    <div class="text-danger mt-2 email-output" style="display: none">No valid email address</div>
  </div>
</div>