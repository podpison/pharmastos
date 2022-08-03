import { useProduct } from "../../../../../hooks/useProduct";
import "./certificates.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import arrowRight from "./../../../../../assets/images/arrowRight.png";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Certificate } from "./certificate/Certificate";

const slidesToShow = 4;
type ArrowsType = 'next' | 'prev';

export const Certificates: React.FC = () => {
  const [disabledArrow, setDisabledArrow] = useState<null | ArrowsType>(null);
  const { t } = useTranslation();
  let { currentProduct } = useProduct();
  const sliderRef = useRef<any>(null);

  let _Certificates = currentProduct?.certificate.map((c, index) => <Certificate src={c} index={index} key={index} />)
  let maxIndex = (currentProduct?.certificate?.length || 4) - slidesToShow;

  let sign = t('ourProducts.certificates.sign');
  let name = currentProduct?.enName.split(' ').slice(2).join(' ');
  let signWithName = sign.split(' ').slice(0, 1).join() + ` ${name} ` + sign.split(' ').slice(1).join(' ');

  const handleBeforeChange = (oldIndex: number, newIndex: number) => {
    setDisabledArrow(newIndex === maxIndex ? 'next' : newIndex === 0 ? 'prev' : null);
  };
  const handleArrowClick = (type: ArrowsType) => {
    type === 'next' ? sliderRef?.current.slickNext() : sliderRef?.current.slickPrev();
  }
  return <div className="certificates">
    <div className="certificates__headingContainer">
      <h3 className="certificates__heading">{t('ourProducts.certificates.heading')}</h3>
      <p className="certificates__sign">{signWithName}</p>
      <div className="certificates__sliderArrows">
        <button disabled={disabledArrow === 'prev'} onClick={() => handleArrowClick("prev")} className="certificates__sliderArrow">
          <img src={arrowRight} alt={t('ourProducts.certificates.arrowLeft')} />
        </button>
        <button disabled={disabledArrow === 'next'} onClick={() => handleArrowClick("next")} className="certificates__sliderArrow">
          <img src={arrowRight} alt={t('ourProducts.certificates.arrowRight')} />
        </button>
      </div>
    </div>
    <Slider beforeChange={handleBeforeChange} className="certificates__itemsContainer" ref={sliderRef} slidesToShow={slidesToShow} slidesToScroll={1} infinite={false} arrows={false} adaptiveHeight>
      {_Certificates}
    </Slider>
  </div>
};