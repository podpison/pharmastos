import "./mainPage.scss";
import { ChooseCategory } from "./chooseCategory/ChooseCategory";
import { AboutUs } from "./aboutUs/AboutUs";
import { QuickIntroduction } from "./quickIntroduction/QuickIntroduction";
import { GloveAdvantages } from "./gloveAdvantages/GloveAdvantages";
import { SubscribeForm } from "./subscribeForm/SubscribeForm";
import { Cards } from "../../ui/cards/Cards";
import { News } from "../../ui/news/News";

const fakeProducts = [
  {
    img: 'https://i.postimg.cc/MTJCs8ZN/image-2.png',
    name: {
      ru: 'Перчатка dermagrip ultra nitrile ls powder free',
      ua: 'Перчатка dermagrip ultra nitrile ls powder free'
    },
    description: {
      ru: 'Хирургические перчатки синтетические (полиизопрен). Без латекса, неопудренные, ДГД покрытие, стерильные микротекстурированные',
      ua: 'Хирургические перчатки синтетические (полиизопрен). Без латекса, неопудренные, ДГД покрытие, стерильные микротекстурированные'
    },
    price: 225,
    to: '/sykanaxyi',
    id: '0',
    link: true
  }, 
  {
    img: 'https://i.postimg.cc/MTJCs8ZN/image-2.png',
    name: {
      ru: 'Перчатка dermagrip ultra nitrile ls powder free',
      ua: 'Перчатка dermagrip ultra nitrile ls powder free'
    },
    description: {
      ru: 'Хирургические перчатки синтетические (полиизопрен). Без латекса, неопудренные, ДГД покрытие, стерильные микротекстурированные',
      ua: 'Хирургические перчатки синтетические (полиизопрен). Без латекса, неопудренные, ДГД покрытие, стерильные микротекстурированные'
    },
    price: 225,
    to: '/sykanaxyi',
    id: '1',
    link: true
  }, 
  {
    img: 'https://i.postimg.cc/MTJCs8ZN/image-2.png',
    name: {
      ru: 'Перчатка dermagrip ultra nitrile ls powder free',
      ua: 'Перчатка dermagrip ultra nitrile ls powder free'
    },
    description: {
      ru: 'Хирургические перчатки синтетические (полиизопрен). Без латекса, неопудренные, ДГД покрытие, стерильные микротекстурированные',
      ua: 'Хирургические перчатки синтетические (полиизопрен). Без латекса, неопудренные, ДГД покрытие, стерильные микротекстурированные'
    },
    price: 225,
    to: '/sykanaxyi',
    id: '2',
    link: true
  }, 
  {
    img: 'https://i.postimg.cc/MTJCs8ZN/image-2.png',
    name: {
      ru: 'Перчатка dermagrip ultra nitrile ls powder free',
      ua: 'Перчатка dermagrip ultra nitrile ls powder free'
    },
    description: {
      ru: 'Хирургические перчатки синтетические (полиизопрен). Без латекса, неопудренные, ДГД покрытие, стерильные микротекстурированные',
      ua: 'Хирургические перчатки синтетические (полиизопрен). Без латекса, неопудренные, ДГД покрытие, стерильные микротекстурированные'
    },
    price: 225,
    to: '/sykanaxyi',
    id: '3',
    link: true
  }, 
]

export const MainPage: React.FC = () => {
  return <section>
    <QuickIntroduction />
    <ChooseCategory />
    <Cards className='mainPage__cards' heading="mainPage.cards.heading" link={{link: 'mainPage.cards.link', path: '/ourProducts'}} items={fakeProducts} />
    <AboutUs />
    <GloveAdvantages />
    <SubscribeForm />
    <News />
  </section>
};