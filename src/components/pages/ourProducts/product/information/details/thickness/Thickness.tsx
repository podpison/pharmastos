import "./thickness.scss";
import gloveExample from "../../../../../../../assets/images/pages/ourProducts/gloveExample.png";
import { ProductType } from "../../../../../../../redux/reducers/staticReducer";

type Props = {
  thickness: ProductType['content']['details']['thickness']
}

export const Thickness: React.FC<Props> = ({ thickness }) => {
  let thicknessKeys = Object.keys(thickness) as (keyof typeof thickness)[]
  let Thickness = thicknessKeys.map((k, index) => {
    return <div className="product__item" key={index}>
      <p className="text text_color_gray">{k}</p>
      <p className="text text_color_gray">{thickness[k]}</p>
    </div>
  })

  return <div className="product__thickness">
    <div className="product__inner">
      <h5 className="product__heading">Толщина</h5>
      <div className="product__columnNames">
        <h6 className="product__columnName">Локации измерения</h6>
        <h6 className="product__columnName">Толщина стенки (мм)</h6>
      </div>
      <div className="product__items">
        <div className="product__items">
          {Thickness}
        </div>
      </div>
    </div>
    <img className="product__gloveExample" src={gloveExample} alt='glove example' />
  </div>
};