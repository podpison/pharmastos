import { lngHelper } from "../../../../helpers/lngHelper";
import { useBreadcrumbs } from "../../../../hooks/useBreadcrumbs";
import { useProduct } from "../../../../hooks/useProduct";
import { NotFound } from "../../notFound/NotFound";
import { ProductPreview } from "../productPreview/ProductPreview";
import { Certificates } from "./certificates/Certificates";
import { GloveAdvantages } from "./certificates/gloveAdvantages/GloveAdvantages";
import { Information } from "./information/Information";
import "./product.scss";

export const Product: React.FC = () => {
  let { currentCategory, currentProduct } = useProduct();
  useBreadcrumbs({ name: lngHelper(currentCategory?.name), link: `/ourProducts/${currentCategory?.id}` });
  useBreadcrumbs({ name: lngHelper(currentProduct?.name), link: `/ourProducts/${currentCategory?.id}/${currentProduct?.id}` });

  if (!currentProduct?.content) return <NotFound />

  return <section className="product">
    <ProductPreview className="product__preview" {...currentProduct} />
    <Information />
    {/* <Certificates /> */}
    <GloveAdvantages />
  </section>
};
