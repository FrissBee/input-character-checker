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
        font-size: inherit;
        line-height: 1.5;
        color: #212529;
        background-color: #fff;
        background-clip: padding-box;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        font-family: inherit;
        font-weight: normal;
        border-radius: 0.25rem;
        border: 1px solid #ced4da;
      }

      .textfield:focus {
        outline: 2px solid #84d1f4;
      }

      .textarea-field {
        resize: vertical;
        font-family: inherit;
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
    </style>

    <div class="container-input-character-checker">
      <div class="container-count-output">
        <div class="text-end font-size-14 count-output" part="count-output"></div>
      </div>
      <div class="container-textfield">
        <textarea class="form-control textfield textarea-field" part="textfield" placeholder=""></textarea>
      </div>
      <div class="section-progress-bar">
        <div class="container-progress-bar">
          <div
            class="progress-bar"
            role="progressbar"
            style="width: 0%"
            aria-valuenow="5"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <div class="message" part="message"></div>
    </div>
  `;class t extends HTMLElement{#root=null;#DOM={};#defaultSettings={inputField:"",lengthCharacter:8,fieldHeight:"80px",placeholderField:"",BgColorBar:"#f5f5f5",BgColorSuccess:"#3fa5f2",BgColorDanger:"#a81111",heightBar:"8px",borderRadiusBar:"0.45rem",displayMessage:"none",textMessageSuccess:"",textMessageDanger:"",colorMessageSuccess:"#20961e",colorMessageDanger:"#20961e",fontSizeMessage:"inherit",displayBar:"",charLimit:""};textareaField=null;#charLimit=!1;constructor(){super(),this.#root=this.attachShadow({mode:"open"}),this.#root.appendChild(e.content.cloneNode(!0)),this.#charLimit=!(!this.hasAttribute("char-limit")||"on"!==this.getAttribute("char-limit")),this.#getAllElements(),this.#setDefaultSettings(),this.#addEvents()}static get observedAttributes(){return["input-field","length-character","placeholder-field","field-height","bg-color-bar","bg-color-success","bg-color-danger","height-bar","border-radius-bar","display-message","text-message-success","text-message-danger","color-message-success","color-message-danger","font-size-message","display-bar","display-count-output"]}attributeChangedCallback(e,t,s){"input-field"===e?"input"===this.getAttribute("input-field")&&(this.#DOM.containerTextfield.innerHTML='<input class="form-control textfield textarea-field" part="textfield" type="text" placeholder="" />',this.textareaField=this.#DOM.containerTextfield.querySelector(".textarea-field"),this.#defaultSettings.inputField=s,this.textareaField.addEventListener("input",e=>this.#getTextfieldValue(e))):"length-character"===e?(this.#defaultSettings.lengthCharacter=Number(s),this.#DOM.countOutput.innerText="0 / "+this.#defaultSettings.lengthCharacter):"placeholder-field"===e?this.textareaField.placeholder=s:"field-height"===e?this.textareaField.style.height=s:"bg-color-bar"===e?this.#DOM.containerProgressBar.style.backgroundColor=s:"bg-color-success"===e?(this.#defaultSettings.BgColorSuccess=s,this.#DOM.progressBar.style.backgroundColor=s):"bg-color-danger"===e?this.#defaultSettings.BgColorDanger=s:"height-bar"===e?(this.#DOM.containerProgressBar.style.height=s,this.#DOM.progressBar.style.height=s):"border-radius-bar"===e?(this.#DOM.containerProgressBar.style.borderRadius=s,this.#DOM.progressBar.style.borderRadius=s):"display-message"===e?this.#DOM.message.style.display=s:"text-message-success"===e?(this.#DOM.message.innerText=s,this.#defaultSettings.textMessageSuccess=s):"text-message-danger"===e?this.#defaultSettings.textMessageDanger=s:"color-message-success"===e?(this.#DOM.message.style.color=s,this.#defaultSettings.colorMessageSuccess=s):"color-message-danger"===e?this.#defaultSettings.colorMessageDanger=s:"font-size-message"===e?this.#DOM.message.style.fontSize=s:"display-bar"===e?"hide"===this.getAttribute("display-bar")&&(this.#DOM.sectionProgressBar.innerHTML=""):"display-count-output"===e&&"hide"===this.getAttribute("display-count-output")&&(this.#DOM.containerCountOutput.innerHTML="")}#getAllElements(){this.#DOM.containerCountOutput=this.#root.querySelector(".container-count-output"),this.#DOM.countOutput=this.#root.querySelector(".count-output"),this.#DOM.containerTextfield=this.#root.querySelector(".container-textfield"),this.textareaField=this.#root.querySelector(".textarea-field"),this.#DOM.sectionProgressBar=this.#root.querySelector(".section-progress-bar"),this.#DOM.containerProgressBar=this.#root.querySelector(".container-progress-bar"),this.#DOM.progressBar=this.#root.querySelector(".progress-bar"),this.#DOM.message=this.#root.querySelector(".message")}#setDefaultSettings(){this.#DOM.countOutput.innerText="0 / "+this.#defaultSettings.lengthCharacter,this.textareaField.style.height=this.#defaultSettings.fieldHeight,this.textareaField.placeholder=this.#defaultSettings.placeholderField,this.#DOM.containerProgressBar.style.backgroundColor=this.#defaultSettings.BgColorBar,this.#DOM.progressBar.style.backgroundColor=this.#defaultSettings.BgColorSuccess,this.#DOM.progressBar.style.height=this.#defaultSettings.heightBar,this.#DOM.containerProgressBar.style.height=this.#defaultSettings.heightBar,this.#DOM.containerProgressBar.style.borderRadius=this.#defaultSettings.borderRadiusBar,this.#DOM.progressBar.style.borderRadius=this.#defaultSettings.borderRadiusBar,this.#DOM.message.style.display=this.#defaultSettings.displayMessage,this.#DOM.message.style.color=this.#defaultSettings.colorMessageSuccess,this.#DOM.message.style.fontSize=this.#defaultSettings.fontSizeMessage,this.#DOM.progressBar.style.display=this.#defaultSettings.displayBar}#addEvents(){this.textareaField.addEventListener("input",e=>this.#getTextfieldValue(e))}#setProgressBarAndCountOutput(e){this.#DOM.progressBar.style.width=100*e/this.#defaultSettings.lengthCharacter+"%",this.#DOM.countOutput.innerText=e+" / "+this.#defaultSettings.lengthCharacter}#setSuccessValues(){this.#DOM.progressBar.style.backgroundColor=this.#defaultSettings.BgColorSuccess,this.#DOM.message.innerText=this.#defaultSettings.textMessageSuccess,this.#DOM.message.style.color=this.#defaultSettings.colorMessageSuccess}#setDangerValues(){this.#DOM.progressBar.style.backgroundColor=this.#defaultSettings.BgColorDanger,this.#DOM.message.innerText=this.#defaultSettings.textMessageDanger,this.#DOM.message.style.color=this.#defaultSettings.colorMessageDanger}#setProgressBar(e){var t=e.currentTarget.value.length;!1===this.#charLimit?(this.#setProgressBarAndCountOutput(t),t>this.#defaultSettings.lengthCharacter?this.#setDangerValues():this.#setSuccessValues()):t<=this.#defaultSettings.lengthCharacter?(this.#setProgressBarAndCountOutput(t),this.#setSuccessValues()):(e.currentTarget.value=e.currentTarget.value.slice(0,t-1),this.#setDangerValues())}#getTextfieldValue(e){this.#setProgressBar(e),this.textareaField.dispatchEvent(new CustomEvent("event-input-textfield"))}resetTextField(){this.textareaField.value="",this.#DOM.message.innerText=this.#defaultSettings.textMessageSuccess,this.#DOM.message.style.color=this.#defaultSettings.colorMessageSuccess,this.#setProgressBarAndCountOutput(0)}setInputLength(e){this.#setProgressBarAndCountOutput(e)}}customElements.define("input-character-checker",t)})();