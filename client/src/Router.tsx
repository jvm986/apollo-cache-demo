import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Selector } from './pages/Selector/Selector.page';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar>
        <Routes>
          <Route path="/" element={<Selector />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Navbar>
    </BrowserRouter>
  );
}
