import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='h-full w-full flex justify-center items-center'>
            <div>
                <h1 className='text-5xl text-center'>404</h1>
                <h1 className='font-xl text-center my-3'>Page Not Found</h1>
                <Link className='px-4 py-2 rounded-lg bg-black text-white font-bold' to={'/'}>Back To Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;