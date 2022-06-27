import { useState } from "react";
import { Language } from "./Language";
import "./languages.scss";

export const Languages: React.FC = () => {
  const [activeLng, setActiveLng] = useState<'ru' | 'ua'>('ru');

  return <div className='languages'>
    <Language changeLng={setActiveLng} currentLng={activeLng} lng={'ru'} />
    <Language changeLng={setActiveLng} currentLng={activeLng} lng={'ua'} />
  </div>
};