import { Advantages } from "../../../ui/advantages/Advantages";
import "./aboutUsItem_type.scss";
import "./aboutUs.scss";

const advantagesProps = {
  heading: 'mainPage.aboutUs.heading',
  description: 'mainPage.aboutUs.description',
  items: [
    {
      text: 'mainPage.aboutUs.items.0'
    },
    {
      text: 'mainPage.aboutUs.items.1'
    },
    {
      text: 'mainPage.aboutUs.items.2'
    },
    {
      text: 'mainPage.aboutUs.items.3'
    },
  ],
  linearBC: true
}

export const AboutUs: React.FC = () => {
  return <Advantages className='about-us__advantages' {...advantagesProps} />
};