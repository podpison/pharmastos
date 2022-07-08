import { useEffect } from 'react'
import { Provider, useDispatch } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './app.scss'
import { AboutCompany } from './components/pages/aboutCompany/AboutCompany'
import { Contacts } from './components/pages/contacts/Contacts'
import { MainPage } from './components/pages/main/MainPage'
import { NotFound } from './components/pages/notFound/NotFound'
import { Footer } from './components/ui/footer/Footer'
import { Nav } from './components/ui/nav/Nav'
import { News } from './components/ui/news/News'
import { addBreadcrumbsItem } from './redux/reducers/breadcrumbsReducer'
import { store } from './redux/store'

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addBreadcrumbsItem('man'))
  }, [])
  
  return (
    <Provider store={store}>
      <BrowserRouter basename='/pharmastos'>
        <Nav />
        <Routes>
          <Route path='/' element={<><MainPage /> <News /></>} />
          <Route path='/aboutCompany' element={<AboutCompany />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App