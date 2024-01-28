import { Route, Routes } from 'react-router-dom'
import { Layout } from './components'
import Redirect from './components/Redirect/Redirect'
import HomePage from './pages/HomePage/HomePage'
import ContactsPage from './pages/ContactsPage/ContactsPage'
import CreateUserPage from './pages/CreateUserPage/CreateUserPage'
import UserDetailsPage from './pages/UserDetailsPage/UserDetailsPage'
import EditUserPage from './pages/EditUserPage/EditUserPage'

export default function App () {
  return (
    <>
      <Routes>
        <Route path="/" element={<Redirect />} />
        <Route path="/contacts" element={<Layout />}>
          <Route
            path="create"
            element={<CreateUserPage />}
          />
          <Route
            path="edit/:id"
            element={<EditUserPage />}
          />
          <Route
            path="list"
            element={<ContactsPage />}
          />
          <Route
            path=":id"
            element={<UserDetailsPage />}
          />
          <Route
            path="home"
            element={<HomePage />}
          />
        </Route>
        <Route path="*" element={<Redirect />} />
      </Routes>
    </>
  )
}
