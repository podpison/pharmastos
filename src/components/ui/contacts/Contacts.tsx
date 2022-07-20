import { useTranslation } from "react-i18next";
import { classNameHelper } from "../../../helpers/classNameHelper";
import "./contacts.scss";

type Props = {
  className?: string
  phoneNumbers: string[]
  geopoint?: {
    link: string
    name: string
  }
  email?: boolean
}

export const Contacts: React.FC<Props> = ({ className, phoneNumbers, geopoint, email }) => {
  const { t } = useTranslation();

  let Phones = phoneNumbers.map((p, index) => <a key={index} className='text contacts__phone' href={`tel: ${p}`}><span>{t(p)}</span></a>)

  return <div className={classNameHelper('contacts', {}, className)}>
    <div className="contacts__phones">
      {Phones}
    </div>
    {geopoint && <a target="_blank" rel="noopener noreferrer" href={geopoint.link} className="text contacts__geopoint">{t(geopoint.name)}</a>}
    {email && <a className="text contacts__mail" href='mailto: office@tmngroup.com.ua'>office@tmngroup.com.ua</a>}
  </div>
};