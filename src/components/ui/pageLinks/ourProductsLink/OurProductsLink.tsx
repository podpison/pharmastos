import { Category } from "./category/Category";
import "./ourProductsLink.scss";

type Props = {
  closeBurger?: () => void
  name: string
}

export const OurProductsLink: React.FC<Props> = ({ name, closeBurger }) => {
  return <li className="page-links__page-link our-products-link">
    <p className="text our-products-link__name">{name}</p>
    <div className="our-products-link__categories">
      <Category icon="https://i.postimg.cc/cJTWpVV4/1.png" name={{ru: 'Нитриловые перчатки', ua: 'Нiтриловые перчаткi'}} />
      <Category icon="https://i.postimg.cc/7hJn8rtF/8.png" name={{ru: 'Нитриловые перчатки', ua: 'Нiтриловые перчаткi'}} />
      <Category icon="https://i.postimg.cc/cJTWpVV4/1.png" name={{ru: 'Нитриловые перчатки', ua: 'Нiтриловые перчаткi'}} />
      <Category icon="https://i.postimg.cc/7hJn8rtF/8.png" name={{ru: 'Нитриловые перчатки', ua: 'Нiтриловые перчаткi'}} />
    </div>
  </li>
};