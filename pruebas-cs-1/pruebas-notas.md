
# **Testing**

Las pruebas  deben ser

- faciles de escribir
- faciles de leer
- confiables
- rapidas 
- principalmente unitarias

preview this file widh <kbd>cmd</kbd> + <kbd>shift</kbd> + <kbd>v</kbd>

### **run test files with**
```
npm test
```

> Jest  is important because: 
> tdd programming: test driven developement
>> one should create a test before beginning to code a function (or component?)
---
En caso de estar usando vite, hay que instalar [jest](https://jestjs.io/) manualmente, a diferencia de npx create-react-app que ya incluye jest, y añadir el script en el package.json

```
npm install --save-dev jest
```

```
{
  "scripts": {
    "test": "jest --watchAll"
  }
}
```
añadir la bandera --watchAll para habilitar la funcion Watch usage de jest

---

### **Unit  testing**
- prueba un componente aislado

### **integration  testing**
- como funcinoan varias piezas en conjunto

### **AAA**
- Arrange
    se prepara el sujeto a probar, se hacen variables e importaciones necesarias
- Act
    se aplican acciiones o estimulos al sujetoo de pruebas,  usar metodos, simular clicks etc
- Assert
    observar el comportambiento resultante 


### **Estructura recomendada del directorio de pruebas**
-  src/tests/filename.test.js

### **Correr pruebas en terminal**
-  npm run test


## **funciones de testing comunes**
- describe() -> engloba todas o un grupo especifico de pruebas y proporciona un espacio  para describir el bloque.

- test() -> engloba la prueba, aqui va el codigo a probar

- expect() -> expect representa el resultado esperado, se "encadena" con una funcion como las soguientes para evaluar los datos

- .toBe() -> Compares between 2 String values and passes if they are equal

- .toEqual() -> Comparase between 2 Objects ( or values?) and passes  if they are equal

## **Estructura de archivos**

Si el archivo a testear se encuentrar dentro de una carpeta, ejemplo: **📂 components/testme.js** la prueba debe crearse con una  estructura similar dentro de la carpeta de pruebas, ejemplo: **📂 tests/components/testme.test.js**

## **Exportar funciones para tests**

Si se requiere testear una funcion esta debe exportarse de antemano en el archivo que se cero e importarse en el archivo de pruebas.

## **Common Errors**

- File imports error
whenever jest is throwing errors when importing files one should  clear the cache by running
```
npm cache clean (might need to add the --force flag in some cases)
&
npm cache verify 
```

## **Execute test from a single file**
when running jest cli
- Press <kbd>w</kbd> to show more (options)
- Press <kbd>p</kbd> to filter by a filename
- type the name of your file, select it using the arrow keys and prress enter


## **Callbacks en la funcion test**
- done as a parameter and done() inside the code
  whenever we have an async function we need to use the done parameter and the 
  done() function when we test something. (09-pomesas.test.js)


## **Hacer una prueba asincrona**

### *Pruebas sobre componentes en react*
First in order to test a React componoent we first need to make this imports in our test file
- React -> import React from 'react'
- render -> import { render } from '@testing-library/react'
  - Usage 
  ```
    const wrapper = render( <PrimeraApp saludo={saludo}/> )
    expect(wrapper.getByText(saludo)).toBeInTheDocument()
  ```

then we use **render** to wrap our component

```
const wrapper = render( <PrimeraApp saludo={saludo}/> )
```

## **Usar enzyme para testear componentes**
a diferrencia del "render" que usamos con la libreria de test para realizar pruebas con componentes, con **Enzyme** utilizamos **shallow()** en el wrapper, Enzyme nos permite simular clicks, tener el documento a nuestra disposicion, entre otras cosas.

if we are using this component in more than one test we can instead define it inside the describe scope. this way we can use it in every test without needing to define it each time. markdown
>**Note:** we need to reset the component each time we want to use it on a test, this is due to the component being reused, if we change its value in the first test, we'd have the same component with the same values on the second one
we use **beforeEach()** (which runs a function before every test) to reset the component to its default state

```
let wrapper

beforeEach(() => {
    wrapper = shallow(<App/>)
})
```

Declaring the component this way makes our Wrapper iniitialize as undefined, this removes the intelisense, to fix this we can declare the component like so

```
let wrapper = shallow(<App/>)

beforeEach(() => {
    wrapper = shallow(<App/>)
})
```


### **If we are testing components we need to import the following in our test file**
- react
- the component


- To obtain a view of our container inside our current testing terminal we need to install the following extension 
[enzyme to json](https://www.npmjs.com/package/enzyme-to-json)

### **Simular clicks** 
>Reference file AppCounter.test.js

- .simulate('click') this function is used to simulate a click