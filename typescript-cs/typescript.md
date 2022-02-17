# **Typescript tips n tricks**

## to install typescript compiler
```
npm install typescript --save-dev

npm install -g typescript
```


## to compile a typescript file
```
tsc YourFile.ts
```

## to run a compiled typescript file

tsc compiled our code to a js file, we'll use node to run said file by doing
```
node YourFile.js
```
note that instead of using the .ts file we use the .js which has been compiled

## Auto-compile typescript file
compiling a typescript file each time we need to run our code, we can streamline this process
by adding the **--w** flag after **tsc** before compiling our file like such.

```
tsc --w YourFile.ts
```
this will auto-compile our file and we'll only need to run **node YourFile.js** to test it, without needing to compile over and over again.

Note: this will only run a "watcher" for the file you are working on, if you need to auto-compile another file it wont work, you have to run a watcher for this new one too.

## Compile ts to previous js version

Compile typescript file to a previous version of javascript using the **--target** flag, this flag receives a parameter such as **ES2016** which will compile the ts file to ES 2016, so the command with the tag and the parameter should look something like this.

```
tsc --target ES2016
```

## Typed variables

whenever you declare a variable in typescript you must define the type of data you are working like so

```
let anInteger:int
let aString:string
let aBoolean:boolean
```

## Typed functions
Just like variables functions should also be declared with a type, similar to other programming languages like java, you would define wether your function returns a value of x type or if it returns nothing (Void), in practice it would look something like this

```
let aTypescriptFunction():void{

}

```

The parameters inside a function must also have a type

```
let aTypescriptFunction(a:number, b:number):number{
  return a + b
}
```
as you can see, since we are returning the sum of **a** and **b** we specify the return type of the function as a number.