import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProfilePage } from './pages/Profile/Profile.page';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './pages/Home/Home.page';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Navbar>
    </BrowserRouter>
  );
}
