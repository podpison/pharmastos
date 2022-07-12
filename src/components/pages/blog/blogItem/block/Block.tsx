import "./block.scss";

type BlogBlockType = {
  name: string
  text: (string | string[])[]
}

type Props = {
  currentItem: BlogBlockType
}

export const Block: React.FC<Props> = ({ currentItem }) => {
  let Texts = currentItem.text.map((t, index) => {
    if (Array.isArray(t)) {
      let Items = t.map((i, index, array) => <li className="text text_color_gray blogItem__listItem" key={index}>{`${i}${index === array.length - 1 ? '.' : ';'}`}</li>)
      return <ul className="blogItem__list" key={index}>
        {Items}
      </ul>
    };
    return <p className="text text_color_gray blogItem__blockText" key={index}>{t}</p>
  });

  return <div className="blogItem__block">
    <h4 className="blogItem__blockHeading">{currentItem.name}</h4>
    <div className="blogItem__blockTexts">
      {Texts}
    </div>
  </div>
};