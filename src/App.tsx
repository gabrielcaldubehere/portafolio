import { useState } from 'react'
import Header from './components/Header'
import Home from './views/Home'
import './App.css'

function App() {
  return (
    
      <div className='App'>
        <Header/>
        <main>
          <Home/>
        </main>
    </div>
  )
}

export default App
