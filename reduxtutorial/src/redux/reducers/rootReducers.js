import {combineReducers} from 'redux'
import game_shop from './gameShopReducers'
import buscador from './buscadorReducer'

const rootReducers = combineReducers({
  game_shop,
  buscador
})

export default rootReducers