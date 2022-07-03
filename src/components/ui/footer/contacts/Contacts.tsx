import "./contacts.scss";

export const Contacts: React.FC = () => {
  return <div className='contacts'>
    <div className="contacts__phones">
      <a className='text contacts__phone' href='tel: (044) 426-64-44'>(044) 426-64-44</a>
      <a className='text contacts__phone' href='tel: (067) 570-34-89'>(067) 570-34-89</a>
    </div>
    <a className="text contacts__mail" href='mailto: office@tmngroup.com.ua'>office@tmngroup.com.ua</a>
  </div>
};