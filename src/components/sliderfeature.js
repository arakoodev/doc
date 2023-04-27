import React, { Component } from "react";
import Slider from "react-slick";
import "../css/slick/slick.css";
import "../css/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick, children } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none", background: "red" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none", background: "green" }}
            onClick={onClick}
        />
    );
}

export default class Sliderfeature extends Component {

    render() {
        const { children, className, rtl} = this.props;
        const settings = {
            dots: false,
            infinite: true,
            speed: 5000,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrow: false,
            autoplay: true,
            autoplaySpeed: 0,
            rtl: rtl,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
            
        };
        return (
            <div>
                <Slider {...settings}  className={`${className}`}>
                    {children}
                </Slider>
            </div>
        );
    }
}