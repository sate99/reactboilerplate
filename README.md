# React Boilerplate #

### Setting up ###

* Checkout the latest version from bitcucket
* yarn install / npm install

### Stacks Used ###

* React 16
* Webpack 4
* Babel
* ES6
* Hot Module Replacement 
* Axois
* EsLint
* Jest and Enzyme
* Sentry
* CleverTap


### Sentry ###

#### Usage

```js
import { init } from '@sentry/browser';

init({
    dsn: '__DSN__'
});
```

#### API

First import library in your component 

`import * as Sentry from '@sentry/browser';`


- Adding sentry
```js
Sentry.configureScope(scope => {
    scope.setExtra('battery', 0.7);
    scope.setTag('user_mode', 'admin');
    scope.setUser({ id: '4711' });
    // scope.clear();
});
   
// Add a breadcrumb for future events
Sentry.addBreadcrumb({
    message: 'My Breadcrumb',
    // ...
});
   
// Capture exceptions, messages or manual events
Sentry.captureMessage('Hello, world!');
Sentry.captureException(new Error('Good bye'));
Sentry.captureEvent({
    message: 'Manual',
    stacktrace: [
      // ...
    ],
});
```


### CleverTap ###

#### Usage

```js
import ClevertapReact from '../lib/clevertap.js';

ClevertapReact.initialize("CLEVERTAP_ACCOUNT_ID");
```

#### API

First import library in your component 

`import ClevertapReact from 'clevertap-react';`

- Push Event

```js
var payload = {
  "Product name":"Casio Chronograph Watch",
  "Category":"Mens Accessories",
  "Price":59.99,
}

ClevertapReact.event("Product Viewed", payload)

// Payload is optional, if you dont want to pass it, you can just do 
ClevertapReact.event("Product Viewed")
```

- Profile Push
```js
var payload = {
  "Site": {
    "Name": "Jack",                  // String
    "Identity": userid,              // String or number
    "Email": "jack@gmail.com",       // Email address of the user
    "Phone": "+919066173457",        // Phone (with the country code)
    "Gender": "M",                   // Can be either M or F
    "DOB": new Date(), // Date of Birth. Javascript Date object
    "Photo": 'image_url',    // URL to the Image
 }
}

ClevertapReact.profile(payload)
```

- Logout
```js
ClevertapReact.logout()
```

### Frameworks Used ###

* ReactJs
* Reactstrap
* SCSS
* Bootstrap

### Dependencies ###

* Refer package.json

###
