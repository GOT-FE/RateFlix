import { useSelector } from "react-redux";
import Auth from "./components/Auth/Auth";
import Layout from "./components/Layout/Layout";
import UserProfile from "./components/User/UserProfile";
function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      <Layout />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
    </>
  );
}

export default App;
