import { Route, Routes } from 'react-router-dom';
import { Layout } from './components';
import Redirect from './components/Redirect/Redirect';
import HomePage from './pages/HomePage/HomePage';
import ContactsPage from './pages/ContactsPage/ContactsPage';

export default function App () {
  return (
    <>
      <Routes>
        <Route path="/" element={<Redirect />} />
        <Route path="/contacts" element={<Layout />}>
          <Route
            path="list"
            element={<ContactsPage />}
          />
          <Route
            path="home"
            element={<HomePage />}
          />
        </Route>
        <Route path="*" element={<Redirect />} />
      </Routes>
    </>
  );
}
