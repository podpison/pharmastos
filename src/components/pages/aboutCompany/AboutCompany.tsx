import { useBreadcrumbs } from "../../../hooks/useBreadcrumbs";
import { Information } from "./information/Information";
import { OurAdvantages } from "./ourAdvantages/OurAdvantages";
import { WhatWeDo } from "./whatWeDo/WhatWeDo";

export const AboutCompany: React.FC = () => {
  useBreadcrumbs({name: 'О компании', link: 'aboutCompant'});

  return <section>
    <Information />
    <WhatWeDo />
    <OurAdvantages />
  </section>
};