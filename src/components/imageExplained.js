import React from 'react';

export default function ImageExplained({ children, color }) {
    return (
        <span className='flex justify-center items-center text-center text-sm' >
            {children}
        </span>
    );
}