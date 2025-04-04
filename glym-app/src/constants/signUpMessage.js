export const EMAIL_MESSAGES = {
  REQUIRED: "이메일을 입력해주세요.",
  INVALID: "형식에 맞게 입력해주세요. (예: example@email.com)",
};

export const PASSWORD_MESSAGES = {
  REQUIRED: "비밀번호를 입력해주세요.",
  LENGTH: "비밀번호는 8자 이상이어야 합니다.",
  COMPLEXITY: "영문, 숫자, 특수문자를 포함해야 합니다.",
};

export const PASSWORD_CONFIRM_MESSAGES = {
  REQUIRED: "비밀번호가 일치하지 않습니다.",
  LENGTH: "비밀번호는 8자 이상이어야 합니다.",
  COMPLEXITY: "영문, 숫자, 특수문자를 포함해야 합니다.",
};

export const NAME_MESSAGES = {
  REQUIRED: "이름을 입력해주세요.",
  FORMAT: "이름은 2자 이상, 특수문자 없이 입력해주세요.",
};

export const PHONE_MESSAGES = {
  REQUIRED: "휴대폰 번호를 입력해주세요.",
  INVALID: "숫자만 입력해주세요. (예: 01012345678)",
  LENGTH: "휴대폰 번호 10~11자리를 정확히 입력해주세요.",
};

export const ERROR_MESSAGE = {
  EMAIL_MESSAGES,
  PASSWORD_MESSAGES,
  PASSWORD_CONFIRM_MESSAGES,
  NAME_MESSAGES,
  PHONE_MESSAGES
};
