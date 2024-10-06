import * as Yup from 'yup';

export const RegisterFormSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    age: Yup.number().required('Required').positive('Age must be positive').integer('Age must be an integer'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required'),
    term: Yup.boolean().oneOf([true], 'Accept terms & conditions').required('Required')
})