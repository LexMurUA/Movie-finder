import './App.scss'
import { Main } from './layouts/Main/Main'
import { Outlet } from 'react-router-dom'
import { Header } from './layouts/Header/Header'
import { Footer } from './layouts/Footer/Footer'

function App() {


  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  )
}

export default App
