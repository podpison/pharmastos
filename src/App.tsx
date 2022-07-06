import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './app.scss'
import { AboutCompany } from './components/pages/aboutCompany/AboutCompany'
import { MainPage } from './components/pages/main/MainPage'
import { Footer } from './components/ui/footer/Footer'
import { Nav } from './components/ui/nav/Nav'
import { News } from './components/ui/news/News'

function App() {
  return (
    <BrowserRouter basename='/pharmastos'>
      <Nav />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/aboutCompany' element={<AboutCompany />} />
        <Route path='/' element={<News />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App