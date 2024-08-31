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
    <div class="text-danger mt-2 password-output" style="display: none">Please enter your password</div>
  </div>
</div>