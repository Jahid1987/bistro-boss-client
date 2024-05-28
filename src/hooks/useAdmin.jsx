import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user } = useAuth();
  const axioSecure = useAxiosSecure();
  const { data: isAdmin = false, isPending: isAdminLoading } = useQuery({
    queryKey: ["isAdmin"],
    queryFn: async () => {
      const { data } = await axioSecure.get(`/users/${user.email}`);
      if (!data.role === "admin") return false;
      return true;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
