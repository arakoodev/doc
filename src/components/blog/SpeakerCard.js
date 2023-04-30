import React from 'react';

export default function SpeakerCard({ quote, name, title, image }) {
    return (
        <div className=" bg-neutral-800 rounded-xl p-4 justify-center items-center shadow-lg overflow-hidden flex flex-col md:flex-row mb-4">
            {image && <img className='h-72' src={image} alt="" />}
            
            {/* <div className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} /> */}
            <div className="px-2 md:px-6 py-4">
                <h2 className="text-base md:text-2xl font-bold mb-2">"{quote}"</h2>
                <div className='pt-4'>
                    <p className="text-lg font-semibold m-0">{name}</p>
                    <p className="text-neutral-400">{title}</p>
                </div>
            </div>
        </div>
    );
}
