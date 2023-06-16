import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useInstructor from "../hooks/useInstructor";



const StudentRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()
    const location = useLocation()
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user && !isAdmin && !isInstructor){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>

    
};

export default StudentRoute;