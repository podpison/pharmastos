import "./gloveAdvantages.scss";
import "./glovaAdvantages_type.scss";
import { useTranslation } from "react-i18next";

export const GloveAdvantages: React.FC = () => {
  const { t } = useTranslation();

  return <div className="gloveAdvantages2">
    <h3 className="gloveAdvantages2__heading">{t('ourProducts.gloveAdvantages.heading')}</h3>
    <div className="gloveAdvantages2__content">
      <div className="gloveAdvantages2__items1">
        <p className="text gloveAdvantages2__item gloveAdvantages2__item_type_0">{t('ourProducts.gloveAdvantages.items1.1')}</p>
        <p className="text gloveAdvantages2__item gloveAdvantages2__item_type_1">{t('ourProducts.gloveAdvantages.items1.2')}</p>
        <p className="text gloveAdvantages2__item gloveAdvantages2__item_type_2">{t('ourProducts.gloveAdvantages.items1.3')}</p>
        <p className="text gloveAdvantages2__item gloveAdvantages2__item_type_3">{t('ourProducts.gloveAdvantages.items1.4')}</p>
      </div>
      <div className="gloveAdvantages2__items2">
        <p data-id='01' className='text gloveAdvantages2__item'>{t('ourProducts.gloveAdvantages.items2.1')}</p>
        <p data-id='02' className='text gloveAdvantages2__item'>{t('ourProducts.gloveAdvantages.items2.2')}</p>
        <p data-id='03' className='text gloveAdvantages2__item'>{t('ourProducts.gloveAdvantages.items2.3')}</p>
        <p data-id='04' className='text gloveAdvantages2__item'>{t('ourProducts.gloveAdvantages.items2.4')}</p>
        <p data-id='05' className='text gloveAdvantages2__item'>{t('ourProducts.gloveAdvantages.items2.5')}</p>
        <p data-id='06' className='text gloveAdvantages2__item'>{t('ourProducts.gloveAdvantages.items2.6')}</p>
      </div>
    </div>
  </div>
};