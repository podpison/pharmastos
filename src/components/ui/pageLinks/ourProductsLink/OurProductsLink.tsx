import "./ourProductsLink.scss";

type Props = {
  closeBurger?: () => void
  name: string
}

export const OurProductsLink: React.FC<Props> = ({ name, closeBurger }) => {
  return <li className="page-links__page-link page-links__our-products-link">
    <p className="text page-links__our-products-link-name">{name}</p>
  </li>
};