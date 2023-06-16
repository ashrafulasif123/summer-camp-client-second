import { useContext } from "react"

import { AuthContext } from "../Provider/AuthProvider"
import { useQuery } from "@tanstack/react-query"
import useAxiosProtected from "./useAxiosProtected"
// import axios from "axios"

const useInstructor = () =>{
    const {user, loading} = useContext(AuthContext)
    const [axiosProtect] = useAxiosProtected()
   
    

    const { refetch, data : isInstructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loading,
        queryFn: async () =>{
            const res = await axiosProtect.get(`/users/instructor/${user?.email}`)
            return res.instructor;
        },
        
      })
      return [isInstructor, isInstructorLoading, refetch]
}
export default useInstructor