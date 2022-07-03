import { useState } from "react";
import { Language } from "./Language";
import "./languages.scss";
import cn from "classnames";

type Props = {
  className: string
}

export const Languages: React.FC<Props> = ({ className }) => {
  const [activeLng, setActiveLng] = useState<'ru' | 'ua'>('ru');

  return <div className={cn('languages', className)}>
    <Language changeLng={setActiveLng} currentLng={activeLng} lng={'ru'} />
    <Language changeLng={setActiveLng} currentLng={activeLng} lng={'ua'} />
  </div>
};