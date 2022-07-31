import { ProductType } from "../../../../../redux/reducers/staticReducer";
import "./uniqueTags.scss";
import { lngHelper } from "../../../../../helpers/lngHelper";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectOurProductItems } from "../../../../../redux/selectors";
import { useTranslation } from "react-i18next";

type Props = {
  name: keyof ProductType['content']['description']
}

export const UniqueTags: React.FC<Props> = ({ name }) => {
  let { categoryId } = useParams();
  const { t } = useTranslation();
  let currentProducts = useSelector(selectOurProductItems).find(c => c.id === categoryId)?.items

  if (!currentProducts?.at(0)?.content) return <></>

  let uniqueItems = currentProducts?.filter((value, index, self) => index === self.findIndex((i) => i.enName === value.enName)).map(f => f.content.description[name])
  let Items = uniqueItems?.map((i, index) => {
    return <div key={index}>
      <input type="checkbox" id={i.ru} />
      <label htmlFor={i.ru}>{lngHelper(i)?.split(' ')[0].replace(/(,)/, '')}</label>
    </div>
  })

  return <div className="filter__blockContainer">
    <p className="text filter__title">{t(`ourProducts.information.description.${name}`)}</p>
    <div>
      {Items}
    </div>
  </div>
};