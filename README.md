# Input Character Checker

With this repo, you can quickly and easily create an input field that contains a number of functions that you need again and again.

For example: it should be checked whether the input is a valid email, or only numbers may be entered, or only a certain number of letters, which should be displayed via a progress bar.

Basically, you can choose between `textarea` and `input`.

Both can be provided with or without an icon on the left or right side.

With `input` you can also specify the `type`.

It is possible to display several Input Character Checkers on one page. They are completely independent of each other.

This repo all the files you need to integrate the Input Character Checker into your project.

**See the comments in the files and the examples and templates for more information.**

#### Notice

You can also use the Input Character Checker as a "normal" text field and use the functions (see below) so that you do not have to implement them again and again in different projects.

The Input Character Checker is very flexible to use.

## Preview / Demo

[You can view the demo here](https://input-character-checker.frissbee.de).

## Description

Implement the Input Character Checker in your project:

**1. Step - download and add**

Download or clone the repo and add the file `input-character-checker_2.1.0.js` into your project.

**2. Step - implementation**

Include the `input-character-checker_2.1.0.js` file in the corresponding HTML or PHP file with `<script src="./path-to-the-file/input-character-checker_2.1.0.js"></script>` in the `<head>`-Tag.

**3. Step - insert the input-character-checker HTML tag**

Insert the `<input-character-checker></input-character-checker>` tag in the desired HTML or PHP file at the desired position.

**4. Step - customize the Input Character Checker**

To customize the Input Character Checker according to your wishes change the corresponding attributes in the `<input-character-checker></input-character-checker>` HTML tag.

Only the attributes that are to be changed need to be specified.

For example, change the text field from `textarea` (default) to an `input:text` field:

```html
<input-character-checker input-field="input"></input-character-checker>
```

**5. Use the functions**

The Input Character Checker contains a number of functions (see below) that you will need again and again. This can be very helpful.

## Quick view

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Input Character Checker</title>

    <!-- 1. Import "input-input-character-checker.js" file  -->
    <script src="./path-to-the-file/input-character-checker_2.1.0.js"></script>

    <!-- 2. Import your JS file if necessary(see the examples) -->
    <script src="./path-to-the-file/my-javascript.js"></script>
  </head>
  <body>
    <main>
      <!-- 3. Implement the HTML-tag -->
      <input-character-checker></input-character-checker>
    </main>
  </body>
</html>
```

## All attributes

- `input-field` => default is an `textarea`. If set to **`input`** you have an `input:text` field.
- `length-character` => Up to how many letters should only be entered.
- `placeholder-field` => placeholder text for the text field
- `value-field` => the text to be displayed in the text field at the beginning.
- `height-field` => height of the `textarea` field.
- `bg-color-bar` => background color for the progress bar.
- `bg-color-success` => background color for the progress bar for the number of letters entered
- `bg-color-danger` => background color for the progress bar for the number of letters entered if too many are entered.
- `height-bar` => height of the progress bar
- `border-radius-bar` => border radius of the progress bar
- `display-message` => default not showed. Can be showed if the attribute is set to **`block`** (like in CSS `display: block`).
- `text-message-success` => the text if not too many letters have been entered.
- `text-message-danger` => the text if too many letters have been entered.
- `color-message-success` => text color, if not too many letters have been entered.
- `color-message-danger` => text color if too many letters have been entered.
- `font-size-message` => font size of the message text.
- `disable-bar` => Hides the progress bar. A value does not have to be specified.
- `disable-count-output` => Hides the count text. A value does not have to be specified.
- `char-limit` => No more characters can be entered in the text field than are specified via the `length-character` attribute when the attribute is set. A value does not have to be specified.
- `type-input` => specifies the type of text field if the attribute `input-field` is set to `input`. The values can be all HTML types.
- `required-field` => add the attribute `required` to the text field to make it required. A value does not have to be specified.
- `input-small` => If `input-field` is set to `input`, the attribute `input-small` can be used to display the input element in the small version. A value does not have to be specified.

**For the Icons**

- `with-icon` => If you want to use an icon for the text field, you can activate this with values **`left`** or **`right`** for the respective positioning.
- `bg-icon` => to change the background of the icon. For example `#000000`;
- `event-icon`=> If the icon is to be clickable like a button, add this attribute. A value does not have to be specified. To add an Event Listener to the icon see Props -> `iconField`.

## Example for all attributes (default values):

```html
<input-character-checker
  input-field=""
  length-character="8"
  placeholder-field=""
  value-field=""
  height-field="80px"
  bg-color-bar="#f5f5f5"
  bg-color-success="#3fa5f2"
  bg-color-danger="#a81111"
  height-bar="8px"
  border-radius-bar="0.45rem"
  display-message="none"
  text-message-success=""
  text-message-danger=""
  color-message-success="#20961e"
  color-message-danger="#20961e"
  font-size-message="inherit"
  disable-bar
  disable-count-output
  char-limit
  type-input="text"
  required-field
  with-icon=""
  bg-icon="#f1f1f1"
  event-icon
></input-character-checker>
```

## Props

#### `textField`

The text field can be accessed with `textField`, for example to add an event listener to get the value of the text field. Use the event `event-input-textfield` for this.

Example:

```js
document.querySelector('input-character-checker').textField.addEventListener('event-input-textfield', (e) => {
  // get the value of the text field:
  const theValue = e.currentTarget.value;

  // do something...
});
```

#### `iconField`

The icon can be accessed with the prop `iconField` and thus an event listener can be added, for example. Use the event `event-icon-button` for this. The value of the text field you get over `detail`. See 14. + 18. example.

Example:

```js
document.querySelector('input-character-checker').iconField.addEventListener('event-icon-button', (e) => {
  console.log('Input value:', e.detail);
  console.log('Input length:', e.detail.length);
  console.log('Input icon container:', e.currentTarget);

  // do something...
});
```

## Functions

#### `setInputValue(inputStr)`

This function can be used to transfer text to the input field and the process bar and message are set accordingly.

#### `setInputLength(number)`

This function can be used to specify or change the number of letters. See the 7. example.

#### `resetTextField()`

The text field, the counter display and the progress bar can be reset with `resetTextField()`. See 5. and 6. example.

#### `onlyNumbers()`

Only numbers can be entered in the text field. Returns `true` or `false`. See 13. example.

#### `onlyLetters()`

Only letters can be entered in the text field. Returns `true` or `false`. Similar to `onlyNumbers()`.

#### `onlyNumbersAndLetters()`

Only numbers and letters can be entered in the text field. Returns `true` or `false`. Similar to `onlyNumbers()`.

#### `noWhiteSpaces()`

No whitespaces can be entered in the text field.

#### `checkNumber()`

Checks whether the input contains a number. Can be used for a password input field, for example. Returns `true` or `false`.

#### `checkSpecial()`

Checks whether the input contains a special character. Can be used for a password input field, for example. Returns `true` or `false`.

#### `checkSpecialAndNumbers()`

Checks whether the input contains a special character and a number. Can be used for a password input field, for example. Returns `true` or `false`.

#### `isEmailAddress()`

Checks whether the text in the text field is a valid email address. Returns `true` or `false`. See 9. example.

#### `toSlug()`

Generates a slug from the text. See 12. example.

#### `checkIsOneUpperCase()`

Checks whether the input value contains at least one capital letter. Returns `true` or `false`. Can be used for a password input field, for example. See 18. example

#### `checkInputLength()`

Checks whether the length of the input value has at least the number of the `length-character` attribute. If the length of the input value is less, `false` is returned; if it is equal to or greater, `true` is returned. Can be used for a password input field, for example. See 18. example

#### `toggleIconAndType(iconOne, iconTwo, typeOne = 'password', typeTwo = 'text')`

If the input field with the `with-icon` attribute has an icon and the `event-icon` attribute is set, the `toggleIconAndType()` function can be used to toggle between two icons and the type of the input field. This is useful if, for example, you have a password field and want to toggle between the types `password` and `text` by clicking on the icon. See 18. example and the templates.

#### `setHiddenElement(hiddenElement)`

See the section `Input Character Checker with PHP $_POST & $_GET`.

#### `setBorderToError(value)`

This function can be used to change the border of the input field. This is intended to be used if the value of the input field does not meet the desired requirements, e.g. if there is no input.

Example: `document.querySelector('input-character-checker').setBorderToError('1px solid red')`

#### `setBorderToDefault()`

This function can be used to set the border of the input field back to the default value.

Example: `document.querySelector('input-character-checker').setBorderToDefault()`

#### `isPasswordCorrect = ({ isLength = true, isNumber = true, isUpperCase = true, isSpecialChar = true } = {})`

This function can be used to check whether the entry in the text field corresponds to the password requirement.

It checks whether the following requirements are met:

- `checkInputLength()`
- `checkNumber()`
- `checkIsOneUpperCase()`
- `checkSpecial()`

If one or more requirements are not to be used, they can be deactivated by setting them to `false`.

Example for `checkSpecial()` should not be given:

```js
const passwordInput = document.querySelector('input-character-checker');

if (passwordInput.isPasswordCorrect({ isSpecialChar: false }) === false) {
  // code...
}
```

See the examples:

- Example 18.
- `assets\js\singles\sign-up.js`
- `assets\js\singles\change-password.js`

## Using icons or text as button

It is very simple.

1. Implement your desired icon within the **`<input-character-checker> [ HERE THE ICON / TEXT ] </input-character-checker>`** tag.
2. Activate and position it via the attribute **`with-icon`**. Values are **`left`** or **`right`** for the position.
3. If the icon or text should be clickable like a button, add the attribute `event-icon`. A value does not have to be specified.

Example:

```html
<input-character-checker with-icon="left" event-icon bg-icon="#ffffff">
  <svg xmlns="http://www.w3.org/2000/svg" style="width: 18px; height: 18px; fill: #af3c3c" viewBox="0 0 512 512">
    <path
      d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
    />
  </svg>
</input-character-checker>
```

See 14. - 20. example.

To add an Event Listener to the icon see **Props -> `iconField`**. See 14. + 17. + 18. + 20. example.

## With JavaScript

You can also set the attributes with JavaScript. Do this with the `setAttribute()` method. To get the value of an attribute use the `getAttribute()` method.

Example:

```js
const inputCharacterChecker = document.querySelector('input-character-checker.my-class-name');
inputCharacterChecker.setAttribute('input-field', 'input');
```

**For more see the `my-javascript.js` file**.

## More design with CSS

If you want to have more influence on the design, you can do this in your CSS file with the pseudo-element `::part()` ([documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/::part)).

You can design:

- `textfield`
- `count-output`
- `message`
- `icon-left`
- `icon-right`

Here are some simple examples:

```css
input-character-checker::part(textfield) {
  border: 2px solid red;
}

input-character-checker::part(count-output) {
  font-size: 12px;
}

input-character-checker::part(message) {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

/* For the icon container */
/* left icon: */
input-character-checker::part(icon-left) {
  border: 3px solid #af3c3c;
}
/* right icon: */
input-character-checker::part(icon-right) {
  border: 3px solid #af3c3c;
  background-color: rgb(212, 212, 212);
}
```

## Input Character Checker with PHP `$_POST` & `$_GET`

Unfortunately, this does not work the direct way.

**The reason:** The Input Character Checker is created with Web Components and therefore the HTML is encapsulated via the [ShadowDOM](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM).

If you want to pass the value of the text field to PHP `$_POST` or `$_GET`, you can proceed as follows. This is admittedly a little "cumbersome", but it works.

The idea is that the value is passed from the Input Character Checker to an `input:hidden` element - use the `setHiddenElement(hiddenElement)` function for this. This means that the `<input-character-checker></input-character-checker>` tag does not necessarily have to be inside the `<form></form>` element - which can also be an advantage.

Here is a (simplified) example for `$_POST`:

**The PHP code**

```php
if(isset($_POST['value-hidden'])){

  var_dump($_POST['value-hidden']);

  // do something with the value of $_POST['value-hidden']

}

```

**The HTML code**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- 1. Import "input-character-checker_2.1.0.js" file -->
    <script src="./assets/js/input-character-checker_2.1.0.js"></script>

    <!-- 2. Implement your own JavaScript file -->
    <script src="./assets/js/my-javascript.js"></script>
  </head>
  <body>
    <main>
      <!-- 3. Implement "input-character-checker" tag -->
      <!-- The “input-character-checker” tag can of course also be implemented within the “form” tag -->
      <input-character-checker
        class="demo"
        input-field="input"
        value-field="<?= isset($_POST['input-hidden']) ? $_POST['input-hidden'] : '' ?>"
        length-character="40"
        disable-bar
        disable-count-output
      ></input-character-checker>

      <!-- 4. Implement the "form"-Tag and the "input:hidden" Field -->
      <form method="post">
        <input class="input-hidden" type="hidden" name="value-hidden" value="<?= isset($_POST['input-hidden']) ? $_POST['input-hidden'] : '' ?>" />
        <button class="btn btn-primary mt-4 btn-submit" type="submit">click</button>
      </form>
    </main>
  </body>
</html>
```

**The JavaScript code**

```js
'use strict';

(() => {
  const DOM = {};

  // the <input-character-checker></input-character-checker> Element
  DOM.charChecker = document.querySelector('input-character-checker.demo');

  // the "input:hidden" element
  DOM.inputHidden = document.querySelector('.input-hidden');

  // the "submit" button
  DOM.btnSubmit = document.querySelector('.btn-submit');

  const init = () => {
    DOM.charChecker.textField.addEventListener('event-input-textfield', (e) => {
      DOM.charChecker.setHiddenElement(DOM.inputHidden);
    });

    DOM.btnSubmit.addEventListener('click', onSubmit);
  };

  const onSubmit = (e) => {
    if (DOM.charChecker.textField.value.trim() === '') {
      e.preventDefault();

      // do something...
    }
  };

  init();
})();
```
