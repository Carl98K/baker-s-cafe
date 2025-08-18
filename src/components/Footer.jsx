import '/src/index.css';
import EmailPic from "/src/assets/images/email.png";
import FacebookPic from "/src/assets/images/facebook.png";
import InstagramPic from "/src/assets/images/instagram.png";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className='max-[768px]:flex-col max-[768px]:items-start max-[768px]:gap-5 max-[768px]:h-[280px] bg-[#ff8f34] w-full h-[250px] flex flex-row justify-evenly items-center gap-20'>
            <div className='max-[768px]:ml-5 max-[768px]:gap-5 grid grid-cols-1 gap-7'>
                <h3 className='max-[480px]:text-[1.2rem] max-[600px]:text-[1.3rem] max-[768px]:text-[1.5rem] text-white text-[2rem] text-shadow-xs'>Baker's Cafe ❤️</h3>
                <p className='max-[480px]:text-[1rem] max-[600px]:text-[1.01rem] max-[768px]:text-[1.02rem] text-white text-[1.05rem] text-shadow-xs'>Made with Passion</p>
                <div className='flex flex-row gap-5'>
                    <img src={FacebookPic} alt="facebook icon" className='max-[480px]:w-[1.5rem] [600px]:w-[1.55rem] [768px]:w-[1.6rem] max-[480px]:h-[1.5rem] max-[600px]:h-[1.55rem] max-[768px]:h-[1.6rem] hover:cursor-pointer w-[1.8rem]' />
                    <img src={InstagramPic} alt="facebook icon" className='max-[480px]:w-[1.5rem] [600px]:w-[1.55rem] [768px]:w-[1.6rem] max-[480px]:h-[1.5rem] max-[600px]:h-[1.55rem] max-[768px]:h-[1.6rem] hover:cursor-pointer w-[1.8rem]' />
                    <img src={EmailPic} alt="facebook icon" className='max-[480px]:w-[1.5rem] [600px]:w-[1.55rem] [768px]:w-[1.6rem] max-[480px]:h-[1.5rem] max-[600px]:h-[1.55rem] max-[768px]:h-[1.6rem] hover:cursor-pointer w-[1.8rem]' />
                </div>
            </div>

            <div className='max-[768px]:ml-5 grid grid-cols-2'>
                <div className='grid grid-cols-1 gap-5'>
                    <Link to="/about" className='max-[480px]:text-[0.8rem] max-[600px]:text-[0.9rem] max-[768px]:text-[0.95rem] text-white text-shadow-xs'>About Us</Link>
                    <Link to="/contact" className='max-[480px]:text-[0.8rem] max-[600px]:text-[0.9rem] max-[768px]:text-[0.95rem] text-white text-shadow-xs'>Contact Us</Link>
                </div>
                <div className='grid grid-cols-1 gap-5'>
                    <p className='max-[480px]:text-[0.8rem] max-[600px]:text-[0.9rem] max-[768px]:text-[0.95rem] hover:cursor-pointer text-white text-shadow-xs'>Terms and Conditions</p>
                    <p className='max-[480px]:text-[0.8rem] max-[600px]:text-[0.9rem] max-[768px]:text-[0.95rem] hover:cursor-pointer text-white text-shadow-xs'>Privacy Policy</p>
                </div>
            </div>
        </footer>
    )
}