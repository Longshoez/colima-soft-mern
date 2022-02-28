import React from 'react';
import './effects.css'
import ReactDOM from 'react-dom';


// import {Padre} from './components/07-tarea-memo/Padre';
// //import CallbackHooks from './components/06-memos/CallbackHooks';
// //import UseMemoHook from './components/06-memos/UseMemoHook';
// //import Memorize from './components/06-memos/Memorize';
// //import LayoutEffect from './components/05-useLayoutEffect/LayoutEffect';
// //import UserefExample from './components/04-useRef/UseRefExample'
// //import FocusScreen from './components/04-useRef/FocusScreen';
// // import { HookApp } from './HookApp';
// // import { CounterApp } from './components/01-useState/CounterApp';
// // import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
// // import { SimpleForm } from './components/02-useEffect/SimpleForm';
// //import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
// //import MultipleCustomHooks from './components/03-examples/MultipleCustomHooks';

//import './components/08-useReducer/intro-reducer'
//import TodoApp from './components/08-useReducer/TodoApp'

import { MainApp } from './components/09-useContext/MainApp';

ReactDOM.render(
  <MainApp></MainApp> ,
  document.getElementById('root')
);