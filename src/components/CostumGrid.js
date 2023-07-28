import React from "react";

export function GridItemLeft(props) {
    return (
        <div className="item left p-4">
            <p className="font-bold m-0">{props.title}</p>
        </div>
    );
}

export function GridItemCenter(props) {
    return (
        <div className="item center flex justify-center items-center p-4 gap-1 border-0 border-x border-solid">
            <div className="images-wrapper w-full flex gap-2">{props.children}</div>
        </div>
    );
}

export function GridItemRight(props) {
    return (
        <div className="item right flex justify-center items-center p-4 gap-1 ">
            <div className="images-wrapper w-full flex gap-2">{props.children}</div>
        </div>
    );
}

export function Image(props) {
    return (
        <img loading="lazy" alt={props.alt} className="w-[24px]" src={props.src} />
    );
}

 export function CustomGrid(props) {
    return (
        <div className="grid grid-cols-3 items-center border border-solid">
            {props.children}
        </div>
    );
}
