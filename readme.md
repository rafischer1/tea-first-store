# React Store Project

[Images Available](https://peacefang.tumblr.com/)

---

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

---

[Redux Logger](https://www.npmjs.com/package/redux-logger)

---

Note on mapStateToProps:
 
```coffeescript
redux's mapStateToProps has a shallow 
equality check for every value in the object; 
it won't replace values if they pass a shallow equality 
check which means it won't needlessly re-render,
but if we have transformation logic it's still valuable 
to memoize it with a selector to save us running 
duplicate logic to get the same output.
```
