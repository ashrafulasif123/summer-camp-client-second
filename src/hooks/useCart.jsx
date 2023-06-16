import { useContext } from "react"

import useAxiosProtected from "./useAxiosProtected"
import { AuthContext } from "../Provider/AuthProvider"

import { useQuery } from "@tanstack/react-query"

const useCart = () => {
    const { user } = useContext(AuthContext)
    const [axiosProtect] = useAxiosProtected()
    const { data: cartclasses = [], refetch } = useQuery({
        queryKey: ['cartclass', user?.email],
        queryFn: async () => {
            const res = await axiosProtect.get(`/classcart?email=${user?.email}`)
            return res;
        },

    })

    return { cartclasses, refetch }
}
export default useCart