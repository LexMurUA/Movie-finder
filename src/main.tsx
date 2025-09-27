import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainPage } from './Pages/MainPage/MainPage.tsx'
import { Provider } from 'react-redux'
import { store } from './app/strore.ts'
import { TopRatedMovies } from './components/TopRatedMovies/TopRatedMovies.tsx'
import { MoviePage } from './Pages/MoviePage/MoviePage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<MainPage />} />
            <Route path='/moviesTopRated' element={<TopRatedMovies />} />
            <Route path='/moviesPopular' element={<TopRatedMovies />} />
            <Route path='/movie/:id' element={<MoviePage />} />

            <Route path='/tvTopRated' element={<TopRatedMovies />} />
            <Route path='/tvPopular' element={<TopRatedMovies />} />
            <Route path='/tv/id' element={<TopRatedMovies />} />


          </Route>

        </Routes>

      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
