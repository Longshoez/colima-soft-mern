import React from 'react'
import { useDispatch } from 'react-redux'
import { buy_pokemon_action, return_pokemon_action } from '../redux/actions/gameShopAction'

export const ComprarPokemon = () => {

  const dispatch = useDispatch()

return (
    <div className='row'>
      <button className="btn btn-dark btn-sm mb-2" onClick={() => {dispatch(buy_pokemon_action(1))}}>Comprar Pokemon</button>
      <button className="btn btn-dark btn-sm" onClick={() => {dispatch(return_pokemon_action(1))}}>Vender Pokemon</button>
    </div>
  )
}