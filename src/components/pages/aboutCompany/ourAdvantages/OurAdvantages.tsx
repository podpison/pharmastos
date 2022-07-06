import { Advantages } from "../../../ui/advantages/Advantages";
import "./ourAdvantages_type.scss";

const advantagesProps = {
  heading: 'Наши преимущества',
  description: 'Широкий ассортимент неопудренных и опудренных, латексных и синтетических, смотровых и хирургических, в том числе специализированных, перчаток производства WRP позволяет обеспечить наилучшую барьерную защиту для медецинского персонала всех специальностей.',
  items: [
    {
      text: 'Представлены в 4 регионах Украины'
    },
    {
      text: 'Единая ценовая политика'
    },
    {
      text: 'Наличие складов в большистве крупных городов страны'
    },
    {
      text: 'Высокий профессиональный уровень персонала'
    },
  ]
}

export const OurAdvantages: React.FC = () => {
  return <Advantages className="our-advantages" {...advantagesProps} />
};