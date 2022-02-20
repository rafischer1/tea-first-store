# React Store Project - Tea First Records

## Resources

[Images Available](https://peacefang.tumblr.com/)

## PACKAGE DOCS

[React](https://reactjs.org/docs/conditional-rendering.html)

[React Router](https://reactrouter.com/docs/en/v6/getting-started/overview)

[Redux Logger](https://www.npmjs.com/package/redux-logger)

[Reselect](https://www.npmjs.com/package/reselect)

[Redux Persist](https://www.npmjs.com/package/redux-persist)

[Dingbats](https://www.w3schools.com/charsets/ref_utf_dingbats.asp)

[React Stripe](https://github.com/azmenak/react-stripe-checkout)

---
## NOTES

mapStateToProps
 
```css
redux mapStateToProps has a shallow 
equality check for every value in the object; 
it won't replace values if they pass a shallow equality 
check which means it won't needlessly re-render,
but if we have transformation logic it's still valuable 
to memoize it with a selector to save us running 
duplicate logic to get the same output.
```

FIREBASE BACKWARDS COMPAT FOR IMPORT ERROR:

```go
So from:

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

to:

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
```
