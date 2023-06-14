import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

class TabPanel extends Component {
    render() {
        const CustomNextArrow = (props) => {
            const { onClick } = props;
            return (
                <div className="custom-arrow cursor-pointer custom-next-arrow hidden md:flex absolute lg:-left-8 -left-10 lg:top-24 xl:top-40" onClick={onClick}>
                    <FontAwesomeIcon icon={faChevronLeft} size="lg" />
                </div>
            );
        };

        const CustomPrevArrow = (props) => {
            const { onClick } = props;
            return (
                <div className="custom-arrow  cursor-pointer custom-prev-arrow hidden md:flex md:absolute lg:-right-8 -right-10 lg:top-24 xl:top-40 " onClick={onClick}>
                    <FontAwesomeIcon icon={faChevronRight} size="lg" />
                </div>
            );
        };

        const carouselSettings = {
            dotsClass: "slick-dots-costum",
            dots: true,
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <CustomNextArrow />,
            prevArrow: <CustomPrevArrow />,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        arrows: false,
                    }
                },
            ],
            appendDots: (dots) => (
                <div >
                    <ul className='flex list-none m-0 gap-4 p-0 '>
                        {dots}
                    </ul>
                </div>
            ),
            customPaging: (i) => (
                <button className='w-full cursor-pointer  bg-transparent text-transparent border-transparent'>
                    {i}
                </button>
            ),
        };

        const { TabpanelValue } = this.props;

        return (
            <div className="flex flex-col w-full md:w-[40em] lg:w-[25em] xl:w-[35em] md:mx-10 md:my-4   ">
                <Slider {...carouselSettings}>
                    {/* {console.log(TabpanelValue)} */}
                    <div className="py-4 pt-10  lg:py-0 rounded-md">
                        <div className="aspect-w-16 aspect-h-9 ro">
                            <iframe
                                src={`https://www.youtube.com/embed/${TabpanelValue.tab1.youtube}`}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                    <div className="py-4 pt-10 lg:py-0">
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
}

export default TabPanel;