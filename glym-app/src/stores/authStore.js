import { create } from 'zustand';
import { post } from '../utils/requests';
import { URLS } from '../constants/urls';

const useAuthStore = create((set) => ({
    isLoggedIn: !!sessionStorage.getItem('accessToken'),

    login: async (email, password) => {
        const response = await post({
            baseUrl: URLS.BASE.TEST,
            endpoint: URLS.ENDPOINT.LOGIN,
            data: { email, password },
            withToken: false,   
            withCredentials: true,  
        });

        if (response.ok && response.AccessToken) {
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
            withToken: true,          // 토큰 필요
            withCredentials: true,   // 쿠키 포함
        });

        if (response.ok) {
            sessionStorage.removeItem('accessToken');
            set({ isLoggedIn: false });
        } else {
            alert("로그아웃에 실패했습니다.");
        }
    },
}));

export default useAuthStore;
