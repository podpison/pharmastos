import { Button } from "../../../../ui/button/Button";
import "./article.scss";

export const Article: React.FC = () => {
  return <article className="quickIntroduction__article">
    <h1 className="quickIntroduction__article-heading">ТМН-групп Украина</h1>
    <div className="quickIntroduction__article__texts">
      <p className="quickIntroduction__article__texts-text">Уполномоченные представители ряда мировых производителей изделий медицинского назначения: WRP, Heliomed, LinkMed.</p>
      <p className="quickIntroduction__article__texts-text">Ваш надежный партнер в области профилактики инфекций, связанных с оказанием медецинской помощи.</p>
    </div>
    <Button className="quickIntroduction__article-button">Просмотреть продукцию</Button>
  </article>
};