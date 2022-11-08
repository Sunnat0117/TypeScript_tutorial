### Basic types

### Types in TypeScript
TypeScript inherits the built-in types from JavaScript. TypeScript types is categorized into:

- Primitive types
- Object types
  
Primitive types
The following illustrates the primitive types in TypeScript:

- string - represents text data
- number -	    represents numeric values
- boolean -	has true and false values
- null - 	has one value: null
- undefined	 - has one value: undefined. It is a 
- Default - value of an uninitialized variable
- symbol - 	represents a unique constant value
************************
### General types

- number type

```
let a : number = 1;
let b : number = -12;
let c : number = 20.9;
let d : number = 10_000;
```
- String type
```
let s : string = "John";
let s : string = 'John';
let s : string = 'John';

```
- Boolean type

```
let t : boolean = true;
let f : boolean = false;

```
**************************
### Function type
 @exapmle code in javascript
```js
function getFullname (firstName, surName){
    return `${firstName} ${surName}`
}

console.log(getFullname(1, "Rajabov")) // 1 Rajabov


// Bu yerda funksiyda xato yo'q ammo qat'iy tipdan foydalanmaganligimiz uchun fistname va surname paramertlariga xohlagan tipdagi malumot kelishi munkin

```

@ in TypeScript
```js
function getFullname (firstName : string, surName : string) : string {
    return `${firstName} ${surName}`
}

console.log(getFullname(1, "Rajabov")) // error

```
*******************
### object type

```js
let info : {
 officeId : number,
 isOpened : boolean,
 contacts : {
    phone : string,
    email :string,
    address :{
        city : string
    }
 }
} =
{
	"officeId": 45,
	"isOpened": false,
	"contacts": {
		"phone": "+79100000000",
		"email": "my@email.ru",
		"address": {
			"city": "Москва"
		}
	}
}
```

```js
function getFullname (userEntity : {firstName : string, surName : string }) : string {
    return `${firstName} ${surName}`
}

const user = {
    firstName : "Jonh",
    surName : "Doe",
    age : 20,
    skills : {
        dev : true,
        devops : true
    }

}

console.log(getFullname(user)) // Jonh Doe

```
***********************
### Array type

let skills: string[]= ['dev', 'devops'];

let skills: string[]= ['dev', 'devops', 1]; // error



```js
for(let skill of skills){
    console.log(skill.toUppercase()) // skill : string => this progress called Type Inference
}

```

***********************
### Tuples type
```
- let skill : [number, string] = [1, "Dev"];
- let skill : [number, string, ...boolean]= [1, "devOps", true, false, true] // you can add an unlimited number of boolean values
```

********** 
### enums types

An enum is a group of named constant values. Enum stands for enumerated type.

To define an enum, you follow these steps:

- First, use the `enum` keyword followed by the name of the enum.
- Then, define constant values for the `enum`.
  
The following shows the syntax for defining an enum:
```
enum name {constant1, constant2, ...};
```
Example:
```

enum Color{red, yellow, white, black};
enum StatusCode {SUCCESS, IN_PROGRESS, FAIL}

StatusCode.FAIL or (SUCCESS, IN_PROGRESS)
Color.red or(yellow, white, black)

```

***********************

### Union types

Sometimes, you will run into a function that expects a parameter that is either a number or a string. For example:
```
let a : number | string; // you can use value type of string or number

a = 3;
a = "Assalom aleykum" //both of them valid cod

```


```js
function add(a: number | string, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}
```

******************
### Literal types

The string literal types allow you to define a type that accepts only one specified string literal.

The following defines a string literal type that accepts a literal string 'book':
```js
let book : 'book';
```
Code language: JavaScript (javascript)
The click is a string literal type that accepts only the string literal 'click'. If you assign the literal string click to the click, it will be valid:

```js
book = 'book'; // valid
```

Error:

```js
book = 'dblclick'; // compiler error
//Type '"dblclick"' is not assignable to type '"click"'.
```

### TypeScript never Type

The never type is a type that contains no values. Because of this, you cannot assign any value to a variable with a never type.

Typically, you use the never type to represent the return type of a function that always throws an error. For example:
```js

function raiseError(message: string): never {
    throw new Error(message);
}

```

If you have a function expression that contains an indefinite loop, its return type is also the never type. For example:

```js
let loop = function forever() {
    while (true) {
        console.log('Hello');
    }
}
```






















