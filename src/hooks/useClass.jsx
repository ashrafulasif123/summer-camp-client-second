import { useContext } from "react"

import useAxiosProtected from "./useAxiosProtected"
import { AuthContext } from "../Provider/AuthProvider"

import { useQuery } from "@tanstack/react-query"

const useClass = () =>{
    const {user} = useContext(AuthContext)
    const [axiosProtect] = useAxiosProtected()

    
   
    

    const { data : instructorclass } = useQuery({
        queryKey: ['instructorclass', user?.email],
        queryFn: async () =>{
            const res = await axiosProtect.get(`/users/instractor/class?email=${user?.email}`)
            return res;
        },
        
      })
     
      return {instructorclass}
}
export default useClass