import { Item } from "./Item";
import "./aboutUs.scss";

export const AboutUs: React.FC = () => {
  return <div className="aboutUs">
    <div className="aboutUs__descriptionContainer">
      <h3 className="aboutUs__companyName">ООО "ТМН-Групп <br />Украина"</h3>
      <p className="text aboutUs__companyDescription">Мы специализируемся на поставках современных качественных и профессионально подобранных медецинских изделий. В настоящее время компания занимает лидирующие позиции на рынках оптовых продаж одноразовых медецинских изделий.</p>
    </div>
    <div className='aboutUs__items'>
      <Item text="Предлагаем исключительно высококачественный и сертифицированный товар" type={0} />
      <Item text='17 лет высокого стандарта обслуживания' type={1} />
      <Item text='Быстрое оформление без подписок и взносов' type={2} />
      <Item text='Возможность заключения долгосрочного партнерства' type={3} />
    </div>
  </div>
};