import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSkullCrossbones} from '@fortawesome/free-solid-svg-icons'
// import './ErrorPage.css'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8 text-center'>
      <FontAwesomeIcon className='text-8xl errorPages' icon={faSkullCrossbones} />
        

        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-9xl text-warning'>
            <span className='sr-only'>Error</span> {status ||   404}
          </h2>
          <p className='text-2xl font-semibold md:text-3xl mb-8'>
            {error?.message}
          </p>
          <Link
            to='/'
            className='px-8 py-3 font-semibold rounded-full bg-sky-400 text-white'
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
    );
};

export default ErrorPage;