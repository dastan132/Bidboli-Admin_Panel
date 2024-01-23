import React from 'react'
import AppRouter from './components/global/AppRouter'
import { Helmet } from 'react-helmet'
import './assets/stylesheets/media.css'
import './assets/stylesheets/style.css'

function App() {
  return (
    <div>
      <Helmet>
        <script
          src='https://kit.fontawesome.com/b962d8bbf0.js'
          crossOrigin='anonymous'
        ></script>
      </Helmet>
      <AppRouter />
    </div>
  )
}

export default App
