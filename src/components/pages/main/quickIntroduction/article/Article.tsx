import { Button } from "../../../../ui/button/Button";
import "./article.scss";

export const Article: React.FC = () => {
  return <article className="quickIntroduction__article">
    <h1 className="quickIntroduction__articleHeading">ТМН-групп Украина</h1>
    <div className="quickIntroduction__articleTexts">
      <p className="text quickIntroduction__articleText">Уполномоченные представители ряда мировых производителей изделий медицинского назначения: WRP, Heliomed, LinkMed.</p>
      <p className="text quickIntroduction__articleText">Ваш надежный партнер в области профилактики инфекций, связанных с оказанием медецинской помощи.</p>
    </div>
    <Button className="quickIntroduction__articleButton">Просмотреть продукцию</Button>
  </article>
};