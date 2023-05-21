export enum ERROR {
  EMAIL_REQUIRED = 'Email is required',
  EMAIL_VALIDATION = 'Email is not valid',

  PASSWORD_REQUIRED = 'Password is required',
  PASSWORD_VALIDATION = 'Password contains min 8 characters',

  FIRST_NAME_REQUIRED = 'First name is required',
  FIRST_NAME_VALIDATION = 'First name contains min 3 characters',
  LAST_NAME_VALIDATION = 'Last name contains min 3 characters',
  LAST_NAME_REQUIRED = 'Last name is required',
  BIRTHDAY_REQUIRED = 'Birthday is required',
  BIRTHDAY_VALIDATION = 'Birthday is not valid',
  CONFIRM_PASSWORD = 'Confirm password',
}
