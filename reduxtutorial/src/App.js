import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//0import CantidadPokemon from './components/CantidadPokemon';
//import CompraPokemon from './components/CompraPokemon';

import {CantidadPokemon} from './components/CantidadPokemon.hook'
import {ComprarPokemon} from './components/ComprarPokemon.hook'

import BuscadorPokemon from './components/BuscadorPokemon'
import ResultadoPokemon from './components/ResultadoPokemon';

import store from './redux/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
    <div className="App container">
      <div className="row">
        <div className="col-23">
          <div className="card mt-t" style={{maxWidth: '370px'}}></div>
          <div className="row no-gutters ">
            <div className="col-4">
              <img src={require('./golden.jpeg')} alt="its a golden" className='img-thumbnail'/>
            </div>
            <div className="col-8">
              <div className="card-body">
                <CantidadPokemon />   
                <ComprarPokemon />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 mt-4 pt-3">
          <BuscadorPokemon/>
        </div>
        <div className="col-12">
          <ResultadoPokemon />
        </div>
      </div>
    </div>
    </Provider>
  );
}

export default App;
