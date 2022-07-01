import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './app.scss'
import { MainPage } from './components/pages/main/MainPage'
import { Nav } from './components/ui/nav/Nav'
import { News } from './components/ui/news/News'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
      <News />
    </BrowserRouter>
  )
}

export default App
