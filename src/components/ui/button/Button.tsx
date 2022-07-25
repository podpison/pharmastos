import "./button.scss";
import "./button_small.scss";
import "./button_fullWidth.scss";
import { classNameHelper } from "../../../helpers/classNameHelper";

type Props = {
  children?: React.ReactNode
  className?: string
  disabled?: boolean
  small?: boolean
  fullWidth?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export const Button: React.FC<Props> = ({ children, className, disabled = false, small = false, fullWidth = false, onClick, type = 'submit' }) => {
  
  let buttonClassNames = classNameHelper('button', {small, fullWidth}, className);

  return <button type={type} onClick={onClick} disabled={disabled} className={buttonClassNames}>{children}</button>
};