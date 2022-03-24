const createStore = require('redux').createStore
const combineReducers = require('redux').combineReducers

//actions
const BUY_SODA = 'BUY_SODA' //tipo de acción 
const buy_soda_action = (cant) => { //acción
  return {
    type: BUY_SODA,
    payload: cant
  }
}
const RETURN_SODA = 'RETURN_SODA' //tipo de acción 
const return_soda_action = (cant) => { //acción
  return {
    type: RETURN_SODA,
    payload: cant
  }
}

const BUY_FOOD = 'BUY_FOOD' //tipo de acción 
const buy_food_action = (cant) => { //acción
  return {
    type: BUY_FOOD,
    payload: cant
  }
}
const RETURN_FOOD = 'RETURN_FOOD' //tipo de acción 
const return_food_action = (cant) => { //acción
  return {
    type: RETURN_FOOD,
    payload: cant
  }
}
const BUY_CONSOLE = 'BUY_CONSOLE' //tipo de acción 
const buy_console_action = (cant) => { //acción
  return {
    type: BUY_CONSOLE,
    payload: cant
  }
}

const BUY_LAPTOP = 'BUY_LAPTOP' //tipo de acción 
const buy_laptop_action = (cant) => { //acción
  return {
    type: BUY_LAPTOP,
    payload: cant
  }
}


//reducers

//food reducer
const default_product_state = {
    soda: 10,
    food: 100,

}

const product_reducer = (state = default_product_state, action) => {
  switch (action.type) {
    case BUY_SODA:{
      return{
         ...state,
         soda: state.soda - action.payload 
        }
    }
    case RETURN_SODA:{
      return{
        ...state, 
        soda: state.soda + action.payload 
      }
    }
    case BUY_FOOD:{
      return{
        ...state, 
        food: state.food - action.payload 
      }
    }
    case RETURN_FOOD:{
      return{
        ...state, 
        food: state.food + action.payload 
      }
    }
    default: return  state;
  }
}

//new reducer
const default_tech_isle_state = {
  laptop: 30,
  console: 100,
}

const tech_reducer = (state = default_tech_isle_state, action) => {
  switch (action.type) {
    case BUY_LAPTOP:{
      return{
        ...state,
        laptop: state.laptop -  action.payload
      }
    }
    case BUY_CONSOLE:{
      return{
        ...state,
        console: state.console -  action.payload
      }
    }
    default: return  state;
  }
}

//combine two reducers
const rootReducers = combineReducers({
  product_reducer,
  tech_reducer})

//store

const store = createStore(rootReducers)

console.log('Estado, inicial: ', store.getState())
store.subscribe(() => {
  console.log('cambio de estado: ', store.getState())
})

store.dispatch(buy_soda_action(25))
store.dispatch(return_soda_action(40))
store.dispatch(buy_food_action(25))

store.dispatch(return_food_action(400))
store.dispatch(buy_laptop_action(10))
store.dispatch(buy_console_action(10))