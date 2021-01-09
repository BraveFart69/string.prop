## Find properties on objects by using strings

### Applications

The purpose of this package is to return a property or properties of an object from a string . It could be used when you are expecting an user input of the properties of an object as a string .

### Usage

First require the package

```javascript
const stringProp = require("string.prop");
```

The package is a function which accepts **3** arguments :

1. The properties of the object you want to be returned as a string.
2. The object itself.
3. This argument is optional. By default it is set to false , if you provide `true` or a truthy value as the argument, instead of returning the properties of the object it will return `true` if the properties are found and `false` if they are not.

### Example

```javascript
const stringProp = require("string.prop");

const obj = {
  foo: {
    a: 1,
    b: 2,
  },
};

stringProp("foo.a", obj); // returns 1
stringProp("foo", obj); // returns {a:1,b:2}
stringProp("", obj); // returns the object
stringProp("foo.c", obj); // returns an error message and exits the process
stringProp("foo.a", obj, true); // returns true
stringProp("foo.c", obj, true); // returns false
```

### IMPORTANT NOTE

**The package will exit the process if the properties provided are not found on the object GIVEN THAT THE 3rd ARGUMENT ISN'T PROVIDED AS TRUE OR A TRUTHY VALUE.**
