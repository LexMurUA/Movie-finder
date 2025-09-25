import { Outlet } from 'react-router-dom'
import './App.scss'
import { MoviesContextProvider } from './context/moviesContext'
import { Footer } from './layouts/Footer/Footer'
import { Header } from './layouts/Header/Header'
import { Main } from './layouts/Main/Main'
import { Nav } from './layouts/Nav/Nav'

function App() {


  return (
    <>
      <Header />
      <Nav />
      <Main>
        <MoviesContextProvider>
          <Outlet />
        </MoviesContextProvider>
      </Main>
      <Footer />
    </>
  )
}

export default App
