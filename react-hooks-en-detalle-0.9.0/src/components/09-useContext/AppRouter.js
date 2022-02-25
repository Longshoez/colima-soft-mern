import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom'

import { AboutScreen } from './AboutScreen'
import { HomeScreen } from './HomeScreen'
import { LoginScreen } from './LoginScreen'
import NavBar from './NavBar'

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <div className='container'>
          <Routes>
            <Route exact path="/" element={<HomeScreen />} /> {/**exact ya no es tan necesario en rn6 */}
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/about" element={<AboutScreen />} />
            {/**<Route element={<HomeScreen/>}/> En caso de que el url sea algo que no esta declarado, el rrd enviara a el elemento declarado aqui*/}
            <Route path='/' /> {/**Funciona como un default cuando no se encuentra el url especifico */}

          </Routes>
        </div>
      </div>
    </Router>
  )
}