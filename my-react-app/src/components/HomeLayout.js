import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
//import { AppBar } from "./AppBar";
import {LoginPage} from "../pages/LoginPage";
export const HomeLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (user) { // because of this, even if login failed but if user set will stil navigate to dashboard.
              // and in dashboard, which is under ProtectedLayout, if user is set, it will show.
    return <Navigate to="/me" replace />;
  }

  return (
    <div>
        home layout
        {/*outlet*/}
        <LoginPage/>
    </div>
  );
};