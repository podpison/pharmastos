import { Advantages } from "../../../ui/advantages/Advantages";
import "./ourAdvantages_type.scss";

const advantagesProps = {
  heading: 'aboutCompany.advantages.heading',
  description: 'aboutCompany.advantages.description',
  items: [
    {
      text: 'aboutCompany.advantages.items.0'
    },
    {
      text: 'aboutCompany.advantages.items.1'
    },
    {
      text: 'aboutCompany.advantages.items.2'
    },
    {
      text: 'aboutCompany.advantages.items.3'
    },
  ]
}

export const OurAdvantages: React.FC = () => {
  return <Advantages className="our-advantages" {...advantagesProps} />
};