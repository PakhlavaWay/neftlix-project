import * as yup from 'yup';

export const schema = yup.object().shape({
    email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
    password: yup.string().min(8, 'Password must be at least 8 characters long')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/\d/, 'Password must contain at least one digit')
    .required(),
});