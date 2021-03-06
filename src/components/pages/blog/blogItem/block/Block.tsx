import { lastSymbolHelper } from "../../../../../helpers/lastSymbolHelper";
import { lngHelper } from "../../../../../helpers/lngHelper";
import { BlogItemContentItem } from "../../../../../redux/reducers/staticReducer";
import { RuUaArrayTextType } from "../../../../../redux/store";
import "./block.scss";

type Props = {
  currentItem: BlogItemContentItem
}

const isItTypeWithArray = (item: string | RuUaArrayTextType['ru']): item is RuUaArrayTextType['ru'] => {
  return (item as RuUaArrayTextType['ru']).array !== undefined;
}

export const Block: React.FC<Props> = ({ currentItem }) => {
  let currentLng = lngHelper(null) as 'ru' | 'ua'
  let Texts = currentItem.text[currentLng].map((t, index) => {
    if (isItTypeWithArray(t)) {
      let Items = t.array.map((i, index, array) => <li className="text text_color_gray blogItem__listItem" key={index}>{`${i}${lastSymbolHelper(array, index)}`}</li>)
      return <ul className="blogItem__list" key={index}>
        {Items}
      </ul>
    };
    return <p className="text text_color_gray blogItem__blockText" key={index}>{t}</p>
  });

return <div className="blogItem__block">
    <h4 className="blogItem__blockHeading">{lngHelper(currentItem.name)}</h4>
    <div className="blogItem__blockTexts">
      {Texts}
    </div>
  </div>
};