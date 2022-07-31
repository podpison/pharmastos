import { useState } from "react";
import { useTranslation } from "react-i18next";
import { classNameHelper } from "../../../../helpers/classNameHelper";
import { lngHelper } from "../../../../helpers/lngHelper";
import { RuUaArrayTextType, RuUaTextType } from "../../../../redux/store";
import "./CEOText.scss";

type Props = {
  heading: RuUaTextType
  texts: RuUaArrayTextType
}

export const CEOText: React.FC<Props> = ({ heading, texts }) => {
  const [hidden, setHidden] = useState(true);
  const { t } = useTranslation();

  let Texts = (lngHelper(texts) as string[])?.map((t, index) => <p className='text CEO-text__text' key={index}>{t}</p>)

  return <div className='CEO-text'>
    <h3 className='CEO-text__heading'>{lngHelper(heading).split(' ').slice(0, 3).join(' ')}</h3>
    <div className={classNameHelper('CEO-text__texts', {hidden})}>
      {Texts}
    </div>
    <p onClick={() => setHidden(prev => !prev)} className='CEO-text__showMoreButton'>{t('ourProducts.CEOText.readMore')}</p>
  </div>
};