import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './app.scss'
import { AboutCompany } from './components/pages/aboutCompany/AboutCompany'
import { Blog } from './components/pages/blog/Blog'
import { Contacts } from './components/pages/contacts/Contacts'
import { MainPage } from './components/pages/main/MainPage'
import { NotFound } from './components/pages/notFound/NotFound'
import { Footer } from './components/ui/footer/Footer'
import { Nav } from './components/ui/nav/Nav'
import { BlogItem } from './components/pages/blog/blogItem/BlogItem'
import { OurProducts } from './components/pages/ourProducts/OurProducts'
import { useStaticItems } from './hooks/useStaticItems'
// import { Product } from './components/pages/ourProducts/product/Product'
import { Product } from './components/pages/ourProducts/productDetails/Product'

function App() {
  useStaticItems('blog')
  useStaticItems('ourProducts')

  return (
    <BrowserRouter basename='/pharmastos'>
      <Nav />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/ourProducts/:categoryId' element={<OurProducts />} />
        <Route path='/ourProducts/:categoryId/:productId/*' element={<Product />} />
        <Route path='aboutCompany' element={<AboutCompany />} />
        <Route path='contacts' element={<Contacts />} />
        <Route path='blog' element={<Blog />} />
        <Route path='blog/:blogId' element={<BlogItem />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App