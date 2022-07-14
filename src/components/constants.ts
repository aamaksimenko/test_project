import * as Yup from 'yup';

export const initialValuesRegistration = {
  username: '',
  email: '',
  password: '',
};

export const initialValuesLogIn = {
  email: '',
  password: '',
};

export const initialValuesAddCompany = {
  title: '',
};

export const initialValuesAddUser = {
  email: '',
};

export const yupVariable = {
  nameNumberMax: 30,
  nameString: 'Must be 30 characters or less',
  emailString: 'Invalid email address',
  emailMaxNumber: 30,
  emailMaxNumberString: 'Must be 30 characters or less',
  emailFill: /^[A-Z0-9._]+@[A-Z]+.+.[A-Z]{2,4}$/i,
  emailFillText: 'Email can only contain Latin letters.',
  passwordRequired: 'No password provided.',
  passwordNumberMin: 6,
  passwordFill: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[_!@#$%^&*])(?=.{6,})/,
  passwordFillText:
    'Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
  passwordString: 'Password is too short - should be 6 chars minimum.',
  titleCompany: 50,
  titleCompanyString: 'Must be 50 characters or less',
  required: 'Required',
};

export const validationSchemaRegistration = Yup.object({
  username: Yup.string()
    .max(yupVariable.nameNumberMax, yupVariable.nameString)
    .required(yupVariable.required),
  email: Yup.string()
    .email(yupVariable.emailString)
    .max(yupVariable.emailMaxNumber, yupVariable.emailMaxNumberString)
    .matches(yupVariable.emailFill, yupVariable.emailFillText)
    .required(yupVariable.required),
  password: Yup.string()
    .required(yupVariable.passwordRequired)
    .min(yupVariable.passwordNumberMin, yupVariable.passwordString)
    .matches(yupVariable.passwordFill, yupVariable.passwordFillText),
});

export const validationSchemaLogIn = Yup.object({
  email: Yup.string()
    .email(yupVariable.emailString)
    .max(yupVariable.emailMaxNumber, yupVariable.emailMaxNumberString)
    .matches(yupVariable.emailFill, yupVariable.emailFillText)
    .required(yupVariable.required),
  password: Yup.string()
    .required(yupVariable.passwordRequired)
    .min(yupVariable.passwordNumberMin, yupVariable.passwordString)
    .matches(yupVariable.passwordFill, yupVariable.passwordFillText),
});

export const validationSchemaAddCompany = Yup.object({
  title: Yup.string()
    .max(yupVariable.titleCompany, yupVariable.titleCompanyString)
    .required(yupVariable.required),
});

export const validationSchemaAddUser = Yup.object({
  email: Yup.string()
    .email(yupVariable.emailString)
    .max(yupVariable.emailMaxNumber, yupVariable.emailMaxNumberString)
    .matches(yupVariable.emailFill, yupVariable.emailFillText)
    .required(yupVariable.required),
});

export const listsItemMenu = [
  {
    itemMenu: 'User Page',
    location: '/user_page',
  },
  {
    itemMenu: 'Companies',
    location: '/companies',
  },
  {
    itemMenu: 'Library',
    location: '/library',
  },
];

export const menuId = 'primary-search-account-menu';
