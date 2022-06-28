import "./button.scss";
import "./button_small.scss";
import { classNameHelper } from "../../../helpers/classNameHelper";

type Props = {
  children?: React.ReactNode
  className?: string
  disabled?: boolean
  small?: boolean
  onClick?: () => void
}

export const Button: React.FC<Props> = ({ children, className, disabled = false, small = false, onClick }) => {
  
  let buttonClassNames = classNameHelper('button', {small}, className);

  return <button onClick={onClick} disabled={disabled} className={buttonClassNames}>{children}</button>
};