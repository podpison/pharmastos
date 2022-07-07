import { Article } from "./article/Article";
import "./quickIntroduction.scss";
import { Representatives } from "./representatives/Representatives";
import bc from "./../../../../assets/images/bc/quickIntroductionBC.png";

export const QuickIntroduction: React.FC = () => {
  return <div className="quickIntroduction">
    <img className='quickIntroduction__backgroundImage' alt='background' src={bc} />
    <Article />
    <Representatives />
  </div>
};