import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/layout";
import LoginPage from "./pages/auth/LoginPage";
import ProfilePage from "./pages/profile";
import PageNotFound from "./pages/error/PageNotFound";
import HomePage from "./pages/home";

export default function Router() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <HomePage />
            </DefaultLayout>
          }
        />
        <Route
          path="/profile"
          element={
            <DefaultLayout>
              <ProfilePage />
            </DefaultLayout>
          }
        />
        <Route path="/auth/signin" element={<LoginPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
