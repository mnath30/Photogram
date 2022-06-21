import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const RequiresAuth = ({ children }) => {
  const { encodedToken, userAccountName } = useSelector((store) => store.auth);
  const location = useLocation();

  return encodedToken && userAccountName ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export { RequiresAuth };
