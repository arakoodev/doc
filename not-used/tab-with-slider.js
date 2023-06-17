

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function TabPanel({ TabpanelValue }) {
    const CustomNextArrow = (props) => {
        const { onClick } = props;
        return (
            <div className="custom-arrow custom-next-arrow hidden md:flex absolute -left-10 top-40" onClick={onClick}>
                <FontAwesomeIcon icon={faChevronLeft} size='2x' />
            </div>
        );
    };

    const CustomPrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div className="custom-arrow custom-prev-arrow hidden md:flex md:absolute -right-10 top-40" onClick={onClick}>
                <FontAwesomeIcon icon={faChevronRight} size='2x' />
            </div>
        );
    };

    const carouselSettings = {
        
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        appendDots: (dots) => (
            <div
                style={{
                    left:"-2em",
                    bottom: "-3em",
                    // backgroundColor: "#ddd",
                    borderRadius: "10px",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",
                    // gap: "8em" // Adjust the gap size as per your preference
                }}
            >
                <ul style={{ margin: "0px", listStyle: "none", gap: "2em", display: "flex", }}
                
                >
                    {console.log(dots)}
                    
                    {dots}</ul>
            </div>
        ),
        customPaging: (i) => (
            <div
                style={{
                    width: "50px",
                    height: "5px",
                    borderRadius: "10px",
                    backgroundColor: "#312E81",
                    border: "1px #312E81 solid",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white"
                }}
            >
                {/* {i + 1} */}
            </div>
        ),
    };

    return (
        <div className="flex flex-col w-[17em] md:w-[35em] my-16 ">
            <Slider {...carouselSettings}>
                {/* {console.log(TabpanelValue)} */}
                <div className="py-4 lg:py-0 rounded-md">
                   <div className="aspect-w-16 aspect-h-9 ro">
                        <iframe
                            src={`https://www.youtube.com/embed/${TabpanelValue.tab1.youtube}`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
                <div className="py-4 lg:py-0">
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe
                            src={`https://www.youtube.com/embed/${TabpanelValue.tab2.youtube}`}
                            title="Google — Year in Search 2022"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default TabPanel;
