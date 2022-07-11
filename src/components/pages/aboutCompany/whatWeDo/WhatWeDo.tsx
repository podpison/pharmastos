import "./whatWeDo.scss";
import mapImg from "./../../../../assets/images/pages/aboutCompany/map.png";

export const WhatWeDo: React.FC = () => {
  return <div className="whatWeDo">
    <img className='whatWeDo__map' alt='map' src={mapImg} />
    <div>
      <h3 data-color='white' className="whatWeDo__heading">Что мы делаем</h3>
      <p className="text text_color_white">В настоящее время ООО «ТМН- ГРУПП УКРАИНА» представлено в 4 регионах Украины и продолжает расширение географии представительств.</p>
      <p className="text text_color_white">Благодаря инновационным и передовым технологиям, применяемым производителями наших перчаток, предлагаемая компанией продукция широко известна и востребована специалистами во всех областях современной медицины, команда менеджеров «ТМН- ГРУПП УКРАИНА» всегда готова оказать квалифицированную помощь в подборе и выборе товаров, в определении максимально выгодных условий работы.</p>
    </div>
  </div>
};