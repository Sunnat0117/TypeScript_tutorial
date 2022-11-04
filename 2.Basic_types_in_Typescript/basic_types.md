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
- undefined	 - has one value: undefined. It is a default - value of an uninitialized variable
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

let skill : [number, string] = [1, "Dev"];























