"use strict";(()=>{const e=document.createElement("template");e.innerHTML=`<style>
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
  `;class t extends HTMLElement{#root=null;#DOM={};#defaultSettings={lengthCharacter:8,heightField:"80px",placeholderField:"",BgColorBar:"#f5f5f5",BgColorSuccess:"#3fa5f2",BgColorDanger:"#a81111",heightBar:"8px",borderRadiusBar:"0.45rem",displayMessage:"none",textMessageSuccess:"",textMessageDanger:"",colorMessageSuccess:"#20961e",colorMessageDanger:"#20961e",fontSizeMessage:"inherit",displayBar:"",charLimit:"",typeInput:"text",requiredField:"",bgIcon:"#f1f1f1"};#borderInputLeft="0 0.25rem 0.25rem 0";#borderInputRight="0.25rem 0 0 0.25rem";textField=null;#charLimit=!1;constructor(){super(),this.#root=this.attachShadow({mode:"closed"}),this.#root.appendChild(e.content.cloneNode(!0)),this.#charLimit=!(!this.hasAttribute("char-limit")||"on"!==this.getAttribute("char-limit")),this.#getAllElements(),this.#setDefaultSettings(),this.#addEvents()}static get observedAttributes(){return["input-field","length-character","placeholder-field","value-field","height-field","bg-color-bar","bg-color-success","bg-color-danger","height-bar","border-radius-bar","display-message","text-message-success","text-message-danger","color-message-success","color-message-danger","font-size-message","display-bar","display-count-output","type-input","required-field","bg-icon"]}attributeChangedCallback(e,t,s){"input-field"===e&&"input"===this.getAttribute("input-field")?(this.textField.outerHTML='<input class="textfield textarea-field" part="textfield" type="text" placeholder="" />',this.textField=this.#root.querySelector(".textarea-field"),this.textField.addEventListener("input",e=>this.#getTextfieldValue(e)),this.textField.style.resize="none",this.hasAttribute("with-icon")&&("left"===this.getAttribute("with-icon")?this.textField.style.borderRadius=this.#borderInputLeft:"right"===this.getAttribute("with-icon")&&(this.textField.style.borderRadius=this.#borderInputRight))):"length-character"===e?(this.#defaultSettings.lengthCharacter=Number(s),this.#DOM.countOutput.innerText="0 / "+this.#defaultSettings.lengthCharacter):"placeholder-field"===e?this.textField.placeholder=s:"value-field"===e?this.textField.value=s:"height-field"===e?this.textField.style.height=s:"bg-color-bar"===e?this.#DOM.containerProgressBar.style.backgroundColor=s:"bg-color-success"===e?(this.#defaultSettings.BgColorSuccess=s,this.#DOM.progressBar.style.background=s):"bg-color-danger"===e?this.#defaultSettings.BgColorDanger=s:"height-bar"===e?(this.#DOM.containerProgressBar.style.height=s,this.#DOM.progressBar.style.height=s):"border-radius-bar"===e?(this.#DOM.containerProgressBar.style.borderRadius=s,this.#DOM.progressBar.style.borderRadius=s):"display-message"===e?this.#DOM.message.style.display=s:"text-message-success"===e?(this.#DOM.message.innerText=s,this.#defaultSettings.textMessageSuccess=s):"text-message-danger"===e?this.#defaultSettings.textMessageDanger=s:"color-message-success"===e?(this.#DOM.message.style.color=s,this.#defaultSettings.colorMessageSuccess=s):"color-message-danger"===e?this.#defaultSettings.colorMessageDanger=s:"font-size-message"===e?this.#DOM.message.style.fontSize=s:"display-bar"===e&&"hide"===this.getAttribute("display-bar")?this.#DOM.sectionProgressBar.innerHTML="":"display-count-output"===e&&"hide"===this.getAttribute("display-count-output")?this.#DOM.containerCountOutput.innerHTML="":"type-input"===e&&this.hasAttribute("input-field")&&"input"===this.getAttribute("input-field")?this.textField.type=s:"required-field"===e&&"required"===this.getAttribute("required-field")?this.textField.required="required":"bg-icon"===e&&(this.#DOM.iconLeft.style.background=s,this.#DOM.iconRight.style.background=s)}#getAllElements(){this.#DOM.containerCountOutput=this.#root.querySelector(".container-count-output"),this.#DOM.countOutput=this.#root.querySelector(".count-output"),this.textField=this.#root.querySelector(".textarea-field"),this.#DOM.sectionProgressBar=this.#root.querySelector(".section-progress-bar"),this.#DOM.containerProgressBar=this.#root.querySelector(".container-progress-bar"),this.#DOM.progressBar=this.#root.querySelector(".progress-bar"),this.#DOM.message=this.#root.querySelector(".message"),this.#DOM.iconLeft=this.#root.querySelector(".container-icon-left"),this.#DOM.iconRight=this.#root.querySelector(".container-icon-right")}#setDefaultSettings(){this.#DOM.countOutput.innerText="0 / "+this.#defaultSettings.lengthCharacter,this.textField.style.height=this.#defaultSettings.heightField,this.textField.placeholder=this.#defaultSettings.placeholderField,this.#DOM.containerProgressBar.style.backgroundColor=this.#defaultSettings.BgColorBar,this.#DOM.progressBar.style.background=this.#defaultSettings.BgColorSuccess,this.#DOM.progressBar.style.height=this.#defaultSettings.heightBar,this.#DOM.containerProgressBar.style.height=this.#defaultSettings.heightBar,this.#DOM.containerProgressBar.style.borderRadius=this.#defaultSettings.borderRadiusBar,this.#DOM.progressBar.style.borderRadius=this.#defaultSettings.borderRadiusBar,this.#DOM.message.style.display=this.#defaultSettings.displayMessage,this.#DOM.message.style.color=this.#defaultSettings.colorMessageSuccess,this.#DOM.message.style.fontSize=this.#defaultSettings.fontSizeMessage,this.#DOM.progressBar.style.display=this.#defaultSettings.displayBar,this.#setIcon()}#addEvents(){this.textField.addEventListener("input",e=>this.#getTextfieldValue(e))}#getTextfieldValue(e){this.#setProgressBar(e),this.textField.dispatchEvent(new CustomEvent("event-input-textfield"))}#handleIcon(e){e.currentTarget.dispatchEvent(new CustomEvent("event-icon-button",{detail:this.textField.value}))}#setPositionOfIcon(e,t,s){e.innerHTML='<slot class="slot-for-svg"></slot>',e.classList.add("container-icon",t),this.textField.style.borderRadius=s,e.style.background=this.#defaultSettings.bgIcon}#setEventToIcon(e){e.classList.add("cursor-pointer"),e.addEventListener("click",e=>this.#handleIcon(e)),this.iconField=e}#setIcon(){this.hasAttribute("with-icon")&&("left"===this.getAttribute("with-icon")?(this.#setPositionOfIcon(this.#DOM.iconLeft,"icon-left",this.#borderInputLeft),this.hasAttribute("event-icon")&&"on"===this.getAttribute("event-icon")&&this.#setEventToIcon(this.#DOM.iconLeft)):"right"===this.getAttribute("with-icon")&&(this.#setPositionOfIcon(this.#DOM.iconRight,"icon-right",this.#borderInputRight),this.hasAttribute("event-icon")&&"on"===this.getAttribute("event-icon")&&this.#setEventToIcon(this.#DOM.iconRight)))}#setProgressBarAndCountOutput(e){this.#DOM.progressBar.style.width=100*e/this.#defaultSettings.lengthCharacter+"%",this.#DOM.countOutput.innerText=e+" / "+this.#defaultSettings.lengthCharacter}#setSuccessValues(){this.#DOM.progressBar.style.background=this.#defaultSettings.BgColorSuccess,this.#DOM.message.innerText=this.#defaultSettings.textMessageSuccess,this.#DOM.message.style.color=this.#defaultSettings.colorMessageSuccess}#setDangerValues(){this.#DOM.progressBar.style.background=this.#defaultSettings.BgColorDanger,this.#DOM.message.innerText=this.#defaultSettings.textMessageDanger,this.#DOM.message.style.color=this.#defaultSettings.colorMessageDanger}#setProgressBar(e){var t=e.currentTarget.value.length;!1===this.#charLimit?(this.#setProgressBarAndCountOutput(t),t>this.#defaultSettings.lengthCharacter?this.#setDangerValues():this.#setSuccessValues()):t<=this.#defaultSettings.lengthCharacter?(this.#setProgressBarAndCountOutput(t),this.#setSuccessValues()):(e.currentTarget.value=e.currentTarget.value.slice(0,t-1),this.#setDangerValues())}#isNumber=e=>{return/^[-+]?[0-9]+$/.test(e)};#isLetter=e=>{return/^[-+]?[a-zA-ZäüöÄÜÖß]+$/.test(e)};#isNumberORLetter=e=>{return/^[-+]?[0-9a-zA-ZäüöÄÜÖß]+$/.test(e)};#isNumberInText=e=>{return/\d+/.test(e)};#isSpecial=e=>{return/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(e)};#isSpecialAndNumbers=e=>{return/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(e)&&/\d+/.test(e)};#validateEmail(e){return!!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)}#makeSlug(t){return[["ä","ae"],["ö","oe"],["ü","ue"],["ß","ss"]].forEach(e=>t=t.toLowerCase().replaceAll(e[0],e[1])),t.replaceAll(/[^a-z0-9\s]+/g,"").replaceAll(/[\s]+/g," ").trim().replaceAll(" ","-")}resetTextField(){this.textField.value="",this.#DOM.message.innerText=this.#defaultSettings.textMessageSuccess,this.#DOM.message.style.color=this.#defaultSettings.colorMessageSuccess,this.#setProgressBarAndCountOutput(0)}setInputLength(e){this.#setProgressBarAndCountOutput(e)}onlyNumbers(){if(""!==this.textField.value){var e=this.textField.value.length-1;if(!1===this.#isNumber(this.textField.value[e]))return this.textField.value=this.textField.value.slice(0,e),this.setInputLength(this.textField.value.length),!1}return!0}onlyLetters(){if(""!==this.textField.value){var e=this.textField.value.length-1;if(!1===this.#isLetter(this.textField.value[e]))return this.textField.value=this.textField.value.slice(0,e),this.setInputLength(this.textField.value.length),!1}return!0}onlyNumbersAndLetters(){if(""!==this.textField.value){var e=this.textField.value.length-1;if(!1===this.#isNumberORLetter(this.textField.value[e]))return this.textField.value=this.textField.value.slice(0,e),this.setInputLength(this.textField.value.length),!1}return!0}checkNumber(){return!1!==this.#isNumberInText(this.textField.value)}checkSpecial(){return!1!==this.#isSpecial(this.textField.value)}checkSpecialAndNumbers(){return!1!==this.#isSpecialAndNumbers(this.textField.value)}isEmailAddress(){return this.#validateEmail(this.textField.value)}toSlug(){return this.#makeSlug(this.textField.value)}}customElements.define("input-character-checker",t)})();