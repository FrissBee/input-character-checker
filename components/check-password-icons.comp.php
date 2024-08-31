<div>
  <label class="form-label"><b>Password</b></label>
  <div>
    <input type="hidden" name="password-hidden" value="">
    <input-character-checker 
        class="password-input"
        input-field="input"
        length-character="8"
        display-bar="hide"
        display-count-output="hide"
        type-input="password"
        required-field="required"
        color-message-danger="red"
        with-icon="right"
        event-icon="on"
        placeholder-field="Your password..."
      >
    </input-character-checker>
    <div class="text-danger mt-2 password-output" style="display: none">Password does not fulfill all criteria</div>
    <div class="check-icon mt-3"><span class="check-icon-length"></span> At least 8 characters</div>
    <div class="check-icon"><span class="check-icon-nbr"></span> At least 1 number</div>
    <div class="check-icon"><span class="check-icon-upper"></span> At least 1 upper case letter</div>
    <div class="check-icon"><span class="check-icon-special"></span> At least 1 special char</div>
  </div>
</div>