export const formRules = () => {
  return {
    password: [
      {
        required: true,
        message: 'This form is required',
      },
    ],
    confirm_password: [
      {
        required: true,
        message: 'This form is required',
      },
      ({ getFieldValue }) => ({
        validator(rule, value) {
          if (!value || getFieldValue('new_password') === value) {
            return Promise.resolve('Password Match!');
          }
          return Promise.reject('Password Not Match!');
        },
      }),
    ],
  };
};
