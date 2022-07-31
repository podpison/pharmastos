import { ProductType } from "../../../../../../../redux/reducers/staticReducer";
import "./sizes.scss";

type Props = {
  sizes: ProductType['content']['details']['sizes']
}

export const Sizes: React.FC<Props> = ({ sizes }) => {
  let Items = sizes.map((s, index) => {
    return <div className="product__item" key={index}>
      <p className='text text_color_gray'>{s.size}</p>
      <p className='text text_color_gray'>{s.weight}</p>
      <p className='text text_color_gray'>{s.vendorСode}</p>
      <p className='text text_color_gray'>{s.palmWidth}</p>
      <p className='text text_color_gray'>{s.length}</p>
    </div>
  })

  return <div className='product__sizes'>
    <h5 className="product__heading">Размеры</h5>
    <div className="product__columnNames">
      <h6 className="product__columnName">Размер перчатки</h6>
      <h6 className="product__columnName">Вес перчатки (г.)</h6>
      <h6 className="product__columnName">Артикул</h6>
      <h6 className="product__columnName">Ширина ладони (мм)</h6>
      <h6 className="product__columnName">Длина (мм)</h6>
    </div>
    <div className="product__itemsContainer">
      {Items}
    </div>
  </div>
}