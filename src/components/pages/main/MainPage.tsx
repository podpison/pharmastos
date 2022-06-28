// import "./name.scss";
import { ChooseCategory } from "./chooseCategory/ChooseCategory";
import { AboutUs } from "./aboutUs/AboutUs";
import { Popular } from "./popular/Popular";
import { QuickIntroduction } from "./quickIntroduction/QuickIntroduction";

export const MainPage: React.FC = () => {
  return <section>
    <QuickIntroduction />
    <ChooseCategory />
    <Popular />
    <AboutUs />
  </section>
};