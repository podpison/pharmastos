import { useTranslation } from "react-i18next";
import { classNameHelper } from "../../../../helpers/classNameHelper";

type Props = {
  lng: 'ru' | 'ua'
}

export const Language: React.FC<Props> = ({ lng }) => {
  let currentLng = localStorage.getItem('lng') || 'ru';
  const { i18n } = useTranslation();
  const onClick = () => {
    i18n.changeLanguage(lng)
    localStorage.setItem('lng', lng);
  };
  
  return <button onClick={onClick} className={classNameHelper('languages__language', {disabled: lng !== currentLng}, 'text')}>{lng}</button>
};