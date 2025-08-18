import "/src/sectionCarousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import WheatBreadRaisinsPic from "/src/assets/images/breads/Wheat Bread with Raisins.jpg";
import FerreroCupcakePic from "/src/assets/images/cookiesandpastries/Ferrero Cupcake.jpg";
import CroissantsPic from "/src/assets/images/cookiesandpastries/Croissants.jpg";
import CappucinoPic from "/src/assets/images/coffeeanddrinks/Cappucino.jpg";

export default function SectionCarousel() {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 7000,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipe: false,
        pauseOnHover: false,
        focusOnSelect: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    const images = [
        {
            source: WheatBreadRaisinsPic,
            title: "Wheat Bread w/ Raisins"
        },
        {
            source: FerreroCupcakePic,
            title: "Ferrero Cupcake"
        },
        {
            source: CroissantsPic,
            title: "Tasty Croissant"
        },
        {
            source: CappucinoPic,
            title: "Cappucino"
        },
    ];

    return (
        <section id="my-custom-slider" className="max-[480px]:w-[230px] max-[600px]:w-[250px] max-[768px]:w-[280px] max-[1024px]:w-[320px] max-[1024px]:mt-[60px] mt-[100px] w-[1100px] m-auto">

            <Slider {...settings}>
                {
                    images.map((img, index) => {
                        return (
                            <div key={index} className="mt-[20px]">
                                <div>
                                    <img src={img.source} alt="popular products image" className="max-[480px]:w-full max-[600px]:w-full max-[768px]:w-full max-[1024px]:w-full max-[480px]:h-[200px] max-[600px]:h-[230px] max-[768px]:h-[250px] max-[1024px]:h-[300px] m-auto w-[300px] h-[300px] rounded-[5px] object-cover" />
                                </div>
                                <div className="m-auto w-full flex flex-row items-center justify-center">
                                    <p className="max-[480px]:text-[1.1rem] max-[600px]:text-[1.2rem] max-[768px]:text-[1.4rem] max-[1024px]:text-[1.5rem] py-13 text-[1.7rem] text-gray-700">{img.title}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>


        </section>
    )
}