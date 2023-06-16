import { useContext } from "react"

import { AuthContext } from "../Provider/AuthProvider"
import { useQuery } from "@tanstack/react-query"
import useAxiosProtected from "./useAxiosProtected"
// import axios from "axios"

const useAdmin = () =>{
    const {user, loading} = useContext(AuthContext)
    const [axiosProtect] = useAxiosProtected()
   
    

    const { refetch, data : isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async () =>{
            const res = await axiosProtect.get(`/users/admin/${user?.email}`)
            return res.admin;
        },
        
      })
      return [isAdmin, isAdminLoading, refetch]
}
export default useAdmin