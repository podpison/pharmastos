import "./whatWeDo.scss";
import mapImg from "./../../../../assets/images/pages/aboutCompany/map.png";
import { useTranslation } from "react-i18next";

export const WhatWeDo: React.FC = () => {
  const { t } = useTranslation();

  return <div className="whatWeDo">
    <img className='whatWeDo__map' alt={t('aboutCompany.whatWeDo.map')} src={mapImg} />
    <div>
      <h3 data-color='white' className="whatWeDo__heading">{t('aboutCompany.whatWeDo.heading')}</h3>
      <p className="text text_color_white">{t('aboutCompany.whatWeDo.texts.0')}</p>
      <p className="text text_color_white">{t('aboutCompany.whatWeDo.texts.1')}</p>
    </div>
  </div>
};