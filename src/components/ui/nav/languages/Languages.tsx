import { Language } from "./Language";
import "./languages.scss";
import cn from "classnames";

type Props = {
  className: string
}

export const Languages: React.FC<Props> = ({ className }) => {
  return <div className={cn('languages', className)}>
    <Language lng='ru' />
    <Language lng='ua' />
  </div>
};