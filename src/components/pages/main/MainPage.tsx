// import "./name.scss";
import { ChooseCategory } from "./chooseCategory/ChooseCategory";
import { AboutUs } from "./aboutUs/AboutUs";
import { QuickIntroduction } from "./quickIntroduction/QuickIntroduction";
import { GloveAdvantages } from "./gloveAdvantages/GloveAdvantages";
import { SubscribeForm } from "./subscribeForm/SubscribeForm";
import { Cards } from "../../ui/cards/Cards";

const fakeProducts = [
  {
    img: 'https://i.postimg.cc/MTJCs8ZN/image-2.png',
    name: 'Перчатка dermagrip ultra nitrile ls powder free',
    description: 'Хирургические перчатки синтетические (полиизопрен). Без латекса, неопудренные, ДГД покрытие, стерильные микротекстурированные',
    price: 225,
    to: 'asdsa'
  },
  {
    img: 'https://i.postimg.cc/MTJCs8ZN/image-2.png',
    name: 'Перчатка dermagrip ultra nitrile ls powder free',
    description: 'Хирургические перчатки синтетические (полиизопрен). Без латекса, неопудренные, ДГД покрытие, стерильные микротекстурированные',
    price: 225,
    to: 'asdsa'
  },
  {
    img: 'https://i.postimg.cc/MTJCs8ZN/image-2.png',
    name: 'Перчатка dermagrip ultra nitrile ls powder free',
    description: 'Хирургические перчатки синтетические (полиизопрен). Без латекса, неопудренные, ДГД покрытие, стерильные микротекстурированные',
    price: 225,
    to: 'asdsa'
  },
  {
    img: 'https://i.postimg.cc/MTJCs8ZN/image-2.png',
    name: 'Перчатка dermagrip ultra nitrile ls powder free',
    description: 'Хирургические перчатки синтетические (полиизопрен). Без латекса, неопудренные, ДГД покрытие, стерильные микротекстурированные',
    price: 225,
    to: 'asdsa'
  },
]

export const MainPage: React.FC = () => {
  return <section>
    <QuickIntroduction />
    <ChooseCategory />
    <Cards heading="Популярные" link={{link: 'Все продукты', path: '/somewhere'}} items={fakeProducts} />
    <AboutUs />
    <GloveAdvantages />
    <SubscribeForm />
  </section>
};