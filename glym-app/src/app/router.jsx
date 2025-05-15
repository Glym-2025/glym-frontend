import { Routes, Route } from 'react-router-dom';
import Preview from '../Preview';
import NavBar from '../shared/components/NavBar';
import SignUpPage from '../pages/SignUpPage';
import SignInPage from '../pages/SignInPage';
import FontCreationPage from '../pages/FontCreationPage';
import FontCreationCompletePage from '../pages/FontCreationCompletePage';
import FontListPage from '../pages/FontListPage';

export default function AppRouter() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Preview />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/fontcreation" element={<FontCreationPage />} />
        <Route path="/fontcreationcomplete" element={<FontCreationCompletePage />} />
        <Route path="/fontlist" element={<FontListPage />} />
      </Routes>
    </>
  );
};