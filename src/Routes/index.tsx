import { UseAppSelector } from "@/Hooks/UseAppSelector";
import PrivateRoutes from "@/Screens/private/Layout";
import PublicRoutes from "@/Screens/public/Layout";

export default function Routes() {
  const {isLogin,isLoading} = UseAppSelector((state) => state.auth);
  
  return isLogin ?  <PrivateRoutes /> : <PublicRoutes /> ;
}
