import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Banner.modules.css'
export const Banner = () => {

    return (
        <Carousel
            showThumbs={false}
            showStatus={false}
            showArrows={false}
            swipeable={false}
            autoPlay={true}
            infiniteLoop={true}
            interval={5000}
            stopOnHover={false}

        >
            <div>
                <img src="https://cdn.pixabay.com/photo/2021/11/04/06/27/artificial-intelligence-6767502_1280.jpg" alt="" />
            </div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg" alt="" />
            </div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2014/02/13/07/28/security-265130_1280.jpg" alt="" />
            </div>
        </Carousel>
    )
}