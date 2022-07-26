import { useBreadcrumbs } from "../../../hooks/useBreadcrumbs";
import { ProductPreview } from "./productPreview/ProductPreview";
import { lngHelper } from "./../../../helpers/lngHelper";
import { NotFound } from "../notFound/NotFound";
import "./ourProducts.scss";
import { Filter } from "./filter/Filter";
import { CEOText } from "./CEOText/CEOText";
import { useProduct } from "../../../hooks/useProduct";

export const OurProducts: React.FC = () => {
  let { currentCategory } = useProduct();
  useBreadcrumbs({name: lngHelper(currentCategory?.name), link: `/ourProducts/${currentCategory?.id}`});
  
  if (!currentCategory) return <NotFound />

  let Products = currentCategory?.items.map((i, index) => <ProductPreview key={index} {...i} />)
  
  return <section className="our-products">
    <div className='our-products__productsContainer'>
      <Filter />
      <div className="our-products__heading-container">
        <h3 className="our-products__heading">{currentCategory?.name.ru}</h3>
        <p className="our-products__items-count text text_color_grayBright">Предоставленно {currentCategory?.items.length} товаров</p>
      </div>
      <div className="our-products__products">{Products}</div>
    </div>
    <CEOText />
  </section>
};