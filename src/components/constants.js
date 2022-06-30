import * as Yup from 'yup';

export const initialValuesRegistration = {
  email: '',
  password: '',
};

export const initialValuesLogIn = {
  email: '',
  password: '',
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
  required: 'Required',
};

export const validationSchemaRegistration = Yup.object({
  email: Yup.string()
    .email(yupVariable.emailString)
    .max(yupVariable.emailMaxNumber, yupVariable.emailMaxNumberString)
    .required(yupVariable.required),
  password: Yup.string()
    .required(yupVariable.passwordRequired)
    .min(yupVariable.passwordNumberMin, yupVariable.passwordString)
    .matches(/[a-zA-Z0-9_]/, 'Password can only contain Latin letters, numbers and underscore.'),
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
