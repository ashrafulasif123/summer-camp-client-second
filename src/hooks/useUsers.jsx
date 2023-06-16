import useAxiosProtected from "./useAxiosProtected"
// import { AuthContext } from "../Provider/AuthProvider"

import { useQuery } from "@tanstack/react-query"

const useUsers = () =>{
    // const {user} = useContext(AuthContext)
    const [axiosProtect] = useAxiosProtected()

    const { data : users = [] , refetch } = useQuery({
        queryKey: ['alluserssummar'],
        queryFn: async () =>{
            const res = await axiosProtect.get('/users')
            return res;
        },
        
      })
     
      return {users, refetch}
}
export default useUsers