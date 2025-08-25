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
                <section className="flex flex-col justify-center items-center bg-[#fdf4e8]">

                    <div className="max-[1024px]:mt-20 mt-30 w-full flex flex-col justify-center items-center">

                        <h2 className="max-[480px]:text-[1.7rem] max-[600px]:text-[2rem] max-[768px]:text-[2.2rem] max-[1024px]:text-[2.5rem] text-[2.8rem] text-gray-800 font-semibold">Contact Us</h2>

                        <hr className="max-[480px]:w-40 max-[600px]:w-50 max-[768px]:w-60 mt-[20px] text-gray-800 w-63 h-0.5" />

                        <p className="max-[1024px]:mt-10 max-[1024px]:mx-[20px] max-[480px]:text-[0.85rem] max-[600px]:text-[0.9rem] max-[768px]:text-[1rem] max-[1024px]:text-[1.15rem] max-[1024px]:leading-5 mt-10 mb-5 mx-[300px] text-[1.25rem] text-gray-600 text-justify leading-15">Have a question or need some help? You can reach us with our contact details!</p>

                        <p className="max-[1024px]:mt-5 max-[1024px]:mx-[20px] max-[480px]:text-[0.8rem] max-[600px]:text-[0.9rem] max-[768px]:text-[1rem] max-[1024px]:text-[1.1rem] max-[1024px]:leading-5 mx-[300px] text-[1rem] text-gray-600 text-justify font-semibold leading-15">Email: info@bakerscafe.com</p>

                        <p className="max-[1024px]:mt-5 max-[1024px]:mx-[20px] max-[480px]:text-[0.8rem] max-[600px]:text-[0.9rem] max-[768px]:text-[1rem] max-[1024px]:text-[1.1rem] max-[1024px]:leading-5 mx-[300px] text-[1rem] text-gray-600 text-justify font-semibold leading-15">Mobile: +63 918 554 8975</p>

                        <p className="max-[1024px]:mt-5 max-[1024px]:mx-[50px] max-[480px]:text-[0.8rem] max-[600px]:text-[0.9rem] max-[768px]:text-[1rem] max-[1024px]:text-[1.1rem] max-[1024px]:leading-5 mx-[300px] text-[1rem] text-gray-600 text-justify font-semibold leading-15">Address: 117 Jupiter, Makati City, 1201 Metro Manila</p>
                    </div>

                    <div className='max-[1024px]:mb-20 mb-30 max-[480px]:w-65 max-[480px]:h-60 max-[600px]:w-70 max-[600px]:h-65 max-[768px]:w-100 max-[768px]:h-80 max-[1024px]:w-120 max-[1024px]:h-100 mt-10 w-150 h-120 shadow-xl'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.6655648592655!2d121.02742207596822!3d14.561107585920624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c90126062379%3A0x9ec6cf905b2adc33!2sJupiter%2C%20Makati%20City%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1756114330743!5m2!1sen!2sph"  loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='border-gray-300 rounded-[5px] w-full h-full'></iframe>
                    </div>

                </section>
            </main>

            <Footer />
        </div>
    )
}