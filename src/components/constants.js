import * as Yup from 'yup';

const user = JSON.parse(localStorage.getItem('user'));

export const initialValuesRegistration = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const initialValuesLogIn = {
  email: '',
  password: '',
};

export const initialValuesAddNews = {
  title: '',
  article: '',
  tag: '',
};

export const initialValuesEdit = {
  name: user?.name,
  email: user?.email,
};

export const yupVariable = {
  nameNumberMax: 15,
  nameString: 'Must be 15 characters or less',
  emailString: 'Invalid email address',
  emailMaxNumber: 30,
  emailMaxNumberString: 'Must be 20 characters or less',
  passwordRequired: 'No password provided.',
  passwordNumberMin: 6,
  passwordString: 'Password is too short - should be 6 chars minimum.',
  confirmPasswordMatch: 'Passwords don\'t match',
  required: 'Required',
  titleAddMax: 100,
  titleString: 'Must be 15 characters or less',
  articleAddMax: 250,
  articleString: 'Must be 15 characters or less',
  tagAddMax: 100,
  tagString: 'Must be 15 characters or less',
};

export const validationSchemaRegistration = Yup.object({
  name: Yup.string()
    .max(yupVariable.nameNumberMax, yupVariable.nameString)
    .required(yupVariable.required),
  email: Yup.string()
    .email(yupVariable.emailString)
    .max(yupVariable.emailMaxNumber, yupVariable.emailMaxNumberString)
    .required(yupVariable.required),
  password: Yup.string()
    .required(yupVariable.passwordRequired)
    .min(yupVariable.passwordNumberMin, yupVariable.passwordString)
    .matches(/[a-zA-Z0-9_]/, 'Password can only contain Latin letters, numbers and underscore.'),
  confirmPassword: Yup.string()
    .required(yupVariable.required)
    .oneOf([Yup.ref('password')], yupVariable.confirmPasswordMatch),
});

export const validationSchemaLogIn = Yup.object({
  email: Yup.string()
    .email(yupVariable.emailString)
    .max(yupVariable.emailMaxNumber, yupVariable.emailMaxNumberString)
    .required(yupVariable.required),
  password: Yup.string()
    .required(yupVariable.passwordRequired)
    .min(yupVariable.passwordNumberMin, yupVariable.passwordString)
    .matches(/[a-zA-Z0-9_]/, 'Password can only contain Latin letters, numbers and underscore.'),
});

export const validationSchemaAddNews = Yup.object({
  title: Yup.string()
    .max(yupVariable.titleAddMax, yupVariable.titleString)
    .required(yupVariable.required),
  article: Yup.string()
    .max(yupVariable.articleAddMax, yupVariable.articleString)
    .required(yupVariable.required),
  tag: Yup.string()
    .max(yupVariable.tagAddMax, yupVariable.tagString)
    .required(yupVariable.required),
});

export const validationSchemaEdit = Yup.object({
  name: Yup.string()
    .max(yupVariable.nameNumberMax, yupVariable.nameString)
    .required(yupVariable.required),
  email: Yup.string()
    .email(yupVariable.emailString)
    .max(yupVariable.emailMaxNumber, yupVariable.emailMaxNumberString)
    .required(yupVariable.required),
});
