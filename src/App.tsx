import { Routes, Route } from "react-router-dom";

import ROUTES_CONSTANT from "./routing/routes.const";
import ContactsPage from "pages/authenticated/contacts.page";
import LoginPage from "pages/unauthenticated/login.page";
import NotFoundPage from "pages/not-found.page";
import PrivateRoutes from "routes/private-routes";
import OnboardingRoutesGuard from "routes/onboarding-routes-guard";

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route
          path={ROUTES_CONSTANT.CONTACTS_ROUTE}
          element={<ContactsPage />}
        />
      </Route>

      <Route element={<OnboardingRoutesGuard />}>
        <Route path={ROUTES_CONSTANT.LOGIN_ROUTE} element={<LoginPage />} />
      </Route>
      <Route path={ROUTES_CONSTANT.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
