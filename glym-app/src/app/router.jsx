import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import NavBar from '../shared/components/NavBar';
import SignUpPage from '../pages/SignUpPage';
import SignInPage from '../pages/SignInPage';
import FontCreationPage from '../pages/FontCreationPage';
import FontCreationCompletePage from '../pages/FontCreationCompletePage';
import FontListPage from '../pages/FontListPage';
import ProtectedRoute from '../shared/components/ProtectedRoute';

export default function AppRouter() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route 
          path="/fontcreation" 
          element={
            <ProtectedRoute>
              <FontCreationPage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/fontcreationcomplete" 
          element={
            <ProtectedRoute>
              <FontCreationCompletePage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/fontlist" 
          element={
            <ProtectedRoute>
              <FontListPage />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </>
  );
};