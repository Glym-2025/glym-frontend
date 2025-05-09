import { ERROR_MESSAGE } from '../constants/signUpMessage'

export const validateEmail = (email) => {
  const { REQUIRED, INVALID } = ERROR_MESSAGE.EMAIL_MESSAGES;

  if (!email) return REQUIRED;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return INVALID;

  return '';
};

export const validatePassword = (password) => {
  const { REQUIRED, LENGTH, COMPLEXITY } = ERROR_MESSAGE.PASSWORD_MESSAGES;

  if (!password) return REQUIRED;
  if (password.length < 8) return LENGTH;
  const complexityRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;
  if (!complexityRegex.test(password)) return COMPLEXITY;

  return '';
};

export const validatePasswordConfirm = (password, confirmPassword) => {
  const { REQUIRED } = ERROR_MESSAGE.PASSWORD_CONFIRM_MESSAGES;

  if (!confirmPassword || password !== confirmPassword) return REQUIRED;

  return '';
};

export const validateName = (name) => {
  const { REQUIRED, FORMAT } = ERROR_MESSAGE.NAME_MESSAGES;

  if (!name) return REQUIRED;
  const nameRegex = /^[가-힣a-zA-Z]{2,}$/;
  if (!nameRegex.test(name)) return FORMAT;

  return '';
};

export const validatePhone = (phone) => {
  const { REQUIRED, INVALID, LENGTH } = ERROR_MESSAGE.PHONE_MESSAGES;

  if (!phone) return REQUIRED;
  const phoneRegex = /^\d{10,11}$/;
  if (!phoneRegex.test(phone)) {
    if (!/^\d+$/.test(phone)) return INVALID;
    return LENGTH;
  }

  return '';
};

export const validateCode = (code) => {
  const { REQUIRED } = ERROR_MESSAGE.CODE;

  if (!code) return REQUIRED;

  return '';
};
