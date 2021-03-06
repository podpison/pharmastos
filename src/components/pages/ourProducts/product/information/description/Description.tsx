import { useTranslation } from "react-i18next";
import { lngHelper } from "../../../../../../helpers/lngHelper";
import { useProduct } from "../../../../../../hooks/useProduct";
import "./description.scss";

export const Description: React.FC = () => {
  const { t } = useTranslation();
  let { currentProduct } = useProduct();

  if (!currentProduct) return <></>
  let _description = currentProduct.content.description;
  let description = {
    type: _description.type,
    material: _description.material,
    powder: _description.powder,
    color: _description.color,
    design: _description.design,
    package: _description.package,
    medicalDevice: _description.medicalDevice,
    personalProtectiveEquipment: _description.personalProtectiveEquipment,
    qualityAssurance: _description.qualityAssurance
  } //keys must be in a specific order
  
  let descriptionKeys = Object.keys(description) as (keyof typeof _description)[]

  let Items = descriptionKeys.map((k, index) => <p key={index} className='product__item text'><span>{t(`ourProducts.information.description.${k}`)}: </span> {lngHelper(description[k])}</p>);

  return <div className='product__description'>
    <h5 className='product__heading'>{t('ourProducts.information.description.heading')}</h5>
    <div className='product__items'>
      {Items}
    </div>
  </div>
};
