import '/src/index.css';
import Ad from '/src/components/Ad';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
    return (
        <div>
            <Ad />
            <Navbar />

            <main>
                <section className="flex flex-col justify-center">

                    <div className="pt-30 pb-30 bg-[#fdf4e8] w-full flex flex-col justify-center items-center">

                        <h2 className="max-[1024px]:mt-5 mt-30 max-[480px]:text-[1.7rem] max-[600px]:text-[2rem] max-[768px]:text-[2.2rem] max-[1024px]:text-[2.5rem] text-[2.8rem] text-gray-800 font-semibold">Contact Us</h2>

                        <hr className="max-[480px]:w-40 max-[600px]:w-50 max-[768px]:w-60 mt-[20px] text-gray-800 w-63 h-0.5" />

                        <p className="max-[1024px]:mt-10 max-[1024px]:mx-[20px] max-[480px]:text-[0.85rem] max-[600px]:text-[0.9rem] max-[768px]:text-[1rem] max-[1024px]:text-[1.15rem] max-[1024px]:leading-5 mt-10 mb-5 mx-[300px] text-[1.25rem] text-gray-600 text-justify leading-15">Have a question or need some help? You can reach us with our contact details!</p>

                        <p className="max-[1024px]:mt-5 max-[1024px]:mx-[50px] max-[480px]:text-[0.8rem] max-[600px]:text-[0.9rem] max-[768px]:text-[1rem] max-[1024px]:text-[1.1rem] max-[1024px]:leading-5 mx-[300px] text-[1rem] text-gray-600 text-justify font-semibold leading-15">Address: 117 Jupiter, Makati City, 1201 Metro Manila</p>

                        <p className="max-[1024px]:mt-5 max-[1024px]:mx-[20px] max-[480px]:text-[0.8rem] max-[600px]:text-[0.9rem] max-[768px]:text-[1rem] max-[1024px]:text-[1.1rem] max-[1024px]:leading-5 mx-[300px] text-[1rem] text-gray-600 text-justify font-semibold leading-15">Email: info@bakerscafe.com</p>

                        <p className="max-[1024px]:mt-5 max-[1024px]:mb-20 max-[1024px]:mx-[20px] max-[480px]:text-[0.8rem] max-[600px]:text-[0.9rem] max-[768px]:text-[1rem] max-[1024px]:text-[1.1rem] max-[1024px]:leading-5 mx-[300px] text-[1rem] text-gray-600 text-justify font-semibold leading-15">Mobile: +63 918 554 8975</p>

                    </div>

                </section>
            </main>

            <Footer />
        </div>
    )
}