import React from 'react';
import useTotalInstructor from '../../../../hooks/useTotalInstructor';
import PopularIns from './PopularIns';


const PopularInstructor = () => {
    const {instructor} = useTotalInstructor()
    return (
        <>
        <h2 className='text-success text-3xl font-extrabold text-center mt-4'>Popular Instructor</h2>
        <div className="divider"></div>
        <div className='max-w-7xl mx-auto mt-4'>
            <div className='grid md:grid-cols-3 gap-4'>
                

                {
                    instructor?.slice(0, 6).map(ins => <PopularIns key={ins?._id} ins={ins}></PopularIns>)
                }
            </div>
        </div>
    </>
    );
};

export default PopularInstructor;