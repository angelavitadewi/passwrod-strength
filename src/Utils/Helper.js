import { REGEX_CONSTANT } from '../Constant/RegexConstant';

export const checkPassword = (value) => {
  const pattern = REGEX_CONSTANT.PASSWORD;
  if (pattern.test(value) && value.length > 12) {
    return 100;
  } else if (pattern.test(value) && value.length > 8) {
    return 60;
  } else if (!value) {
    return 0;
  } else {
    return 30;
  }
};
