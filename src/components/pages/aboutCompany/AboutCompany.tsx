// import "./aboutCompany.scss";
import { Information } from "./information/Information";
import { OurAdvantages } from "./ourAdvantages/OurAdvantages";
import { WhatWeDo } from "./whatWeDo/WhatWeDo";

export const AboutCompany: React.FC = () => {
  return <section>
    <Information />
    <WhatWeDo />
    <OurAdvantages />
  </section>
};