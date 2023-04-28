import React from 'react';

export default function SpeakerCard({ quote, name, title, image }) {
    return (
        <div className="bg-neutral-800 rounded-xl p-4 justify-center items-center shadow-lg overflow-hidden flex mb-4">
            <img className='h-72' src={image} alt="" />
            {/* <div className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} /> */}
            <div className="px-6 py-4">
                <h2 className="text-2xl font-bold mb-2">"{quote}"</h2>
                <div className='pt-4'>
                    <p className="text-lg font-semibold m-0">{name}</p>
                    <p className="text-neutral-400">{title}</p>
                </div>
            </div>
        </div>
    );
}
