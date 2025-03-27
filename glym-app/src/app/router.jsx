import { Routes, Route } from 'react-router-dom';
import Preview from '../Preview';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Preview />} />
    </Routes>
  );
};