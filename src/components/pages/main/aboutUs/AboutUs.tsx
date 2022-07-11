import { Advantages } from "../../../ui/advantages/Advantages";
import "./aboutUsItem_type.scss";
import "./aboutUs.scss";

const advantagesProps = {
  description: 'Мы специализируемся на поставках современных качественных и профессионально подобранных медецинских изделий. В настоящее время компания занимает лидирующие позиции на рынках оптовых продаж одноразовых медецинских изделий.',
  heading: 'ООО "ТМН-Групп Украина"',
  items: [
    {
      text: 'Предлагаем исключительно высококачественный и сертифицированный товар'
    },
    {
      text: '17 лет высокого стандарта обслуживания'
    },
    {
      text: 'Быстрое оформление без подписок и взносов'
    },
    {
      text: 'Возможность заключения долгосрочного партнерства'
    },
  ],
  linearBC: true
}

export const AboutUs: React.FC = () => {
  return <Advantages className='about-us__advantages' {...advantagesProps} />
};