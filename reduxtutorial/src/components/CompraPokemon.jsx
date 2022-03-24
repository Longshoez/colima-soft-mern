import React from 'react'
import { buy_pokemon_action, return_pokemon_action } from '../redux/actions/gameShopAction'
import {connect} from 'react-redux'

function CompraPokemon(props) {
  return (
    <div className='row'>
      <button className="btn btn-dark btn-sm mb-2" onClick={() => {props.buy_pokemon_action(1)}}>Comprar Pokemon</button>
      <button className="btn btn-dark btn-sm" onClick={() => {props.return_pokemon_action(1)}}>Vender Pokemon</button>
    </div>
  )
}

// if you were to also have t use the state, you would import it
//here  and pass it below instead of the null
// const mapStateToProps = (state) => {
//   return{
//     game_shop: state.game_shop
//   }
// }

const mapDispatchToProps = {
  buy_pokemon_action,
  return_pokemon_action
}

export default connect(null, mapDispatchToProps)(CompraPokemon)