import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import GlobalStyles from "./components/GlobalStyles";
import PublicRoutes from "./routes/public.routes";
import PrivateRoutes from "./routes/private.routes";

export default function App() {
  const { auth } = useContext(AuthContext);
  return (
    <div className="App">
      <GlobalStyles />
      {auth ? <PrivateRoutes auth={auth} /> : <PublicRoutes />}
    </div>
  );
}
