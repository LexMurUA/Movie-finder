import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.tsx'
import { store } from './app/strore.ts'
import { Person } from './components/Person/Person.tsx'
import { PopularPersons } from './components/PopularPersons/PopularPersons.tsx'
import { TopRatedMovies } from './components/TopRatedMovies/TopRatedMovies.tsx'
import './index.scss'
import { MainPage } from './Pages/MainPage/MainPage.tsx'
import { MoviePage } from './Pages/MoviePage/MoviePage.tsx'
import { TvPage } from './Pages/TvPage/TvPage.tsx'
import { PersonPage } from './Pages/PersonPage/PersonPage.tsx'
import { SearchPage } from './Pages/SearchPage/SearchPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="Movie-finder" >
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<MainPage />} />
            <Route path='/moviesTopRated' element={<TopRatedMovies />} />
            <Route path='/moviesPopular' element={<TopRatedMovies />} />
            <Route path='/movie/:id' element={<MoviePage />} />

            <Route path='/tvTopRated' element={<TopRatedMovies />} />
            <Route path='/tvPopular' element={<TopRatedMovies />} />
            <Route path='/tv/:id' element={<TvPage />} />

            <Route path='/popularPersons' element={<PopularPersons />} />
            <Route path='/person/:id' element={<PersonPage />} />
            
            
            <Route path='/search/:value' element={<SearchPage />} />


          </Route>

        </Routes>

      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
