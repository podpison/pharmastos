import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './app.scss'
import { MainPage } from './components/pages/main/MainPage'
import { Nav } from './components/ui/nav/Nav'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
