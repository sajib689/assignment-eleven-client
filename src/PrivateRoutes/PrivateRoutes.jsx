import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate } from "react-router-dom";
import { Bars } from "react-loader-spinner";


const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    if(loading){
        return <Bars
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    }
   if(user) {
    return children
   }
   return <Navigate to='/login'></Navigate>
};

export default PrivateRoutes;