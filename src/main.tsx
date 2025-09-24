import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainPage } from './Pages/MainPage/MainPage.tsx'
import { Provider } from 'react-redux'
import { store } from './app/strore.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<MainPage />} />


        </Route>

      </Routes>

    </BrowserRouter>
    </Provider>
  </StrictMode>,
)
