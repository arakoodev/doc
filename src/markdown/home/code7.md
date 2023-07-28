```jsx title="/code7.md"
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
```