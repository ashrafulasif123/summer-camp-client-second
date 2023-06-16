
import axios from "axios"
import { useQuery } from "@tanstack/react-query"

const useTotalInstructor = () =>{
    
    const { data : instructor } = useQuery({
        queryKey: ['totalinstructor'],
        queryFn: async () =>{
            const res = await axios.get('http://localhost:5000/users/totalinstructor?role=instructor')
            return res.data;
        },
        
      })
     
      return {instructor}
}
export default useTotalInstructor