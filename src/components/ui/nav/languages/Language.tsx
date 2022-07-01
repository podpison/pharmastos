import { classNameHelper } from "../../../../helpers/classNameHelper";

type Props = {
  currentLng: 'ru' | 'ua'
  lng: 'ru' | 'ua'
  changeLng: (lng: Props['lng']) => void
}

export const Language: React.FC<Props> = ({ currentLng, lng, changeLng }) => {
  return <button onClick={() => changeLng(lng)} className={classNameHelper('languages__language text', {disabled: lng !== currentLng})}>{lng}</button>
};