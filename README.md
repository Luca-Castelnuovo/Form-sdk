# FormJS-sdk

[![NPM](https://img.shields.io/npm/v/formjs-sdk.svg)](https://www.npmjs.com/package/formjs-sdk)
![Publish](https://github.com/Luca-Castelnuovo/FormJS-sdk/workflows/Publish/badge.svg)

SDK for form.castelnuovo.xyz

## Example

```javascript
const FormJS = require("formjs-sdk");
const site_key = "sitekey";

// Send data from object
const data = {
  name: "fooBar",
  email: "fooBar@gmail.com",
};

FormJS.send(site_key, data).then(
  (response) => {
    console.log("SUCCESS", response);
  },
  (error) => {
    console.log("FAILED", error);
  }
);

// Send data from html form
const form = document.querySelector(".form");

form.addEventListener('submit', event => {
  event.preventDefault();

  FormJS.sendForm(site_key, form).then(
    (response) => {
      console.log("SUCCESS", response);
    },
    (error) => {
      console.log("FAILED", error);
    }
  );
})
```

## LICENSE [MIT](LICENSE)
