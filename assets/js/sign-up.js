'use strict';

(() => {
  // =========================
  // 	DOM
  const DOM = {};
  DOM.sectionAccount = document.querySelector('section.account');

  DOM.emailHidden = DOM.sectionAccount.querySelector('input[name="email-hidden"]');
  DOM.emailInput = DOM.sectionAccount.querySelector('input-character-checker.email-input');

  DOM.passwordHidden = DOM.sectionAccount.querySelector('input[name="password-hidden"]');
  DOM.passwordInput = DOM.sectionAccount.querySelector('input-character-checker.password-input');

  DOM.checkIcon_length = DOM.sectionAccount.querySelector('span.check-icon-length');
  DOM.checkIcon_nbr = DOM.sectionAccount.querySelector('span.check-icon-nbr');
  DOM.checkIcon_upper = DOM.sectionAccount.querySelector('span.check-icon-upper');
  DOM.checkIcon_special = DOM.sectionAccount.querySelector('span.check-icon-special');

  DOM.btnSubmit = DOM.sectionAccount.querySelector('button.btn-submit');

  // =========================
  // 	VARS
  const eyeOpen = `<svg xmlns="http://www.w3.org/2000/svg" style="height: 18px; width: 18px; fill: #575757; margin-top: -4px" viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg>`;

  const eyeClosed = `<svg xmlns="http://www.w3.org/2000/svg" style="height: 16px; width: 16px; fill: #575757; margin-top: -4px" viewBox="0 0 640 512"><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"/></svg>`;

  const checked = `<svg xmlns="http://www.w3.org/2000/svg" style="height: 18px; width: 18px; fill: green; margin-top: -4px" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>`;

  const unChecked = `<svg xmlns="http://www.w3.org/2000/svg" style="height: 16px; width: 16px; fill: red; margin-top: -4px" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>`;

  const borderError = '1px solid red';

  // =========================
  // 	INIT
  const init = () => {
    DOM.passwordInput.innerHTML = eyeOpen;

    DOM.checkIcon_length.innerHTML = unChecked;
    DOM.checkIcon_nbr.innerHTML = unChecked;
    DOM.checkIcon_upper.innerHTML = unChecked;
    DOM.checkIcon_special.innerHTML = unChecked;

    DOM.emailInput.textField.addEventListener('event-input-textfield', (e) => {
      DOM.emailInput.setHiddenElement(DOM.emailHidden);
      DOM.emailInput.setAttribute('display-message', 'none');
      DOM.emailInput.setBorderToDefault();
    });

    DOM.passwordInput.iconField.addEventListener('event-icon-button', (e) => {
      DOM.passwordInput.toggleIconAndType(eyeOpen, eyeClosed);
    });

    DOM.passwordInput.textField.addEventListener('event-input-textfield', (e) => {
      checkPassword(DOM.passwordInput, DOM.checkIcon_length, DOM.checkIcon_nbr, DOM.checkIcon_upper, DOM.checkIcon_special);
      DOM.passwordInput.setHiddenElement(DOM.passwordHidden);
      DOM.passwordInput.setAttribute('text-message-success', '');
      DOM.passwordInput.setBorderToDefault();
    });

    DOM.btnSubmit.addEventListener('click', onSend);
  };

  // =========================
  // 	FUNCTIONS
  const checkPassword = (elem, icon_1, icon_2, icon_3, icon_4) => {
    // At least characters
    icon_1.innerHTML = elem.checkInputLength() === true ? checked : unChecked;
    // At least 1 number
    icon_2.innerHTML = elem.checkNumber() === true ? checked : unChecked;
    // At least 1 upper case letter
    icon_3.innerHTML = elem.checkIsOneUpperCase() === true ? checked : unChecked;
    // At least 1 special char
    icon_4.innerHTML = elem.checkSpecial() === true ? checked : unChecked;
  };

  const onSend = (e) => {
    if (DOM.emailInput.isEmailAddress() === false || DOM.passwordInput.isPasswordCorrect() === false) {
      e.preventDefault();
    }

    if (DOM.emailInput.isEmailAddress() === false) {
      DOM.emailInput.setAttribute('display-message', 'block');
      DOM.emailInput.setBorderToError(borderError);
    }

    if (DOM.passwordInput.isPasswordCorrect() === false) {
      DOM.passwordInput.setAttribute('text-message-success', 'Password does not fulfill all criteria');
      DOM.passwordInput.setBorderToError(borderError);
    }
  };

  init();
})();
