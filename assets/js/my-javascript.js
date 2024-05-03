'use strict';

(() => {
  // =========================
  // 	DOM
  const DOM = {};
  // 3. - 13. Example: select the "input-character-checker"
  DOM.inputCharacterChecker_Demo_1 = document.querySelector('input-character-checker.demo_1');
  DOM.inputCharacterChecker_Demo_2 = document.querySelector('input-character-checker.demo_2');
  DOM.inputCharacterChecker_Demo_3 = document.querySelector('input-character-checker.demo_3');
  DOM.inputCharacterChecker_Demo_4 = document.querySelector('input-character-checker.demo_4');
  DOM.inputCharacterChecker_Demo_5 = document.querySelector('input-character-checker.demo_5');
  DOM.inputCharacterChecker_Demo_6 = document.querySelector('input-character-checker.demo_6');
  DOM.inputCharacterChecker_Demo_8 = document.querySelector('input-character-checker.demo_8');
  DOM.inputCharacterChecker_Demo_9 = document.querySelector('input-character-checker.demo_9');
  DOM.inputCharacterChecker_Demo_10 = document.querySelector('input-character-checker.demo_10');

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

        // use the "setInputLength()" methode:
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

  init();
})();
