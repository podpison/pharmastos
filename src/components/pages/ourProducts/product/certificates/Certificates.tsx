import { useProduct } from "../../../../../hooks/useProduct";
import "./certificates.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import arrowRight from "./../../../../../assets/images/arrowRight.png";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

export const Certificates: React.FC = () => {
  const { t } = useTranslation();
  let { currentProduct } = useProduct();
  const sliderRef = useRef<any>(null);

  let _Certificates = currentProduct?.certificate.map((c, index) => <img className="certificates__item" key={index} alt={t('ourProducts.certificates.certificate')} src={c} />)
  let name = currentProduct?.enName.split(' ').slice(2).join(' ')

  return <div className="certificates">
    <div className="certificates__headingContainer">
      <h3 className="certificates__heading">{t('ourProducts.certificates.heading')}</h3>
      <p className="certificates__sign">{t('ourProducts.certificates.sign')}</p>
      <div className="certificates__sliderArrows">
        <button onClick={() => sliderRef?.current.slickPrev()} className="certificates__sliderArrow">
          <img src={arrowRight} alt={t('ourProducts.certificates.arrowLeft')} />
        </button>
        <button onClick={() => sliderRef?.current.slickNext()} className="certificates__sliderArrow">
          <img src={arrowRight} alt={t('ourProducts.certificates.arrowRight')} />
        </button>
      </div>
    </div>
    <Slider className="certificates__itemsContainer" ref={sliderRef} slidesToShow={4} slidesToScroll={1} infinite={false} arrows={false} adaptiveHeight>
      {_Certificates}
    </Slider>
  </div>
};