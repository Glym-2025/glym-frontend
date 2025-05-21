import { Navigate } from 'react-router-dom';
import { isTokenExpired } from '../../utils/authUtils';

const ProtectedRoute = ({ children }) => {
  const token = sessionStorage.getItem('accessToken');

  if (isTokenExpired(token)) { // 토큰 만료시 로그인페이지로 이동
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;