import { useTranslation } from "react-i18next";
import "./detail.scss";

type Props = {
  heading: string
  className?: string
  columnNames: string[]
  Items: JSX.Element[]
}

export const Detail: React.FC<Props> = ({ heading, className = '', columnNames, Items }) => {
  const { t } = useTranslation();

  let ColumnNames = columnNames.map((n, index) => {
    return <th className="product__columnName" key={index}>
      <h6>{t(n)}</h6>
    </th>
  })

  return <div className={`product__detail ${className}`}>
    <h5 className="product__heading">{t(heading)}</h5>
    <table className='product__table'>
      <thead>
        <tr className='product__columnNames'>
          {ColumnNames}
        </tr>
      </thead>
      <tbody className="product__itemsContainer">
        {Items}
      </tbody>
    </table>
  </div>
};