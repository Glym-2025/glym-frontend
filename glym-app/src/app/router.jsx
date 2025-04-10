import { Routes, Route } from 'react-router-dom';
import Preview from '../Preview';
import NavBar from '../shared/components/NavBar';
import SignUpPage from '../pages/SignUpPage';
import SignInPage from '../pages/SignInPage';
import { ImageUploadForm } from '../features/fontcreation';

export default function AppRouter() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Preview />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/fontcreation" element={<ImageUploadForm />} />
      </Routes>
    </>
  );
};