'use strict';

(() => {
  // =========================
  // 	VARs
  // 18. Example: check input for password
  const eyeOpen = `<svg xmlns="http://www.w3.org/2000/svg" style="height: 18px; width: 18px; fill: #575757; margin-top: -4px" viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg>`;
  const eyeClosed = `<svg xmlns="http://www.w3.org/2000/svg" style="height: 16px; width: 16px; fill: #575757; margin-top: -4px" viewBox="0 0 640 512"><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"/></svg>`;
  const checked = `<svg xmlns="http://www.w3.org/2000/svg" style="height: 18px; width: 18px; fill: green; margin-top: -4px" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>`;
  const unChecked = `<svg xmlns="http://www.w3.org/2000/svg" style="height: 16px; width: 16px; fill: red; margin-top: -4px" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>`;
  let isTogglePassword = true;
  let isCorrectPassword = { countChars: false, nbr: false, upperCase: false, specialChar: false };

  // =========================
  // 	DOM
  const DOM = {};
  // Select the "input-character-checker"
  DOM.inputCharacterChecker_Demo_1 = document.querySelector('input-character-checker.demo_1');
  DOM.inputCharacterChecker_Demo_2 = document.querySelector('input-character-checker.demo_2');
  DOM.inputCharacterChecker_Demo_3 = document.querySelector('input-character-checker.demo_3');
  DOM.inputCharacterChecker_Demo_4 = document.querySelector('input-character-checker.demo_4');
  DOM.inputCharacterChecker_Demo_5 = document.querySelector('input-character-checker.demo_5');
  DOM.inputCharacterChecker_Demo_6 = document.querySelector('input-character-checker.demo_6');
  DOM.inputCharacterChecker_Demo_8 = document.querySelector('input-character-checker.demo_8');
  DOM.inputCharacterChecker_Demo_9 = document.querySelector('input-character-checker.demo_9');
  DOM.inputCharacterChecker_Demo_10 = document.querySelector('input-character-checker.demo_10');
  DOM.inputCharacterChecker_Demo_14 = document.querySelector('input-character-checker.demo_14');
  DOM.inputCharacterChecker_Demo_17 = document.querySelector('input-character-checker.demo_17');
  DOM.inputCharacterChecker_Demo_18 = document.querySelector('input-character-checker.demo_18');

  // 18. Example: check input for password
  DOM.checkIcon_1 = document.querySelector('span.check-icon-1');
  DOM.checkIcon_2 = document.querySelector('span.check-icon-2');
  DOM.checkIcon_3 = document.querySelector('span.check-icon-3');
  DOM.checkIcon_4 = document.querySelector('span.check-icon-4');
  DOM.btnCheckPassword = document.querySelector('button.btn-check-password');

  // 5. Example: select the reset button
  DOM.btnReset_1 = document.querySelector('.btn-reset-1');

  // 6. Example: select the reset button
  DOM.btnReset_2 = document.querySelector('.btn-reset-2');

  // 9. Example: select check is email button & output
  DOM.btnIsEmail = document.querySelector('.btn-is-email');
  DOM.isEmailOutput = document.querySelector('.is-email-output');

  // 11. Example: select color code & color output
  DOM.colorCode = document.querySelector('.color-code');
  DOM.colorOutput = document.querySelector('.color-output');

  // 12. Example: select check is email button & output
  DOM.getSlugOutput = document.querySelector('.get-slug-output');

  // =========================
  // 	INIT
  const init = () => {
    // 3. - 7. Example: add the custom event to the textfield
    DOM.inputCharacterChecker_Demo_1.textField.addEventListener('event-input-textfield', handleTextfieldValue_1);
    DOM.inputCharacterChecker_Demo_2.textField.addEventListener('event-input-textfield', handleTextfieldValue_2);
    DOM.inputCharacterChecker_Demo_3.textField.addEventListener('event-input-textfield', handleTextfieldValue_1);
    DOM.inputCharacterChecker_Demo_4.textField.addEventListener('event-input-textfield', handleTextfieldValue_1);
    DOM.inputCharacterChecker_Demo_5.textField.addEventListener('event-input-textfield', handleTextfieldValue_5);
    DOM.inputCharacterChecker_Demo_8.textField.addEventListener('event-input-textfield', handleTextfieldValue_8);

    // 5. Example: add the event to the reset button
    DOM.btnReset_1.addEventListener('click', resetTextField_1);

    // 6. Example: add the event to the reset button
    DOM.btnReset_2.addEventListener('click', resetTextField_2);

    // 9. Example: add the event to is email button
    DOM.btnIsEmail.addEventListener('click', checkIfIsEmail);

    // 12. Example: add the event to get-slug button
    DOM.inputCharacterChecker_Demo_9.textField.addEventListener('event-input-textfield', getSlug);

    // 13. Example: add the event to only numbers with the onlyNumbers() method
    DOM.inputCharacterChecker_Demo_10.textField.addEventListener('event-input-textfield', allowOnlyNumbers);

    // 14. Example: textarea + icon + event
    DOM.inputCharacterChecker_Demo_14.iconField.addEventListener('event-icon-button', (e) => {
      console.log('Input value:', e.detail);
      console.log('Input length:', e.detail.length);
      console.log('Input icon container:', e.currentTarget);

      // do something...
    });

    // 17. Example: input + icon + event
    DOM.inputCharacterChecker_Demo_17.iconField.addEventListener('event-icon-button', (e) => {
      console.log('Input value:', e.detail);
      console.log('Input length:', e.detail.length);
      console.log('Input icon container:', e.currentTarget);

      // do something...
    });

    // 18. Example: check input for password
    DOM.inputCharacterChecker_Demo_18.innerHTML = eyeOpen;
    DOM.checkIcon_1.innerHTML = unChecked;
    DOM.checkIcon_2.innerHTML = unChecked;
    DOM.checkIcon_3.innerHTML = unChecked;
    DOM.checkIcon_4.innerHTML = unChecked;
    DOM.inputCharacterChecker_Demo_18.iconField.addEventListener('event-icon-button', togglePassword);
    DOM.inputCharacterChecker_Demo_18.textField.addEventListener('event-input-textfield', checkPassword);
    DOM.btnCheckPassword.addEventListener('click', sendPassword);
  };

  // =========================
  // 	FUNCTIONS

  // 3. + 5. + 6. Example: get the textfield value an length
  const handleTextfieldValue_1 = (e) => {
    console.log(e.currentTarget.value); // get the value of the textfield
    console.log(e.currentTarget.value.length); // Number of letters

    // do something...
  };

  // 4. Example:
  const color_1 = '#000000';
  const color_2 = '#0f6da3';
  const color_3 = '#14c7c4';
  const color_4 = '#b514c7';
  const color_5 = '#1bb322';
  const color_6 = '#ab0f0f';

  DOM.inputCharacterChecker_Demo_2.setAttribute('color-message-success', color_1);

  const handleTextfieldValue_2 = (e) => {
    // const valueInput = e.currentTarget.value;  // => if needed
    const countChar = e.currentTarget.value.length;

    if (countChar === 0) {
      DOM.inputCharacterChecker_Demo_2.setAttribute('text-message-success', 'Enter your password');
      DOM.inputCharacterChecker_Demo_2.setAttribute('color-message-success', color_1);
    } else if (countChar <= 2) {
      DOM.inputCharacterChecker_Demo_2.setAttribute('bg-color-success', color_2);
      DOM.inputCharacterChecker_Demo_2.setAttribute('text-message-success', 'Far too unsafe');
      DOM.inputCharacterChecker_Demo_2.setAttribute('color-message-success', color_2);
    } else if (countChar <= 4) {
      DOM.inputCharacterChecker_Demo_2.setAttribute('bg-color-success', color_3);
      DOM.inputCharacterChecker_Demo_2.setAttribute('text-message-success', 'Enter more');
      DOM.inputCharacterChecker_Demo_2.setAttribute('color-message-success', color_3);
    } else if (countChar <= 6) {
      DOM.inputCharacterChecker_Demo_2.setAttribute('bg-color-success', color_4);
      DOM.inputCharacterChecker_Demo_2.setAttribute('text-message-success', 'A little more');
      DOM.inputCharacterChecker_Demo_2.setAttribute('color-message-success', color_4);
    } else if (countChar <= 8) {
      DOM.inputCharacterChecker_Demo_2.setAttribute('bg-color-success', color_5);
      DOM.inputCharacterChecker_Demo_2.setAttribute('text-message-success', 'Really good');
      DOM.inputCharacterChecker_Demo_2.setAttribute('color-message-success', color_5);
    } else {
      DOM.inputCharacterChecker_Demo_2.setAttribute('bg-color-success', color_6);
      DOM.inputCharacterChecker_Demo_2.setAttribute('text-message-success', 'Too many letters');
    }
  };

  // 5. Example: Reset textfield
  const resetTextField_1 = (e) => {
    DOM.inputCharacterChecker_Demo_3.resetTextField();
  };

  // 6. Example: Reset textfield
  const resetTextField_2 = (e) => {
    DOM.inputCharacterChecker_Demo_4.resetTextField();
  };

  // 7. Example: only numbers
  const isNumber = (input) => {
    const regex = /^[-+]?[0-9]+$/;
    return regex.test(input);
  };

  const handleTextfieldValue_5 = (e) => {
    if (e.currentTarget.value !== '') {
      const l = e.currentTarget.value.length - 1;

      if (isNumber(e.currentTarget.value[l]) === false) {
        e.currentTarget.value = e.currentTarget.value.slice(0, l);

        // use the "setInputLength()" method:
        DOM.inputCharacterChecker_Demo_5.setInputLength(e.currentTarget.value.length);
      }
    }
  };

  // 9. Example: check if is email address
  const checkIfIsEmail = (e) => {
    if (DOM.inputCharacterChecker_Demo_6.isEmailAddress()) {
      // do somethings...
      DOM.inputCharacterChecker_Demo_6.textField.style.border = '';
      DOM.isEmailOutput.innerText = 'It is a valid email address';
    } else {
      // do somethings...
      DOM.inputCharacterChecker_Demo_6.textField.style.border = '1px solid red';
      DOM.isEmailOutput.innerText = 'It is NOT a valid email address';
    }
  };

  // 11. Example: set color output
  const handleTextfieldValue_8 = (e) => {
    DOM.colorCode.innerText = e.currentTarget.value;
    DOM.colorOutput.style.backgroundColor = e.currentTarget.value;
  };

  // 12. Example: get slug
  const getSlug = (e) => {
    DOM.getSlugOutput.innerText = DOM.inputCharacterChecker_Demo_9.toSlug();
  };

  // 13. Example: only numbers with the onlyNumbers() method
  const allowOnlyNumbers = (e) => {
    const check = DOM.inputCharacterChecker_Demo_10.onlyNumbers();
    if (check === false) {
      DOM.inputCharacterChecker_Demo_10.setAttribute('text-message-success', 'Please enter only numbers');
    } else {
      DOM.inputCharacterChecker_Demo_10.setAttribute('text-message-success', '');
    }
  };

  // 18. Example: check input for password
  const togglePassword = (e) => {
    isTogglePassword = !isTogglePassword;

    if (isTogglePassword === true) {
      DOM.inputCharacterChecker_Demo_18.innerHTML = eyeOpen;
      DOM.inputCharacterChecker_Demo_18.setAttribute('type-input', 'password');
    } else {
      DOM.inputCharacterChecker_Demo_18.innerHTML = eyeClosed;
      DOM.inputCharacterChecker_Demo_18.setAttribute('type-input', 'text');
    }
  };

  const checkPassword = (e) => {
    // At least 10 characters
    if (DOM.inputCharacterChecker_Demo_18.checkInputLength() === true) {
      DOM.checkIcon_1.innerHTML = checked;
      isCorrectPassword.countChars = true;
    } else {
      DOM.checkIcon_1.innerHTML = unChecked;
      isCorrectPassword.countChars = false;
    }

    // At least 1 number
    if (DOM.inputCharacterChecker_Demo_18.checkNumber(e.currentTarget.value) === true) {
      DOM.checkIcon_2.innerHTML = checked;
      isCorrectPassword.nbr = true;
    } else {
      DOM.checkIcon_2.innerHTML = unChecked;
      isCorrectPassword.nbr = false;
    }

    // At least 1 upper case letter
    if (DOM.inputCharacterChecker_Demo_18.checkIsOneUpperCase(e.currentTarget.value) === true) {
      DOM.checkIcon_3.innerHTML = checked;
      isCorrectPassword.upperCase = true;
    } else {
      DOM.checkIcon_3.innerHTML = unChecked;
      isCorrectPassword.upperCase = false;
    }

    // At least 1 special char
    if (DOM.inputCharacterChecker_Demo_18.checkSpecial(e.currentTarget.value) === true) {
      DOM.checkIcon_4.innerHTML = checked;
      isCorrectPassword.specialChar = true;
    } else {
      DOM.checkIcon_4.innerHTML = unChecked;
      isCorrectPassword.specialChar = false;
    }
  };

  const sendPassword = (e) => {
    if (
      isCorrectPassword.countChars === true &&
      isCorrectPassword.nbr === true &&
      isCorrectPassword.upperCase === true &&
      isCorrectPassword.specialChar === true
    ) {
      alert('The password is correct');
      // do something...
    } else {
      alert('The password is NOT correct');
      // do something...
    }
  };

  init();
})();
