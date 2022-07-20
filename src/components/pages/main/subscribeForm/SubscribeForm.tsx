import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Button } from '../../../ui/button/Button';
import { TextField } from './TextField';
import "./subscribeForm.scss";
import backgroundImg from "./../../../../assets/images/bc/subscribeToUs_BC.png";
import { useTranslation } from 'react-i18next';
import { customerAPI } from '../../../../api/api';

const initialValues = {
  name: '',
  phone: '',
  email: ''
}

const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

const validationSchema = Yup.object().shape({
  name: Yup.string().min(1, 'mainPage.subscribeForm.yup.tooShort').max(50, 'mainPage.subscribeForm.yup.tooLong').required('mainPage.subscribeForm.yup.required'),
  phone: Yup.string().matches(phoneRegExp, 'mainPage.subscribeForm.yup.wrongPhone').required('mainPage.subscribeForm.yup.required'),
  email: Yup.string().email('mainPage.subscribeForm.yup.wrongEmail').required('mainPage.subscribeForm.yup.required')
})

export const SubscribeForm: React.FC = () => {
  const { t } = useTranslation();

  return <div className='subscribeForm'>
    <img className='subscribeForm__backgroundImage' src={backgroundImg} alt={t('mainPage.background')} />
    <h3 data-color='white' className='subscribeForm__heading'>{t('mainPage.subscribeForm.heading')}</h3>
    <p className="subscribeForm__description text text_color_white">{t('mainPage.subscribeForm.description')}</p>
    <Formik initialValues={initialValues} validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        let response = customerAPI.subscribe(values);
        response && resetForm();
      }}
    >
      {({ errors, touched }) => {
        return <Form className='subscribeForm__form'>
          <TextField placeholder={t('mainPage.subscribeForm.form.name')} name='name' error={t(errors.name || '')} touched={touched.name} />
          <TextField placeholder={t('mainPage.subscribeForm.form.phone')} name='phone' error={t(errors.phone || '')} touched={touched.phone} />
          <TextField placeholder={t('mainPage.subscribeForm.form.email')} name='email' error={t(errors.email || '')} touched={touched.email} />
          <Button className='subscribeForm__submitForm' type='submit'>{t('mainPage.subscribeForm.form.subscribe')}</Button>
        </Form>
      }}
    </Formik>
  </div>
};