'use strict';

(() => {
  const template = document.createElement('template');

  template.innerHTML = /* html */ `<style>
      .container-input-character-checker, 
      .textfield, 
      .container-progress-bar, 
      .progress-bar {
        width: 100%;
        position: relative;
      }
      .text-end {
        text-align: end;
      }
      .font-size-14 {
        font-size: 14px;
      }
      .textfield {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 100%;
        padding: 0.375rem 0.75rem;
        line-height: 1.5;
        color: #212529;
        background-color: #fff;
        background-clip: padding-box;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        font-size: inherit;
        font-family: inherit;
        font-weight: normal;
        border-radius: 0.25rem;
        border: 1px solid #ced4da;
        resize: vertical;
        font-family: inherit;
        margin: 0;
      }
      .textfield:focus {
        outline: 2px solid #84d1f4;
      }
      .container-progress-bar, .progress-bar {
        height: 8px;
      }
      .container-progress-bar {
        border: 1px solid #ced4da;
        overflow: hidden;
      }
      .container-progress-bar, .message {
        margin-top: 8px;
      }
      .d-flex {
        display: flex;
      }
      .container-icon {
        text-align: center;
        align-items: center;
        display: -webkit-box;
        -webkit-box-align: center;
        padding: 0 0.75rem;
        border-bottom: 1px solid #ced4da;
        border-top: 1px solid #ced4da;
        vertical-align:middle;
      }
      .container-icon svg {
        display: table-cell;
        vertical-align: middle;
      }
      .icon-left {
        border-top-left-radius: 0.25rem;
        border-bottom-left-radius: 0.25rem;
        border-left: 1px solid #ced4da;
      }
      .icon-right {
        border-top-right-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
        border-right: 1px solid #ced4da;
      }
      .cursor-pointer {
        cursor: pointer;
      }
      .cursor-pointer:hover {
        opacity: 0.7;
      }
    </style>

    <div class="container-input-character-checker">
      <div class="container-count-output">
        <div class="text-end font-size-14 count-output" part="count-output"></div>
      </div>
      <div class="d-flex">
        <div class="container-icon-left" part="icon-left"></div>
        <textarea class="textfield textarea-field" part="textfield" placeholder=""></textarea>
        <div class="container-icon-right" part="icon-right"></div>
      </div>
      <div class="section-progress-bar">
        <div class="container-progress-bar">
          <div
            class="progress-bar"
            role="progressbar"
            style="width: 0%"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <div class="message" part="message"></div>
    </div>
  `;

  const inputField = /* html */ `<input class="textfield textarea-field" part="textfield" type="text" placeholder="" />`;

  class InputCharacterChecker extends HTMLElement {
    #root = null;
    #DOM = {};
    #defaultSettings = {
      lengthCharacter: 8,
      heightField: '80px',
      placeholderField: '',
      BgColorBar: '#f5f5f5',
      BgColorSuccess: '#3fa5f2',
      BgColorDanger: '#a81111',
      heightBar: '8px',
      borderRadiusBar: '0.45rem',
      displayMessage: 'none',
      textMessageSuccess: '',
      textMessageDanger: '',
      colorMessageSuccess: '#20961e',
      colorMessageDanger: '#20961e',
      fontSizeMessage: 'inherit',
      displayBar: '',
      charLimit: '',
      typeInput: 'text',
      requiredField: '',
      bgIcon: '#f1f1f1',
    };
    #borderInputLeft = '0 0.25rem 0.25rem 0';
    #borderInputRight = '0.25rem 0 0 0.25rem';
    textField = null;
    #charLimit = false;

    constructor() {
      super();
      this.#root = this.attachShadow({ mode: 'closed' });
      this.#root.appendChild(template.content.cloneNode(true));
      this.#charLimit = this.hasAttribute('char-limit') && this.getAttribute('char-limit') === 'on' ? true : false;
      this.#getAllElements();
      this.#setDefaultSettings();
      this.#addEvents();
    }

    // connectedCallback() {}

    static get observedAttributes() {
      return [
        'input-field',
        'length-character',
        'placeholder-field',
        'value-field',
        'height-field',
        'bg-color-bar',
        'bg-color-success',
        'bg-color-danger',
        'height-bar',
        'border-radius-bar',
        'display-message',
        'text-message-success',
        'text-message-danger',
        'color-message-success',
        'color-message-danger',
        'font-size-message',
        'display-bar',
        'display-count-output',
        'type-input',
        'required-field',
        'bg-icon',
      ];
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'input-field' && this.getAttribute('input-field') === 'input') {
        this.textField.outerHTML = inputField;
        this.textField = this.#root.querySelector('.textarea-field');
        this.textField.addEventListener('input', (e) => this.#getTextfieldValue(e));
        this.textField.style.resize = 'none';
        if (this.hasAttribute('with-icon')) {
          if (this.getAttribute('with-icon') === 'left') {
            this.textField.style.borderRadius = this.#borderInputLeft;
          } else if (this.getAttribute('with-icon') === 'right') {
            this.textField.style.borderRadius = this.#borderInputRight;
          }
        }
      } else if (name === 'length-character') {
        this.#defaultSettings.lengthCharacter = Number(newValue);
        this.#DOM.countOutput.innerText = '0 / ' + this.#defaultSettings.lengthCharacter;
      } else if (name === 'placeholder-field') {
        this.textField.placeholder = newValue;
      } else if (name === 'value-field') {
        this.textField.value = newValue;
      } else if (name === 'height-field') {
        this.textField.style.height = newValue;
      } else if (name === 'bg-color-bar') {
        this.#DOM.containerProgressBar.style.backgroundColor = newValue;
      } else if (name === 'bg-color-success') {
        this.#defaultSettings.BgColorSuccess = newValue;
        this.#DOM.progressBar.style.background = newValue;
      } else if (name === 'bg-color-danger') {
        this.#defaultSettings.BgColorDanger = newValue;
      } else if (name === 'height-bar') {
        this.#DOM.containerProgressBar.style.height = newValue;
        this.#DOM.progressBar.style.height = newValue;
      } else if (name === 'border-radius-bar') {
        this.#DOM.containerProgressBar.style.borderRadius = newValue;
        this.#DOM.progressBar.style.borderRadius = newValue;
      } else if (name === 'display-message') {
        this.#DOM.message.style.display = newValue;
      } else if (name === 'text-message-success') {
        this.#DOM.message.innerText = newValue;
        this.#defaultSettings.textMessageSuccess = newValue;
      } else if (name === 'text-message-danger') {
        this.#defaultSettings.textMessageDanger = newValue;
      } else if (name === 'color-message-success') {
        this.#DOM.message.style.color = newValue;
        this.#defaultSettings.colorMessageSuccess = newValue;
      } else if (name === 'color-message-danger') {
        this.#defaultSettings.colorMessageDanger = newValue;
      } else if (name === 'font-size-message') {
        this.#DOM.message.style.fontSize = newValue;
      } else if (name === 'display-bar' && this.getAttribute('display-bar') === 'hide') {
        this.#DOM.sectionProgressBar.innerHTML = '';
      } else if (name === 'display-count-output' && this.getAttribute('display-count-output') === 'hide') {
        this.#DOM.containerCountOutput.innerHTML = '';
      } else if (name === 'type-input' && this.hasAttribute('input-field') && this.getAttribute('input-field') === 'input') {
        this.textField.type = newValue;
      } else if (name === 'required-field' && this.getAttribute('required-field') === 'required') {
        this.textField.required = 'required';
      } else if (name === 'bg-icon') {
        this.#DOM.iconLeft.style.background = newValue;
        this.#DOM.iconRight.style.background = newValue;
      }
    }

    #getAllElements() {
      this.#DOM.containerCountOutput = this.#root.querySelector('.container-count-output');
      this.#DOM.countOutput = this.#root.querySelector('.count-output');
      this.textField = this.#root.querySelector('.textarea-field');
      this.#DOM.sectionProgressBar = this.#root.querySelector('.section-progress-bar');
      this.#DOM.containerProgressBar = this.#root.querySelector('.container-progress-bar');
      this.#DOM.progressBar = this.#root.querySelector('.progress-bar');
      this.#DOM.message = this.#root.querySelector('.message');
      this.#DOM.iconLeft = this.#root.querySelector('.container-icon-left');
      this.#DOM.iconRight = this.#root.querySelector('.container-icon-right');
    }

    #setDefaultSettings() {
      this.#DOM.countOutput.innerText = '0 / ' + this.#defaultSettings.lengthCharacter;
      this.textField.style.height = this.#defaultSettings.heightField;
      this.textField.placeholder = this.#defaultSettings.placeholderField;
      this.#DOM.containerProgressBar.style.backgroundColor = this.#defaultSettings.BgColorBar;
      this.#DOM.progressBar.style.background = this.#defaultSettings.BgColorSuccess;
      this.#DOM.progressBar.style.height = this.#defaultSettings.heightBar;
      this.#DOM.containerProgressBar.style.height = this.#defaultSettings.heightBar;
      this.#DOM.containerProgressBar.style.borderRadius = this.#defaultSettings.borderRadiusBar;
      this.#DOM.progressBar.style.borderRadius = this.#defaultSettings.borderRadiusBar;
      this.#DOM.message.style.display = this.#defaultSettings.displayMessage;
      this.#DOM.message.style.color = this.#defaultSettings.colorMessageSuccess;
      this.#DOM.message.style.fontSize = this.#defaultSettings.fontSizeMessage;
      this.#DOM.progressBar.style.display = this.#defaultSettings.displayBar;
      this.#setIcon();
    }

    #addEvents() {
      this.textField.addEventListener('input', (e) => this.#getTextfieldValue(e));
    }

    #getTextfieldValue(e) {
      this.#setProgressBar(e);
      this.textField.dispatchEvent(new CustomEvent('event-input-textfield'));
    }

    #handleIcon(e) {
      e.currentTarget.dispatchEvent(new CustomEvent('event-icon-button', { detail: this.textField.value }));
    }

    #setPositionOfIcon(icon, iconClass, borderIcon) {
      icon.innerHTML = `<slot class="slot-for-svg"></slot>`;
      icon.classList.add('container-icon', iconClass);
      this.textField.style.borderRadius = borderIcon;
      icon.style.background = this.#defaultSettings.bgIcon;
    }

    #setEventToIcon(icon) {
      icon.classList.add('cursor-pointer');
      icon.addEventListener('click', (e) => this.#handleIcon(e));
      this.iconField = icon;
    }

    #setIcon() {
      if (this.hasAttribute('with-icon')) {
        if (this.getAttribute('with-icon') === 'left') {
          this.#setPositionOfIcon(this.#DOM.iconLeft, 'icon-left', this.#borderInputLeft);
          if (this.hasAttribute('event-icon') && this.getAttribute('event-icon') === 'on') {
            this.#setEventToIcon(this.#DOM.iconLeft);
          }
        } else if (this.getAttribute('with-icon') === 'right') {
          this.#setPositionOfIcon(this.#DOM.iconRight, 'icon-right', this.#borderInputRight);
          if (this.hasAttribute('event-icon') && this.getAttribute('event-icon') === 'on') {
            this.#setEventToIcon(this.#DOM.iconRight);
          }
        }
      }
    }

    #setProgressBarAndCountOutput(lengthOfTextfield) {
      this.#DOM.progressBar.style.width = (lengthOfTextfield * 100) / this.#defaultSettings.lengthCharacter + '%';
      this.#DOM.countOutput.innerText = lengthOfTextfield + ' / ' + this.#defaultSettings.lengthCharacter;
    }

    #setSuccessValues() {
      this.#DOM.progressBar.style.background = this.#defaultSettings.BgColorSuccess;
      this.#DOM.message.innerText = this.#defaultSettings.textMessageSuccess;
      this.#DOM.message.style.color = this.#defaultSettings.colorMessageSuccess;
    }

    #setDangerValues() {
      this.#DOM.progressBar.style.background = this.#defaultSettings.BgColorDanger;
      this.#DOM.message.innerText = this.#defaultSettings.textMessageDanger;
      this.#DOM.message.style.color = this.#defaultSettings.colorMessageDanger;
    }

    #setProgressBar(e) {
      const lengthOfTextfield = e.currentTarget.value.length;

      if (this.#charLimit === false) {
        this.#setProgressBarAndCountOutput(lengthOfTextfield);
        if (lengthOfTextfield > this.#defaultSettings.lengthCharacter) {
          this.#setDangerValues();
        } else {
          this.#setSuccessValues();
        }
      } else {
        if (lengthOfTextfield <= this.#defaultSettings.lengthCharacter) {
          this.#setProgressBarAndCountOutput(lengthOfTextfield);
          this.#setSuccessValues();
        } else {
          e.currentTarget.value = e.currentTarget.value.slice(0, this.#defaultSettings.lengthCharacter);
          this.#setDangerValues();
        }
      }
    }

    // ===============================
    // Validate Functions
    // ===============================
    #isNumber = (input) => {
      const regex = /^[-+]?[0-9]+$/;
      return regex.test(input);
    };

    #isLetter = (input) => {
      const regex = /^[-+]?[a-zA-ZäüöÄÜÖß]+$/;
      return regex.test(input);
    };

    #isNumberORLetter = (input) => {
      const regex = /^[-+]?[0-9a-zA-ZäüöÄÜÖß]+$/;
      return regex.test(input);
    };

    #isNumberInText = (input) => {
      const numbers = /\d+/;
      return numbers.test(input);
    };

    #isSpecial = (input) => {
      const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
      return specialChars.test(input);
    };

    #isSpecialAndNumbers = (input) => {
      const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
      const numbers = /\d+/;
      return specialChars.test(input) && numbers.test(input);
    };

    #validateEmail(email) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
      }
      return false;
    }

    #makeSlug(str) {
      const umlauts = [
        ['ä', 'ae'],
        ['ö', 'oe'],
        ['ü', 'ue'],
        ['ß', 'ss'],
      ];

      umlauts.forEach((value) => (str = str.toLowerCase().replaceAll(value[0], value[1])));
      return str
        .replaceAll(/[^a-z0-9\s]+/g, '')
        .replaceAll(/[\s]+/g, ' ')
        .trim()
        .replaceAll(' ', '-');
    }

    // ===============================
    // Public Functions
    // ===============================
    resetTextField() {
      this.textField.value = '';
      this.#DOM.message.innerText = this.#defaultSettings.textMessageSuccess;
      this.#DOM.message.style.color = this.#defaultSettings.colorMessageSuccess;
      this.#setProgressBarAndCountOutput(0);
    }

    setInputLength(inputLength) {
      this.#setProgressBarAndCountOutput(inputLength);
    }

    onlyNumbers() {
      if (this.textField.value !== '') {
        const l = this.textField.value.length - 1;
        if (this.#isNumber(this.textField.value[l]) === false) {
          this.textField.value = this.textField.value.slice(0, l);
          this.setInputLength(this.textField.value.length);
          return false;
        }
      }
      return true;
    }

    onlyLetters() {
      if (this.textField.value !== '') {
        const l = this.textField.value.length - 1;
        if (this.#isLetter(this.textField.value[l]) === false) {
          this.textField.value = this.textField.value.slice(0, l);
          this.setInputLength(this.textField.value.length);
          return false;
        }
      }
      return true;
    }

    onlyNumbersAndLetters() {
      if (this.textField.value !== '') {
        const l = this.textField.value.length - 1;
        if (this.#isNumberORLetter(this.textField.value[l]) === false) {
          this.textField.value = this.textField.value.slice(0, l);
          this.setInputLength(this.textField.value.length);
          return false;
        }
      }
      return true;
    }

    checkNumber() {
      if (this.#isNumberInText(this.textField.value) === false) {
        return false;
      }
      return true;
    }

    checkSpecial() {
      if (this.#isSpecial(this.textField.value) === false) {
        return false;
      }
      return true;
    }

    checkSpecialAndNumbers() {
      if (this.#isSpecialAndNumbers(this.textField.value) === false) {
        return false;
      }
      return true;
    }

    isEmailAddress() {
      return this.#validateEmail(this.textField.value);
    }

    toSlug() {
      return this.#makeSlug(this.textField.value);
    }

    checkIsOneUpperCase = (value) => {
      const hasUpperCase = /[A-Z]/;
      return hasUpperCase.test(value);
    };

    checkInputLength = () => {
      if (this.textField.value.length < this.#defaultSettings.lengthCharacter) {
        return false;
      }
      return true;
    };
  }

  customElements.define('input-character-checker', InputCharacterChecker);
})();
