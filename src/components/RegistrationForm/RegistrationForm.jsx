import { ErrorMessage, Formik } from 'formik';
import {
  Button,
  FormStyled,
  Input,
  Label,
} from '../LoginForm/LoginForm.styled';
import {  string} from 'yup';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/thunk';
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
 import * as Yup from 'yup';


const registrationSchema = Yup.object({
  name: string().min(5, 'Too Short!').required(),
  email: string().email('Invalid email').required(),
  password: string()
    .min(7, 'Too Short! Minimum 7 symbols.')
    .max(16, 'Too Long!')
    .required(),
});
const RegistrationForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, action) => {
    console.log(values);
    dispatch(register(values))
      .unwrap()
      .then(() => toast.success('Registration successfully'))
      .catch(() => toast.error('Something went wrong...Try again.'));
    action.resetForm();
  }
  return (
    <>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={registrationSchema}
      >
        <FormStyled autoComplete="off">
          <Label>
            Username
            <Input type="text" name="name" />
            <ErrorMessage
              component="div"
              name="name"
              className="error-message"
            />
          </Label>
          <Label>
            Email
            <Input type="email" name="email" />
            <ErrorMessage
              component="div"
              name="email"
              className="error-message"
            />
          </Label>
          <Label>
            Password
            <Input type="password" name="password" />
            <ErrorMessage
              component="div"
              name="password"
              className="error-message"
            />
          </Label>
          <Button type="submit">Register</Button>
        </FormStyled>
      </Formik>
    </>
  );
};

export default RegistrationForm;
