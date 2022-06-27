import "./button.scss";
import "./button_small.scss";
import { classNameHelper } from "../../../helpers/classNameHelper";

type Props = {
  children?: React.ReactNode
  className?: string
  disabled?: boolean
  small?: boolean
}

export const Button: React.FC<Props> = ({ children, className, disabled = false, small = false }) => {
  
  let buttonClassNames = classNameHelper('button', {small}, className);

  return <button disabled={disabled} className={buttonClassNames}>{children}</button>
};