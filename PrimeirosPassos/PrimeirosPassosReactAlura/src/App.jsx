import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FormularioDeEvento } from './componentes/FormularioDeEvento'

//componentes são funções

function App() {
  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>

      <section>
        <img src="/banner.png" alt="" />
      </section>

      <FormularioDeEvento />
    </main>
  )
}

export default App
