import { Link } from "react-router-dom";
import "./chooseCategory.scss";
import "./category_type.scss";
import arrowLeftImg from "./../../../../assets/images/arrowRight.png";

type Props = {
  name: string
  to: string
  type: 0 | 1 | 2 | 3 | 4 | 5
}

export const Category: React.FC<Props> = ({ name, to, type }) => {
  let lastWord = name.split(' ').slice(-1).join(' ');
  let otherWords = name.split(' ').slice(0, -1).join(' ');
  
  return <Link className={`chooseCategory__category chooseCategory__category_type_${type}`} to={`/categories/${to}`}>
    <div className="chooseCategory__categoryContent">
      <h4 data-color='white' className="chooseCategory__categoryName">
        {otherWords}
        <br />
        <span> {lastWord}<img className="chooseCategory__arrowRight" alt='arrow right' src={arrowLeftImg} /></span>
      </h4>     
    </div>
  </Link>
};