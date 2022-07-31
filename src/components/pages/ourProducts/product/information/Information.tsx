import "./information.scss";
import { NavLink, Routes, Route } from "react-router-dom";
import { Description } from "./description/Description";
import { Details } from "./details/Details";
import { StorageAndUse } from "./storageAndUse/StorageAndUse";

type ArticleProps = {
  name: string,
  link: string
}

const Article: React.FC<ArticleProps> = ({ name, link }) => {
  return <NavLink className={({isActive}) => `product__infromationHeading ${isActive && 'product__infromationHeading_active'}`} to={link}>
    <h4>{name}</h4>
  </NavLink>
};

  export const Information: React.FC = () => {
  return <div className='product__infromation'>
    <div className='product__infromationHeadingContainer'>
      <Article name='Описание' link='description' />
      <Article name='Детали' link="details" />
      <Article name="Хранение / применение" link="storageAndUse" />
    </div>
    <div className='product__infromationContainer'>
      <Routes>
        <Route path='/' element={<Description />} />
        <Route path='description' element={<Description />} />
        <Route path='details' element={<Details />} />
        <Route path='storageAndUse' element={<StorageAndUse />} />
      </Routes>
    </div>
  </div>
}; 