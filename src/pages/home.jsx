import '/src/index.css';
import HeaderCarousel from "../components/HeaderCarousel";
import SectionCarousel from "../components/SectionCarousel";
import bakeryVisionPic from "/src/assets/images/bakery vision.jpg";
import DeliveryPic from "/src/assets/images/Delivery.jpg";
import Ad from '/src/components/Ad';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <Ad />
            <Navbar />

            <main>
                <header>
                    <HeaderCarousel />
                </header>

                <section className="max-[1024px]:pt-[100px] max-[1024px]:pb-[100px] pt-[150px] pb-[150px] bg-[#f8efe3] flex flex-col items-center">

                    <h2 className="max-[480px]:text-[1.7rem] max-[600px]:text-[1.8rem] max-[768px]:text-[1.9rem] max-[1024px]:text-[2.5rem] text-[2.8rem] text-gray-800 font-semibold">Popular</h2>

                    <hr className="max-[480px]:w-35 max-[600px]:w-40 max-[768px]:w-50 max-[1024px]:w-55 mt-[20px] text-gray-800 w-63 h-0.5" />

                    <p className="max-[480px]:w-[250px] max-[600px]:w-[400px] max-[768px]:w-[500px] max-[1024px]:w-[600px] max-[480px]:text-[0.9rem] max-[600px]:text-[1rem] max-[768px]:text-[1.05rem] max-[768px]:leading-8 mt-[30px] text-[1.1rem] text-gray-700 text-justify leading-10">Explore some of our popular and most bought products from the store.</p>

                    <SectionCarousel />

                    <Link to="/products" className="max-[1024px]:mt-[30px] max-[480px]:text-[0.85rem] max-[600px]:text-[0.9rem] max-[768px]:text-[1rem] max-[1024px]:text-[1.1rem] max-[480px]:w-23 max-[480px]:h-12 max-[600px]:w-26 max-[600px]:h-13 max-[768px]:w-30 max-[768px]:h-14 max-[1024px]:w-34 max-[1024px]:h-14 hover:bg-[#eee5da] mt-[100px] border-2 w-37 h-15 flex flex-row justify-center items-center rounded-[10px] text-[1.2rem] text-gray-700">View More</Link>

                </section>


                <section className="max-[1024px]:flex-col max-[1024px]:items-center pt-[150px] pb-[150px] flex flex-row justify-center gap-15 bg-[#fff6ea]">

                    <img src={bakeryVisionPic} alt="vision picture" className="max-[480px]:w-[250px] max-[480px]:h-[300px] max-[600px]:w-[300px] max-[600px]:h-[350px] max-[768px]:w-[450px] max-[768px]:h-[450px] w-[500px] h-[550px] object-cover rounded-[5px]" />

                    <div className="max-[1024px]:items-center flex flex-col gap-12 justify-center">
                        <h2 className="max-[480px]:text-[1.3rem] max-[600px]:text-[1.5rem] max-[768px]:text-[1.8rem] max-[1024px]:text-[2.3rem] text-[2.8rem] text-gray-800 font-semibold">Our Vision</h2>

                        <p className="max-[480px]:w-[250px] max-[600px]:w-[400px] max-[768px]:w-[500px] max-[1024px]:w-[600px] max-[480px]:text-[0.9rem] max-[600px]:text-[1rem] max-[768px]:text-[1.2rem] max-[1024px]:text-[1.25rem] max-[480px]:leading-8 max-[600px]:leading-9 max-[768px]:leading-9 max-[1024px]:leading-12 w-[600px] text-[1.2rem] text-gray-700 text-justify leading-10">To be our neighborhood's favorite bakery and cafe, known for our freshly baked goods ranging from breads, pastries and coffees. Offering also a friendly service to our customers. We want to be a daily stop where our customers can find delicious, comforting treats and a warm welcome.</p>

                        <Link to="/about" className="max-[1024px]:mt-[30px] max-[480px]:text-[0.85rem] max-[600px]:text-[0.9rem] max-[768px]:text-[1rem] max-[1024px]:text-[1.1rem] max-[480px]:w-30 max-[480px]:h-13 max-[600px]:w-33 max-[600px]:h-14 max-[768px]:w-36 max-[768px]:h-15 max-[1024px]:w-39 max-[1024px]:h-16 hover:bg-[#eee5da] mt-[100px] border-2 w-37 h-15 flex flex-row justify-center items-center rounded-[10px] text-[1.2rem] text-gray-700">More About Us</Link>
                    </div>

                </section>

                <section className="max-[1024px]:flex-col max-[1024px]:items-center pt-[150px] pb-[150px] flex flex-row justify-center gap-15 bg-[#f8efe3]">

                    <img src={DeliveryPic} alt="vision picture" className="max-[1024px]:block hidden max-[480px]:w-[250px] max-[480px]:h-[300px] max-[600px]:w-[300px] max-[600px]:h-[350px] max-[768px]:w-[450px] max-[768px]:h-[450px] w-[500px] h-[550px] object-cover rounded-[5px]" />

                    <div className="max-[1024px]:items-center flex flex-col gap-12 justify-center">
                        <h2 className="max-[480px]:text-[1.3rem] max-[600px]:text-[1.5rem] max-[768px]:text-[1.8rem] max-[1024px]:text-[2.3rem] text-[2.8rem] text-gray-800 font-semibold">Service</h2>

                        <p className="max-[480px]:w-[250px] max-[600px]:w-[400px] max-[768px]:w-[500px] max-[1024px]:w-[600px] max-[480px]:text-[0.9rem] max-[600px]:text-[1rem] max-[768px]:text-[1.2rem] max-[1024px]:text-[1.25rem] max-[480px]:leading-8 max-[600px]:leading-9 max-[768px]:leading-9 max-[1024px]:leading-12 w-[600px] text-[1.2rem] text-gray-700 text-justify leading-10">Baker's Cafe extends its delicious offerings beyond our storefront with a reliable and professional delivery service. We are committed to ensuring our high-quality, freshly baked products arrive at your location in perfect condition, just as if you had picked them up yourself. We also accept support and feedbacks within our mobile number and email.</p>

                        <Link to="/contact" className="max-[1024px]:mt-[30px] max-[480px]:text-[0.85rem] max-[600px]:text-[0.9rem] max-[768px]:text-[1rem] max-[1024px]:text-[1.1rem] max-[480px]:w-30 max-[480px]:h-13 max-[600px]:w-33 max-[600px]:h-14 max-[768px]:w-36 max-[768px]:h-15 max-[1024px]:w-39 max-[1024px]:h-16 hover:bg-[#eee5da] mt-[100px] border-2 w-37 h-15 flex flex-row justify-center items-center rounded-[10px] text-[1.2rem] text-gray-700">Contact Us</Link>
                    </div>

                    <img src={DeliveryPic} alt="vision picture" className="max-[1024px]:hidden block max-[480px]:w-[250px] max-[480px]:h-[300px] max-[600px]:w-[300px] max-[600px]:h-[350px] max-[768px]:w-[450px] max-[768px]:h-[450px] w-[500px] h-[550px] object-cover rounded-[5px]" />

                </section>
            </main>

            <Footer />
        </div>
    )
}