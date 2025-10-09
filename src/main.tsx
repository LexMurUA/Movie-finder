import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import App from './App.tsx'
import { store } from './app/strore.ts'
import { PopularPersons } from './components/PopularPersons/PopularPersons.tsx'
import { TopRatedMovies } from './components/TopRatedMovies/TopRatedMovies.tsx'
import './index.scss'
import { MainPage } from './Pages/MainPage/MainPage.tsx'
import { MoviePage } from './Pages/MoviePage/MoviePage.tsx'
import { PersonPage } from './Pages/PersonPage/PersonPage.tsx'
import { SearchPage } from './Pages/SearchPage/SearchPage.tsx'
import { TvPage } from './Pages/TvPage/TvPage.tsx'
import { AnimatePresence } from 'framer-motion'
import { PageWrapper } from './components/PageWrapper.tsx/PageWrapper.tsx'
import { ErrorPage } from './Pages/ErrorPage/ErrorPage.tsx'




function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<App />}>
          <Route index element={<PageWrapper><MainPage /></PageWrapper>} />
          <Route path='/moviesTopRated' element={<PageWrapper><TopRatedMovies /></PageWrapper>} />
          <Route path='/moviesPopular' element={<PageWrapper><TopRatedMovies /></PageWrapper>} />
          <Route path='/movie/:id' element={<PageWrapper><MoviePage /></PageWrapper>} />

          <Route path='/tvTopRated' element={<PageWrapper><TopRatedMovies /></PageWrapper>} />
          <Route path='/tvPopular' element={<PageWrapper><TopRatedMovies /></PageWrapper>} />
          <Route path='/tv/:id' element={<PageWrapper><TvPage /></PageWrapper>} />

          <Route path='/popularPersons' element={<PageWrapper><PopularPersons /></PageWrapper>} />
          <Route path='/person/:id' element={<PageWrapper><PersonPage /></PageWrapper>} />


          <Route path='/search/:value' element={<PageWrapper><SearchPage /></PageWrapper>} />
          <Route path='/*' element={<PageWrapper><ErrorPage /> </PageWrapper>} />

        </Route>

      </Routes>
    </AnimatePresence>
  )
}




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="Movie-finder" >
        <AnimatedRoutes />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
