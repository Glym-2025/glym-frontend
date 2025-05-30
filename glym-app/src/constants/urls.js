export const URLS = {
  BASE: {
    MAIN: "",
    TEST: "https://www.glymfont.store",
  },
  ENDPOINT: {
    SIGN_UP: "/api/signup",
    CHECK_EMAIL: "/api/signup/check-email",
    SEND_EMAIL: "/api/auth/send-email",
    VERIFY_EMAIL: "/api/auth/verify-email",
    LOGIN: "/api/auth/login",
    LOGOUT: "/api/auth/logout",
    REFRESH_TOKEN: "/api/auth/refresh",
    FONT_UPLOAD: "/api/font/upload",
    FONT_LIST: "/api/font/fonts",
    FONT_DOWN: "/api/font/fonts/download",
    FONT_DEL: "/api/font/fonts/delete",
    FONT_STATUS: "/api/font/{jobId}/status" // 폰트 생성 상태 스트리밍
  },
};
