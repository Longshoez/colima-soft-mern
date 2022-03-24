import React from 'react'

import {connect} from 'react-redux'

function CantidadPokemon(props) {
  return (
    <div className='card-title h3 text-center'>
      Unidades: {props.game_shop.pokemon}
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    game_shop: state .game_shop
  }
}

export default connect(mapStateToProps)(CantidadPokemon)