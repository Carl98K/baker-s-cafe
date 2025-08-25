import Ad from '/src/components/Ad';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Products } from '../products'; 
import Drinks from '../pages/drinks';
import { Link } from "react-router-dom";

export default function DrinksShop() {
    return (
        <div>
            <Ad />
            <Navbar />

            <main>
                <section className="flex flex-col justify-center bg-[#fdf4e8]">

                    <div className="max-[1024px]:mt-20 max-[1024px]:mb-20 mt-30 mb-30 w-full flex flex-col justify-center items-center">

                        <h2 className="max-[480px]:text-[1.7rem] max-[600px]:text-[2rem] max-[768px]:text-[2.4rem] text-[2.5rem] text-gray-800 font-semibold"><Link to="/products" className="hover:text-gray-700 max-[480px]:text-[1.2rem] max-[600px]:text-[1.5rem] max-[768px]:text-[1.8rem] text-[2rem] text-gray-800 font-semibold">Our Products </Link>&gt; Drinks
                        </h2>

                        <hr className="max-[480px]:w-45 max-[600px]:w-55 mt-[20px] text-gray-800 w-63 h-0.5" />

                        <div className='max-[480px]:mt-20 max-[480px]:w-[300px] max-[600px]:w-[350px] max-[768px]:w-[400px] max-[1024px]:w-[400px] max-[1024px]:flex-col max-[1024px]:items-center mt-30 w-[1000px] flex flex-wrap flex-row justify-center items-start gap-10'>

                            {Products.map((product, productKey) => {
                                if (product.category === "drinks") {
                                    return (
                                        <div key={productKey}>
                                            <Drinks data={product} />
                                        </div>
                                    )
                                }
                            })}

                        </div>

                    </div>

                </section>
            </main>

            <Footer />
        </div>
    )
}