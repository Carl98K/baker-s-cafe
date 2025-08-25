import '/src/index.css';
import BreadsPic from "/src/assets/images/breads/White Bread.jpg";
import CookiesPic from "/src/assets/images/Cookies.jpg";
import CoffeePic from "/src/assets/images/Coffee.jpg";
import Ad from '/src/components/Ad';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";

export default function OurProducts() {
    return (
        <div>
            <Ad />
            <Navbar />

            <main>
                <section className="flex flex-col justify-center bg-[#fdf4e8]">

                    <div className="max-[1024px]:mt-20 max-[1024px]:mb-20 mt-30 mb-30 w-full flex flex-col justify-center items-center">

                        <h2 className="max-[480px]:text-[1.7rem] max-[600px]:text-[2rem] max-[768px]:text-[2.4rem] text-[2.8rem] text-gray-800 font-semibold">Our Products</h2>

                        <hr className="max-[480px]:w-40 max-[600px]:w-50 mt-[20px] text-gray-800 w-63 h-0.5" />

                        <div className='max-[768px]:mt-20 max-[480px]:w-[300px] max-[600px]:w-[350px] max-[768px]:w-[400px] max-[768px]:flex-col max-[768px]:items-center mt-30 w-[1000px] flex flex-wrap flex-row justify-center items-start gap-10'>

                            <div className='flex flex-col justify-center items-center'>
                                <div className='max-[480px]:w-[200px] max-[600px]:w-[250px] max-[768px]:w-[260px] max-[480px]:h-[200px] max-[600px]:h-[270px] max-[768px]:h-[260px] w-[280px] h-[250px]'>
                                    <Link to="/breads"><img src={BreadsPic} alt="image of bread" className='hover:cursor-pointer hover:opacity-70 w-full h-full object-cover shadow-xl' /></Link>
                                </div>

                                <p className='max-[480px]:text-[1.2rem] max-[600px]:text-[1.4rem] max-[768px]:text-[1.6rem] mt-5 text-[1.7rem] text-gray-700'>Breads</p>
                            </div>

                            <div className='flex flex-col justify-center items-center'>
                                <div className='max-[480px]:w-[200px] max-[600px]:w-[250px] max-[768px]:w-[260px] max-[480px]:h-[200px] max-[600px]:h-[270px] max-[768px]:h-[260px] w-[280px] h-[250px]'>
                                    <Link to="/pastries">
                                        <img src={CookiesPic} alt="image of bread" className='hover:cursor-pointer hover:opacity-70 w-full h-full object-cover shadow-xl' />
                                    </Link>
                                </div>

                                <p className='max-[480px]:text-[1.2rem] max-[600px]:text-[1.4rem] max-[768px]:text-[1.6rem] mt-5 text-[1.7rem] text-gray-700'>Cookies and Pastries</p>
                            </div>

                            <div className='flex flex-col justify-center items-center'>
                                <div className='max-[480px]:w-[200px] max-[600px]:w-[250px] max-[768px]:w-[260px] max-[480px]:h-[200px] max-[600px]:h-[270px] max-[768px]:h-[260px] w-[280px] h-[250px]'>
                                    <Link to="/drinks">
                                        <img src={CoffeePic} alt="image of bread" className='hover:cursor-pointer hover:opacity-70 w-full h-full object-cover shadow-xl' />
                                    </Link>
                                </div>

                                <p className='max-[480px]:text-[1.2rem] max-[600px]:text-[1.4rem] max-[768px]:text-[1.6rem] mt-5 text-[1.7rem] text-gray-700'>Coffee and Drinks</p>
                            </div>

                        </div>

                    </div>

                </section>
            </main>

            <Footer />
        </div>
    )
}