import { useBreadcrumbs } from "../../../hooks/useBreadcrumbs";
import { ProductPreview } from "./productPreview/ProductPreview";
import { lngHelper } from "./../../../helpers/lngHelper";
import { NotFound } from "../notFound/NotFound";
import "./ourProducts.scss";
import { Filter } from "./filter/Filter";
import { CEOText } from "./CEOText/CEOText";
import { useProduct } from "../../../hooks/useProduct";
import { useTranslation } from "react-i18next";

export const OurProducts: React.FC = () => {
  let { currentCategory } = useProduct();
  const { t } = useTranslation();
  useBreadcrumbs({name: currentCategory?.name, link: `/ourProducts/${currentCategory?.id}`});
  
  if (!currentCategory) return <NotFound />

  let Products = currentCategory?.items.map((i, index) => <ProductPreview key={index} {...i} />)
  
  return <section className="our-products">
    <div className='our-products__productsContainer'>
      <Filter />
      <div className="our-products__heading-container">
        <h3 className="our-products__heading">{lngHelper(currentCategory?.name)}</h3>
        <p className="our-products__items-count text text_color_grayBright">Предоставленно {currentCategory?.items.length} товаров</p>
      </div>
      <div className="our-products__products">{Products}</div>
    </div>
    <CEOText heading={{ru: 'CEO текст', ua: 'CEO текст'}} texts={{ru: {array: ['Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos voluptatibus, tempora nostrum illum tenetur magnam? Totam officiis quos libero, sint obcaecati laborum aliquam. Cupiditate maiores similique impedit quaerat, dolorem obcaecati? Animi rem delectus, ex est sapiente eaque atque nemo vel aperiam dolores dolorum reprehenderit placeat incidunt non laboriosam recusandae. Accusamus minus aspernatur placeat qui dolor pariatur eos excepturi quo sunt.', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos voluptatibus, tempora nostrum illum tenetur magnam? Totam officiis quos libero, sint obcaecati laborum aliquam. Cupiditate maiores similique impedit quaerat, dolorem obcaecati? Animi rem delectus, ex est sapiente eaque atque nemo vel aperiam dolores dolorum reprehenderit placeat incidunt non laboriosam recusandae. Accusamus minus aspernatur placeat qui dolor pariatur eos excepturi quo sunt.', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos voluptatibus, tempora nostrum illum tenetur magnam? Totam officiis quos libero, sint obcaecati laborum aliquam. Cupiditate maiores similique impedit quaerat, dolorem obcaecati? Animi rem delectus, ex est sapiente eaque atque nemo vel aperiam dolores dolorum reprehenderit placeat incidunt non laboriosam recusandae. Accusamus minus aspernatur placeat qui dolor pariatur eos excepturi quo sunt.']}, ua: {array: ['Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos voluptatibus, tempora nostrum illum tenetur magnam? Totam officiis quos libero, sint obcaecati laborum aliquam. Cupiditate maiores similique impedit quaerat, dolorem obcaecati? Animi rem delectus, ex est sapiente eaque atque nemo vel aperiam dolores dolorum reprehenderit placeat incidunt non laboriosam recusandae. Accusamus minus aspernatur placeat qui dolor pariatur eos excepturi quo sunt.', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos voluptatibus, tempora nostrum illum tenetur magnam? Totam officiis quos libero, sint obcaecati laborum aliquam. Cupiditate maiores similique impedit quaerat, dolorem obcaecati? Animi rem delectus, ex est sapiente eaque atque nemo vel aperiam dolores dolorum reprehenderit placeat incidunt non laboriosam recusandae. Accusamus minus aspernatur placeat qui dolor pariatur eos excepturi quo sunt.', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos voluptatibus, tempora nostrum illum tenetur magnam? Totam officiis quos libero, sint obcaecati laborum aliquam. Cupiditate maiores similique impedit quaerat, dolorem obcaecati? Animi rem delectus, ex est sapiente eaque atque nemo vel aperiam dolores dolorum reprehenderit placeat incidunt non laboriosam recusandae. Accusamus minus aspernatur placeat qui dolor pariatur eos excepturi quo sunt.']}}} />
  </section>
};