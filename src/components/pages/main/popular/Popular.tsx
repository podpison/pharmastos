import "./popularItems.scss";
import { Link } from "react-router-dom";
import { PopularItem } from "./PopularItem";

const fakeProducts = [
  {
    img: 'https://i.postimg.cc/MTJCs8ZN/image-2.png',
    name: 'Перчатка dermagrip ultra nitrile ls powder free',
    description: 'Хирургические перчатки синтетические (полиизопрен). Без латекса, неопудренные, ДГД покрытие, стерильные микротекстурированные',
    price: 225
  },
  {
    img: 'https://i.postimg.cc/MTJCs8ZN/image-2.png',
    name: 'Перчатка dermagrip ultra nitrile ls powder free',
    description: 'Хирургические перчатки синтетические (полиизопрен). Без латекса, неопудренные, ДГД покрытие, стерильные микротекстурированные',
    price: 225
  },
  {
    img: 'https://i.postimg.cc/MTJCs8ZN/image-2.png',
    name: 'Перчатка dermagrip ultra nitrile ls powder free',
    description: 'Хирургические перчатки синтетические (полиизопрен). Без латекса, неопудренные, ДГД покрытие, стерильные микротекстурированные',
    price: 225
  },
  {
    img: 'https://i.postimg.cc/MTJCs8ZN/image-2.png',
    name: 'Перчатка dermagrip ultra nitrile ls powder free',
    description: 'Хирургические перчатки синтетические (полиизопрен). Без латекса, неопудренные, ДГД покрытие, стерильные микротекстурированные',
    price: 225
  },
]

export const Popular: React.FC = () => {
  let Items = fakeProducts.slice(0, 4).map((p, index) => <PopularItem key={index} {...p} />)

  return <div className='popularItems'>
    <div className='popularItems__headingContainer'>
      <h3 className='popularItems__heading'>Популярные</h3>
      <Link className='popularItems__allProductsLink' to='/allProducts'><span>Все продукты</span></Link>
    </div>
    <div className="popularItems__items">
      {Items}
    </div>
  </div>
};