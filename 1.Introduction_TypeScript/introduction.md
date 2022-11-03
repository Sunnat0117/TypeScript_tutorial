### Problems javaScript
 - No type safety
 - No strict type (dynamic type)
 - Difficulty understanding the reference structure
 - Dont use from OPP
  
  ### example function in js

  ```js
  function addMoney(sum, user){
    user.money = user.money + summ; 
    return user
  }

  addMoney('1', {name : "Ali"}) 

  ```

  ### check @ts

  ```js
  function addMoney(sum, user){
    user.money = user.money + summ; //error
    return user
  }

  addMoney('1', {name : "Ali"}) // error
  ```

```js

interface IUser {
    name :String;
    money : Number
}

  function addMoney(sum : number, user : IUser) : IUser {
    user.money = user.money + sum; 
    return user
  }

  addMoney(1, {name : "Ali", money : 2 000 000}) 
  ```
  ![alt text](https://github.com/Sunnat0117/TypeScript_tutorial.git/blob/main/images.jpg?raw=true)








