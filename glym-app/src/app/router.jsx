import { Routes, Route } from 'react-router-dom';
import Preview from '../Preview';
import NavBar from '../shared/components/NavBar';
import SignUpPage from '../pages/SignUpPage';

export default function AppRouter() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Preview />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </>
  );
};