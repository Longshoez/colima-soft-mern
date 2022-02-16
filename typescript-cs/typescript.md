# **Typescript tips n tricks**

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