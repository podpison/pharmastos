import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Button } from '../../../ui/button/Button';
import { TextField } from './TextField';
import "./subscribeForm.scss";
import backgroundImg from "./../../../../assets/images/bc/subscribeToUs_BC.png";

const initialValues = {
  name: '',
  phone: '',
  email: ''
}

const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

const validationSchema = Yup.object().shape({
  name: Yup.string().min(1, 'Too short').max(50, 'Too long').required('Required'),
  phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Required'),
  email: Yup.string().email('Invalid email').required('Required')
})

export const SubscribeForm: React.FC = () => {
  return <div className='subscribeForm'>
    <img className='subscribeForm__backgroundImage' src={backgroundImg} alt='background' />
    <h3 data-color='white' className='subscribeForm__heading'>Следите за всеми акциями и выгодными предложениями легко</h3>
    <p className="subscribeForm__description text text_color_white">Отправьте нам свой электронный адрес и получайте все новости относительно выгодных предложений и акций нашей компании. Не упускайте шанс обеспечить свою защиту за лучшую цену!</p>
    <Formik initialValues={initialValues} validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log(values)
        resetForm()
      }}
    >
      {({ errors, touched }) => {
        return <Form className='subscribeForm__form'>
          <TextField placeholder={'Name'} name='name' error={errors.name} touched={touched.name} />
          <TextField placeholder={'Phone'} name='phone' error={errors.phone} touched={touched.phone} />
          <TextField placeholder={'E-mail'} name='email' error={errors.email} touched={touched.email} />
          <Button className='subscribeForm__submitForm' type='submit'>Подписаться</Button>
        </Form>
      }}
    </Formik>
  </div>
};