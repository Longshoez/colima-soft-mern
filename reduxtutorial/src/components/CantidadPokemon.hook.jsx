import React from 'react'
import { useSelector } from 'react-redux'

export const CantidadPokemon = () => {

  const game_shop = useSelector((state) => state.game_shop)

  return (
    <>
      Unidades: {game_shop.pokemon} 
    </>
  )
}
