import { useProduct } from "../../../../../../hooks/useProduct";
import { Detail } from "./detail/Detail";
import "./details.scss";
import gloveExample from "../../../../../../assets/images/pages/ourProducts/gloveExample.png";
import { useTranslation } from "react-i18next";

export const Details: React.FC = () => {
  let { currentProduct } = useProduct();
  const { t } = useTranslation();

  if (!currentProduct) return <></>

  let { thickness, sizes } = currentProduct.content.details;

  let SizesItems = sizes.map((s, index) => {
    return <tr className="product__item" key={index}>
      <td className='text text_color_gray'>{s.size}</td>
      <td className='text text_color_gray'>{s.weight}</td>
      <td className='text text_color_gray'>{s.vendorСode}</td>
      <td className='text text_color_gray'>{s.palmWidth}</td>
      <td className='text text_color_gray'>{s.length}</td>
    </tr>
  })
  let thicknessKeys = Object.keys(thickness) as (keyof typeof thickness)[]
  let ThicknessItems = thicknessKeys.map((k, index) => {
    return <tr className="product__item" key={index}>
      <td className="text text_color_gray">{t(`ourProducts.information.details.thickness.${k}`)}</td>
      <td className="text text_color_gray">{thickness[k]}</td>
    </tr>
  })

  return <div className="product__details">
    <div className="product__thicknessContainer">
      <Detail Items={ThicknessItems} heading='ourProducts.information.details.thickness.heading' columnNames={['ourProducts.information.details.thickness.measurementLocations', 'ourProducts.information.details.thickness.wallThickness']} />
      <img className="product__gloveExample" src={gloveExample} alt='ourProducts.information.details.thickness.glove' />
    </div>
    <Detail className="product__sizesContainer" Items={SizesItems} heading='ourProducts.information.details.sizes.heading' columnNames={['ourProducts.information.details.sizes.gloveSize', 'ourProducts.information.details.sizes.gloveWeight', 'ourProducts.information.details.sizes.vendorCode', 'ourProducts.information.details.sizes.palmWidth', 'ourProducts.information.details.sizes.length']} />
  </div>
};