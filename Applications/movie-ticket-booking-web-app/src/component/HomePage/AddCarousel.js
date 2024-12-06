import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'

const dataList = [
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1733134525289_shwetamohanliveinconcertwebshowcase1240x300.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1726036566435_playcardnewweb.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1732794001646_indiatourforweb.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1733222460301_bengaluru.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1733401076326_maheepsingh1240x300.jpg",
]
export const AddCarousel = () => {
    const [index, setIndex] = useState(0);
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 2
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const handleSelect = (selectedIndex, e) => {
        if(Number(selectedIndex) && Number(selectedIndex)==dataList.length-1)
        {
            setIndex(0);
        }
        else
        {
            setIndex(selectedIndex);
        }
    };
    return (
        <div style={{ padding: "5px 0px" }}>
            <Carousel responsive={responsive} activeIndex={index} onSelect={handleSelect} >
                {
                    dataList?.map((banner, index) => (
                        <Carousel.Item key={index + 1}>
                            <img className="d-block w-100" src={banner} alt="Advertisement banner" />
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        </div>
    )
}