import { useTranslation } from "react-i18next";
import { Button } from "../../../ui/button/Button";
import "./filter.scss";
import { UniqueTags } from "./uniqueTags/UniqueTags";

export const Filter: React.FC = () => {
  const { t } = useTranslation();

  return <div className="filter">
    <h5 className='filter__heading'>{t('ourProducts.filter.heading')}</h5>
    <div className="filter__priceContainer">
      <p className="text filter__title">{t('ourProducts.filter.price')}</p>
      <div className='filter__choosenPrice text'>250</div>
      <div className='filter__priceSeparator'></div>
      <div className='filter__choosenPrice text'>800</div>
    </div>
    <Button className="filter__filterButton" fullWidth>{t('ourProducts.filter.filter')}</Button>
    <UniqueTags name="material" />
    <UniqueTags name="type" />
    <UniqueTags name="color" />
    <UniqueTags name="powder" />
  </div>
};