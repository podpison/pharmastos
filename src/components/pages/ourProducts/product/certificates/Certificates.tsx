import { useProduct } from "../../../../../hooks/useProduct";
import "./certificates.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Certificates: React.FC = () => {
  let { currentProduct } = useProduct();

  let _Certificates = currentProduct?.certificate.map((c, index) => <img className="certificates__item" key={index} alt='certifiate' src={c} />)

  return <div className="certificates">
    <div className="certificates__headingContainer">
      <h3 className="certificates__heading">Сертификаты</h3>
      <p className="certificates__sign">Перчатки {currentProduct?.enName} отвечают самым строгим международным требованиям качества.</p>
    </div>
    <Slider slidesToShow={4} slidesToScroll={1} className="certificates__itemsContainer">
      {_Certificates}
    </Slider>
  </div>
};