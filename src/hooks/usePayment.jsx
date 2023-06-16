import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import useAxiosProtected from "./useAxiosProtected"
import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"

const usePayment = () =>{
    const [axiosProtect] = useAxiosProtected()

    const {user} = useContext(AuthContext)
    console.log(user)
    
    const { data : paymenthistory } = useQuery({
        queryKey: ['paymenthis'],
        queryFn: async () =>{
            const res = await axiosProtect.get(`/payments?email=${user?.email}`)
            return res;
        },
        
      })
     console.log(paymenthistory)
      return {paymenthistory}
}
export default usePayment