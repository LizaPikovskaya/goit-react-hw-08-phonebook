import { ErrorMessage, Formik } from 'formik';
import { Button, FormStyled, Input, Label } from './LoginForm.styled';
//  import * as Yup from 'yup';
import { object, string} from 'yup';
import { logIn } from 'redux/auth/thunk';
import { useDispatch } from 'react-redux';

// const loginSchema = object({
//   email: string().email('Invalid email').required(),
//   password: string().min(7, 'Too Short!').max(16, 'Too Long!').required(),
// });

const LoginForm = () => {
  const dispatch = useDispatch()
  const handleSubmit = (values, action) => {
  dispatch(logIn(values));
  action.resetForm();
  };
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={handleSubmit}
      // validationSchema={loginSchema}
    >
      <FormStyled autoComplete="off">
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
        <Button type="submit">Log In</Button>
      </FormStyled>
    </Formik>
  );
};

export default LoginForm;
