###  Advanced types
### Union type
 You can use the TypeScript union type. The union type allows you to combine multiple types into one type.
 For example, the following variable is of type `number` or `string`:

 ```js
let result: number | string;
result = 10; // OK
result = 'Hi'; // also OK
result = false; // a boolean value, not OK
```

A union type describes a value that can be one of several types, not just two. For example number | string | boolean is the type of a value that can be a number, a string, or a boolean.


*********************
### TypeScript String Literal Types

The string literal types allow you to define a type that accepts only one specified string literal.

The following defines a string literal type that accepts a literal string 'book':
```js

let Book: 'book';
 Book =  'book'; // valid
 Book = 'notebook'; // compiler error

 //error
 `Type '"dblclick"' is not assignable to type '"click"'.`

```

The click is a string literal type that accepts only the string literal 'click'. If you assign the literal string click to the click, it will be valid:


*******************

### TypeScript Type Aliases

Type aliases allow you to create a new name for an existing type. The following shows the syntax of the type alias:
```js
type chars = string;
let messsage: chars; // same as string type
```
It’s useful to create type aliases for union types. For example:
```js
type alphanumeric = string | number;
let input: alphanumeric;
input = 100; // valid
input = 'Hi'; // valid
input = false; // Compiler error
```

******************
