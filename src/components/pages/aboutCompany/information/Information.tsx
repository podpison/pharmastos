import "./information.scss";
import glovesImg from "./../../../../assets/images/pages/aboutCompany/gloves.png";
import favicon from "./../../../../assets/images/favicon.png";

export const Information: React.FC = () => {
  return <div className="information">
    <div className="information__content">
      <h2 className="information__heading">О компании</h2>
      <p className="text">ТМН-ГРУПП УКРАИНА — уполномоченные предсставители ряда мировых производителей изделий медицинского назначения: WRP, Heliomed, LinkMed.</p>
      <p className="text">Мы — это коллектив опытных специалистов, профессиональная цель которых минимизировать риск заражений. Специализируясь в области медицинских и защитных перчаток, наши сотрудники имеют многолетний опыт в этой области и постоянно следят за развитием технологии и успешно продвигают мировые тенденции на отечественном рынке.</p>
      <p className="text">Продукция WRP предназначена для медицинских учреждений, стоматологических и ветеринарных центров. Также наши товары находят широкое применение на заводах пищевой, химической и фармацевтической промышленности, в домашнем хозяйстве, в салонах красоты и парикмахерских, в автосервисах и везде, где необходима защита рук.</p>
    </div>
    <div className="information__gloves">
      <img alt='gloves' src={glovesImg} />
      <div className="information__glovesBackground" />
      <img alt='favicon' src={favicon} className='information__favicon' />
    </div>
  </div>
};