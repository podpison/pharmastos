import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useBreadcrumbs } from "../../../hooks/useBreadcrumbs";
import { useStaticItems } from "../../../hooks/useStaticItems";
import { selectOurProductItems } from "../../../redux/selectors";
import { ProductPreview } from "./productPreview/ProductPreview";
import { lngHelper } from "./../../../helpers/lngHelper";
import { NotFound } from "../notFound/NotFound";
import "./ourProducts.scss";
import { Filter } from "./filter/Filter";

export const OurProducts: React.FC = () => {
  useStaticItems('ourProducts')
  const { productName } = useParams();
  let currentCategory = useSelector(selectOurProductItems).find(c => c.name.ru === productName);
  useBreadcrumbs({name: lngHelper(currentCategory?.name), link: `/ourProducts/${productName}`});
  
  if (!currentCategory) return <NotFound />

  let Products = currentCategory?.items.map((i, index) => <ProductPreview key={index} {...i} />)

  return <section className="our-products">
    <div className='our-products__products'>
      <Filter />
      <div className="our-products__heading-container">
        <h3 className="our-products__heading">{currentCategory?.name.ru}</h3>
        <p className="our-products__items-count text text_color_grayBright">Предоставленно {currentCategory?.items.length} товаров</p>
      </div>
      <div>{Products}</div>
    </div>
  </section>
};