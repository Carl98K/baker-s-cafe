import '/src/index.css';
import AboutBakery from "/src/assets/images/Cafe.jpg";
import Ad from '/src/components/Ad';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
    return (
        <div>
            <Ad />
            <Navbar />

            <main>
                <section className=" flex flex-col justify-center bg-[#fdf4e8]">

                    <div className="max-[1024px]:mt-20 max-[1024px]:mb-20 mt-30 mb-30 w-full flex flex-col justify-center items-center">

                        <h2 className="max-[480px]:text-[1.7rem] max-[600px]:text-[2rem] max-[768px]:text-[2.2rem] max-[1024px]:text-[2.5rem] text-[2.8rem] text-gray-800 font-semibold">About Us</h2>

                        <hr className="max-[480px]:w-40 max-[600px]:w-50 max-[768px]:w-60 mt-[20px] text-gray-800 w-63 h-0.5" />

                        <img src={AboutBakery} alt="about shop image" className="max-[480px]:w-[280px] max-[600px]:w-[400px] max-[768px]:w-[500px] max-[1024px]:w-[550px] max-[480px]:h-[240px] max-[600px]:h-[350px] max-[768px]:h-[400px] max-[1024px]:h-[450px] mt-20 w-[900px] h-[600px] rounded-[10px] brightness-95" />

                        <p className="max-[1024px]:mt-15 max-[1024px]:mx-[20px] max-[480px]:text-[0.8rem] max-[600px]:text-[0.95rem] max-[768px]:text-[1rem] max-[1024px]:text-[1.2rem] max-[1024px]:leading-10 mt-20 mx-[300px] text-[1.25rem] text-gray-600 text-justify leading-15">Hey there, Philippines! We're Baker's Cafe, your friendly neighborhood bakery, and we're so glad you're here. Our mission is simple: to bake delicious treats and create a warm, welcoming space where everyone feels at home. We started with a tiny oven and a basic coffee maker for making our simple products while also having a big dream to be known in our community.

                            We're all about good food and good company. You'll find a delightful array of freshly baked goods, from our classic tasy bread to our seasonal specials. We believe in using great ingredients and a whole lot of heart in everything we make. More than just a place to grab a treat, we aspire to be a hub for our community – a place to meet friends, enjoy a quiet moment, or simply indulge in something sweet. Stop by and say hello – we can't wait to bake for you!</p>
                    </div>

                </section>
            </main>

            <Footer />
        </div>
    )
}