import React from 'react';
import { Helmet } from 'react-helmet-async';
import usePayment from '../../../hooks/usePayment';

const PaymentHistory = () => {
    const { paymenthistory } = usePayment()
    
    return (
        <div>
            <p className='text-center mb-5 text-3xl text-success font-semiboldtext-center '>Payment History</p>
            <>
                <Helmet>
                    <title>
                        Payment History | Sports Exut
                    </title>
                </Helmet>
                {
                    paymenthistory?.length === 0
                        ? <p className='text-white bg-fuchsia-600 w-1/2 mx-auto text-3xl text-center p-5'>No Payment History Found</p>
                        :
                        <>
                            <div className="overflow-x-auto w-3/4 mx-auto">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className='text-lg border border-success text- font-extrabold text-center'>Serial</th>
                                            <th className='text-lg border border-success text- font-extrabold text-center'>Total Class</th>
                                            <th className='text-lg border border-success text- font-extrabold text-center'>Payment Date</th>
                                            <th className='text-lg border border-success text- font-extrabold text-center'>Total Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                       {
                                            paymenthistory?.map((paymenthis, index) =>
                                                <tr key={paymenthis._id}>
                                                    <th className='text-center text-lg border border-success text-md'>{index + 1}</th>
                                                    <td className='text-center text-lg border border-success text-md'>{paymenthis?.quantity}</td>
                                                    <td className='text-center text-lg border border-success text-md'>{paymenthis?.date}</td>
                                                    <td className='text-center text-lg border border-success text-md'>$ {paymenthis?.price}</td>
                                                 </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </>
                }

            </>

        </div>
    );
};

export default PaymentHistory;