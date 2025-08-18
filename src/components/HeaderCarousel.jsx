import "/src/headerCarousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import WhiteBreadPic from "/src/assets/images/breads/White Bread.jpg";
import CinnamonRollsPic from "/src/assets/images/cookiesandpastries/Cinnamon Rolls.jpg";
import MochaPic from "/src/assets/images/coffeeanddrinks/Mocha.jpg";

export default function HeaderCarousel() {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: false,
        pauseOnHover: false,
        focusOnSelect: false,
        arrows: false
    };

    return (
        <div>

            <Slider {...settings}>
                <div className="max-[480px]:h-[400px] max-[600px]:h-[600px] max-[768px]:h-[700px] w-[100%] h-[1000px]">
                    <img src={WhiteBreadPic} alt="" className="w-[100%] h-[100%] object-cover" />
                </div>

                 <div className="max-[480px]:h-[400px] max-[600px]:h-[600px] max-[768px]:h-[700px] w-[100%] h-[1000px]">
                    <img src={CinnamonRollsPic} alt="" className="w-[100%] h-[100%] object-cover" />
                </div>

                 <div className="max-[480px]:h-[400px] max-[600px]:h-[600px] max-[768px]:h-[700px] w-[100%] h-[1000px]">
                    <img src={MochaPic} alt="" className="w-[100%] h-[100%] object-cover" />
                </div>
            </Slider>

        </div>
    )
}