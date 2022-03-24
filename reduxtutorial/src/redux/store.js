import {applyMiddleware, createStore} from 'redux'
import rootReducers from './reducers/rootReducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const store = createStore(rootReducers, composeWithDevTools(
  applyMiddleware(thunk) //si no estuvieramos usando composeWithDevTools, simplemente se agregaria ApplyMiddleWare(thunk) en su
))

export default store