# Input Character Checker

With this repo you can easily and quickly create a text field that counts the letters and can do a lot more.

The number of letters entered is displayed via a progress bar and a counter (both can be switched off).

The design of the Input Character Checker can be customized.

You can choose whether you want to use an `input:text` or a `textarea` as an text field. Both can be provided with or without an **icon** on the left or right side.

It is possible to display several Input Character Checkers on one page. They are completely independent of each other.

This repo contains 17 examples and all the files you need to integrate the Input Character Checker into your project.

**See the comments in the files and the examples for more information.**

### Notice

You can also use the Input Character Checker as a "normal" text field and use the functions (see below) so that you do not have to implement them again and again in different projects.

The Input Character Checker is very flexible to use.

## Preview / Demo

[You can view the demo here.](https://input-character-checker.frissbee.de).

## Description

Implement the Input Character Checker in your project:

**1. Step - download and add**

Download or clone the repo and add the file `input-character-checker_1.0.0.js` into your project.

**2. Step - implementation**

Include the `input-character-checker_1.0.0.js` file in the corresponding HTML or PHP file with `<script src="./path-to-the-file/input-character-checker_1.0.0.js" defer></script>` in the `<head>`-Tag.

**3. Step - insert the input-character-checker HTML tag**

Insert the `<input-character-checker></input-character-checker>` tag in the desired HTML or PHP file at the desired position.

**4. Step - customize the Input Character Checker**

To customize the Input Character Checker according to your wishes change the corresponding attributes in the `<input-character-checker></input-character-checker>` HTML tag.

Only the attributes that are to be changed need to be specified.

For example, change the text field from `textarea` (default) to an `input:text` field:

```html
<input-character-checker input-field="input"></input-character-checker>
```

That`s it.

## Quick view

```html
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Input Character Checker</title>

    <!-- 1. Import "input-input-character-checker.js" file -->
    <script src="./assets/js/input-character-checker_1.0.0.js" defer></script>
  </head>
  <body>
    <main>
      <div>
        <!-- 2. Implement the HTML-tag -->
        <input-character-checker></input-character-checker>
      </div>
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
- `display-message` => default not showed. Can be showed if the attribute is set to **`block`** (like in CSS => `display: block`).
- `text-message-success` => the text if not too many letters have been entered.
- `text-message-danger` => the text if too many letters have been entered.
- `color-message-success` => text color, if not too many letters have been entered.
- `color-message-danger` => text color if too many letters have been entered.
- `font-size-message` => font size of the message text.
- `display-bar` => Hides the progress bar with the value **`hide`**.
- `display-count-output` => Hides the count text with the value **`hide`**.
- `char-limit` => No more characters can be entered in the text field than are specified via the `length-character` attribute when the value is set to **`on`**.
- `type-input` => specifies the type of text field if the attribute `input-field` is set to `input`. The values can be all HTML types.
- `required-field` => add the attribute `required` to the text field. Value is **`required`**.

**For the Icons**

- `with-icon` => If you want to use an icon for the text field, you can activate this with values **`left`** or **`right`** for the respective positioning.
- `bg-icon` => to change the background of the icon. For example `#000000`;
- `event-icon`=> If the icon is to be clickable like a button, this can be activated with **`on`**. To add an Event Listener to the icon see Props -> `iconField`.

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
  display-bar=""
  display-count-output=""
  char-limit=""
  type-input="text"
  required-field=""
  with-icon=""
  bg-icon="#f1f1f1"
  event-icon=""
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

The icon can be accessed with the prop `iconField` and thus an event listener can be added, for example. Use the event `event-icon-button` for this. The value of the text field you get over `detail`. See 14. + 17. example.

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

#### `checkNumber()`

Checks whether the input contains a number. Can be used for a password input field, for example. Returns `true` or `false`. Similar to `onlyNumbers()`.

#### `checkSpecial()`

Checks whether the input contains a special character. Can be used for a password input field, for example. Returns `true` or `false`. Similar to `onlyNumbers()`.

#### `checkSpecialAndNumbers()`

Checks whether the input contains a special character and a number. Can be used for a password input field, for example. Returns `true` or `false`. Similar to `onlyNumbers()`.

#### `isEmailAddress()`

Checks whether the text in the text field is a valid email address. Returns `true` or `false`. See 9. example.

#### `toSlug()`

Generates a slug from the text. See 12. example.

## Using icons

It is very simple.

1. Implement your desired icon within the **`<input-character-checker> [ HERE THE ICON ] </input-character-checker>`** tag.
2. Activate and position it via the attribute **`with-icon`**. Values are **`left`** or **`right`** for the position.
3. If the icon should be clickable like a button, add the attribute `event-icon` with the value **`on`**.

Example:

```html
<input-character-checker with-icon="left" event-icon="on" bg-icon="#ffffff">
  <svg xmlns="http://www.w3.org/2000/svg" style="width: 24px; height: 28px; fill: #af3c3c" viewBox="0 0 512 512">
    <path
      d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
    />
  </svg>
</input-character-checker>
```

To add an Event Listener to the icon see **Props -> `iconField`**.

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

The idea is that the value is passed from the Input Character Checker to an `input:hidden` element. This means that the `<input-character-checker></input-character-checker>` tag does not necessarily have to be inside the `<form></form>` element - which can also be an advantage.

Here is a (simplified) example for `$_POST`:

**The PHP code**

```php
if($_POST){
  var_dump($_POST);
  echo $_POST['my-input-value'];

  // do something with the value of $_POST['my-input-value']
}

```

**The HTML code**

```html
<!DOCTYPE html>
<html lang="de">
  <head>
    <!-- 1. Import "input-character-checker_1.0.0" file -->
    <script src="./assets/js/input-character-checker_1.0.0.js" defer></script>

    <!-- 2. Implement your own JavaScript file -->
    <script src="./assets/js/my-javascript.js" defer></script>
  </head>
  <body>
    <main>
      <!-- 3. Implement "input-character-checker" Tag -->
      <input-character-checker
        class="demo"
        input-field="input"
        length-character="40"
        display-bar="hide"
        display-count-output="hide"
      ></input-character-checker>

      <!-- 4. Implement the "form"-Tag and the "input:hidden" Field -->
      <form method="post">
        <input class="for-demo" type="hidden" name="my-input-value" value="<?= isset($_POST['my-input-value']) ? $_POST['my-input-value'] : '' ?>" />
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
  DOM.demo = document.querySelector('.demo'); // => the <input-character-checker></input-character-checker> Element
  DOM.forDemo = document.querySelector('.for-demo'); // => the "input:hidden" element
  DOM.btnSubmit = document.querySelector('.btn-submit'); // => the "submit" button

  const init = () => {
    DOM.demo.textField.value = DOM.forDemo.value;

    DOM.demo.textField.addEventListener('event-input-textfield', valueToHiddenElement);
  };

  const valueToHiddenElement = (e) => {
    DOM.forDemo.value = e.currentTarget.value;
  };

  init();
})();
```
