import { create } from 'zustand';
import { post } from '../utils/requests';
import { URLS } from '../constants/urls';
import { isTokenExpired } from '../utils/authUtils';

const useAuthStore = create((set) => {
    const token = sessionStorage.getItem('accessToken');
    const isValid = token && !isTokenExpired(token);

    return {
        isLoggedIn: !!isValid,
        login: async (email, password) => {
            const response = await post({
                baseUrl: URLS.BASE.TEST,
                endpoint: URLS.ENDPOINT.LOGIN,
                data: { email, password },
            });

            if (response.ok) {
                console.log(response);
                sessionStorage.setItem('accessToken', response.AccessToken);
                set({ isLoggedIn: true });
                return true;
            } else {
                return false;
            }
        },
        logout: async () => {
            const response = await post({
                baseUrl: URLS.BASE.TEST,
                endpoint: URLS.ENDPOINT.LOGOUT,
                data: {},
                useAuth: true,
            });

            if (response.ok) {
                sessionStorage.removeItem('accessToken');
                set({ isLoggedIn: false });
            } else {
                alert("로그아웃에 실패했습니다.");
            }
        },
    };
});

export default useAuthStore;
