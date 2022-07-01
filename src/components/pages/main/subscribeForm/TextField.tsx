import { Field } from "formik";
import "./subscribeForm.scss";
import classNames from "classnames";

type Fields = {
  name?: string
  phone?: string
  email?: string
}

type Props = {
  name: keyof Fields
  error: string | undefined
  touched: boolean | undefined
  placeholder: string
}

export const TextField: React.FC<Props> = ({ name, error, touched, placeholder }) => {

  let containerClassNames = classNames('subscribeForm__textFieldContainer', ((error && touched) && 'subscribeForm__textFieldContainer_error text2'))

  return <div className={containerClassNames}>
    <Field placeholder={placeholder} className='text text_grayBright subscribeForm__textField' name={name} />
  </div>
};