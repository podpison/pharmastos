import { useBreadcrumbs } from "../../../../hooks/useBreadcrumbs";
import { useProduct } from "../../../../hooks/useProduct";
import { News } from "../../../ui/news/News";
import { NotFound } from "../../notFound/NotFound";
import { CEOText } from "../CEOText/CEOText";
import { ProductPreview } from "../productPreview/ProductPreview";
import { Certificates } from "./certificates/Certificates";
import { GloveAdvantages } from "./certificates/gloveAdvantages/GloveAdvantages";
import { GloveRemovalTehnique } from "./gloveRemovalTehnique/GloveRemovalTehnique";
import { Information } from "./information/Information";
import "./product.scss";

export const Product: React.FC = () => {
  let { currentCategory, currentProduct } = useProduct();

  useBreadcrumbs({ name: currentCategory?.name, link: `/ourProducts/${currentCategory?.id}` });
  useBreadcrumbs({ name: currentProduct?.name, link: `/ourProducts/${currentCategory?.id}/${currentProduct?.id}` });

  if (!currentProduct?.content) return <NotFound />

  return <section className="product">
    <ProductPreview className="product__preview" {...currentProduct} />
    <Information />
    <Certificates />
    <GloveAdvantages />
    <GloveRemovalTehnique />
    <CEOText heading={currentProduct.name} texts={currentProduct.CEOText} />
    <News />
  </section>
};
