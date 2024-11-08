<div>
  <label class="form-label"><b>Password</b></label>
  <div>
    <input type="hidden" name="password-hidden" value="">
    <input-character-checker 
        class="password-input"
        input-field="input"
        length-character="8"
        disable-bar
        disable-count-output
        type-input="password"
        with-icon="right"
        event-icon
        color-message-success="red"
        display-message="block"
        placeholder-field="Your password..."
      >
    </input-character-checker>
    <div class="check-icon mt-3"><span class="check-icon-length"></span> At least 8 characters</div>
    <div class="check-icon"><span class="check-icon-nbr"></span> At least 1 number</div>
    <div class="check-icon"><span class="check-icon-upper"></span> At least 1 upper case letter</div>
    <div class="check-icon"><span class="check-icon-special"></span> At least 1 special char</div>
  </div>
</div>