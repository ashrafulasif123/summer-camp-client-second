import React from 'react';
import useAxiosProtected from '../../../../hooks/useAxiosProtected';
import { useQuery } from '@tanstack/react-query';
import PopularClassPart from './PopularClassPart';


const PopularClassesPart = () => {
    const [axiosProtect] = useAxiosProtected()

    const { data: popularclasses = [] } = useQuery({
        queryKey: ['adminclasses'],
        queryFn: async () => {
            const res = await axiosProtect.get('/popularclasses?status=approved')
            return res;
        },

    })
    return (
        <>
            <h2 className='text-success text-3xl font-extrabold text-center mt-4'>Popular Class</h2>
            <div className="divider"></div>
            <div className='max-w-7xl mx-auto mt-4'>
                <div className='grid md:grid-cols-3 gap-4'>
                    

                    {
                        popularclasses?.slice(0, 6).map(popularclass => <PopularClassPart key={popularclass?._id} popularclass={popularclass}></PopularClassPart>)
                    }
                </div>
            </div>
        </>

    );


};

export default PopularClassesPart;