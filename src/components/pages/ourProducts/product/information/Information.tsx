import "./information.scss";
import { NavLink, Routes, Route, useLocation } from "react-router-dom";
import { Description } from "./description/Description";
import { Details } from "./details/Details";
import { classNameHelper } from "../../../../../helpers/classNameHelper";

type ArticleProps = {
  name: string,
  link: string
}

const Article: React.FC<ArticleProps> = ({ name, link }) => {
  const { pathname } = useLocation();
  return <h4 className={classNameHelper('product__infromationHeading', {active: pathname.includes(link)})}>
    <NavLink to={link}>{name}</NavLink>
  </h4>
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
        {/* <Route path='?section=description' element={<Description />} /> */}
      </Routes>
    </div>
  </div>
}; 