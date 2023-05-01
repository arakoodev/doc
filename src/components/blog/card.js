import React from 'react';

function Card(props) {
    return (
        <a className="flex relative px-4 md:p-0 w-full md:w-fit" href={props.props.metadata.permalink}>
            {/* {console.log(props)} */}
            {/* {console.log(props.props.metadata.tags)} */}
            <div className="flex flex-col border border-solid border-neutral-100 rounded-xl w-full   p-4  md:w-[272px]">
                <div  className="flex flex-col">
                    <div className="">
                        <img  className='h-10' alt={props.alt} loading="lazy" src={props.props.assets.image} />
                    </div>
                    <div className="text-neutral-100 pt-4 h-20 mb-10">
                        <h3 className='capitalize text-base'>{props.props.metadata.frontMatter.title}</h3>
                        
                    </div>
                    <div className='flex gap-2 items-end text-neutral-100 '>
                        {props.props.metadata.tags.slice(0, 2).map(node => (
                            <div className='border border-solid border-neutral-200 p-1 px-2 rounded-md'>
                                {node.label}
                            </div>
                        ))}
                        <div className="border rounded-md border-solid border-neutral-200 p-1 px-2">
                            <p className='m-0'>...</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
}

export default Card;
