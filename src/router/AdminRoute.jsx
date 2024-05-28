import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const location = useLocation();
  const { user, isLoading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  if (isLoading || isAdminLoading) {
    return (
      <div className=" w-full md:w-2/3 lg:w-1/3 mx-auto text-center my-5 md:my-10">
        <span className="loading loading-spinner loading-lg text-[#B94545]"></span>
      </div>
    );
  }
  if (user && isAdmin) return children;
  return <Navigate state={location.pathname} to="/login" replace></Navigate>;
};

export default AdminRoute;
