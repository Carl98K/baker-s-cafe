import { useEffect, useRef, useState } from "react";
import { useContext } from 'react';
import { Link } from "react-router-dom";
import { ShopContext } from '../context/shop-context';
import CloseIcon from "../assets/images/close.png";
import { Products } from "../products";
import CartItem from "./cart/cart-item";

export default function Navbar() {

    const { cartItems, getCartTotal } = useContext(ShopContext);

    const cartTotalAmount = getCartTotal();

    // For Cart Side Bar Menu
    const [isOpen, setIsOpen] = useState(false);
    const componentRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (componentRef.current && !componentRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    // For SideNav Menu
    const [isOpenSideNav, setIsOpenSideNav] = useState(false);
    const componentRefSideNav = useRef(null);

    useEffect(() => {
        function handleClickOutsideSideNav(event) {
            if (componentRefSideNav.current && !componentRefSideNav.current.contains(event.target)) {
                setIsOpenSideNav(false);
            }
        }

        if (isOpenSideNav) {
            document.addEventListener('mousedown', handleClickOutsideSideNav);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutsideSideNav);
        };
    }, [isOpenSideNav]);

    return (

        <nav className="max-[480px]:gap-5 z-10 fixed top-11 left-0 flex flex-row justify-center items-center gap-50 w-[100%] h-[80px] bg-[#fdf4e8] shadow-xl">

            <div className="max-[1024px]:block hidden absolute left-5">
                <img onClick={() => setIsOpenSideNav(true)} src="/src/assets/images/Hamburger.png" alt="hamburger icon" className="max-[480px]:w-5.5 max-[600px]:w-6 max-[768px]:w-7 max-[1024px]:w-7 max-[480px]:h-5.5 max-[600px]:h-6 max-[768px]:h-7 max-[1024px]:h-7" />
            </div>

            <div className={"bg-black fixed inset-0 pointer-events-none z-40 transition-opacity duration-300 " + (isOpenSideNav ? "opacity-70 pointer-events-auto" : "opacity-0 pointer-events-none")}>

            </div>

            <h1 className="max-[1024px]:static max-[480px]:text-[1.25rem] max-[600px]:text-[1.4rem] absolute left-30 text-[1.6rem] text-gray-700">Baker's Cafe ❤️</h1>

            <div className="max-[1024px]:hidden flex flex-row gap-15">
                <Link to="/" className="hover:text-amber-600 hover:underline hover:underline-offset-8 hover:decoration-amber-600 text-[1.1rem] text-gray-700">Home</Link>
                <Link to="/products" className="hover:text-amber-600 hover:underline hover:underline-offset-8 hover:decoration-amber-600 text-[1.1rem] text-gray-700">Our Products</Link>
                <Link to="/about" className="hover:text-amber-600 hover:underline hover:underline-offset-8 hover:decoration-amber-600 text-[1.1rem] text-gray-700">About Us</Link>
                <Link to="/contact" className="hover:text-amber-600 hover:underline hover:underline-offset-8 hover:decoration-amber-600 text-[1.1rem] text-gray-700">Contact Us</Link>
            </div>

            <div className="max-[1024px]:right-5 max-[480px]:gap-3 absolute right-30 flex flex-row justify-center items-center gap-5">
                <img src="/src/assets/images/Profile.png" alt="profile icon" className="max-[480px]:w-4.5 max-[600px]:w-5 max-[480px]:h-4.5 max-[600px]:h-5 hover:cursor-pointer w-5.5 h-5.5" />

                <img onClick={() => setIsOpen(true)} src="/src/assets/images/Cart.png" alt="profile icon" className="max-[480px]:w-4.5 max-[480px]:h-4.5 hover:cursor-pointer w-5.5 h-5.5" />
            </div>

            <div className={"bg-black fixed inset-0 pointer-events-none z-40 transition-opacity duration-300 " + (isOpen ? "opacity-70 pointer-events-auto" : "opacity-0 pointer-events-none")}>

            </div>

            {/* Cart Side Bar Menu */}
            <div ref={componentRef} className={"max-[480px]:w-[200px] max-[600px]:w-[250px] max-[768px]:w-[300px] bg-[#fff3e3] w-[400px] h-screen absolute top-0 right-[-100%] flex-col justify-center items-center gap-[17px] ease-in-out duration-[0.5s] z-50 pointer-events-auto " + (isOpen ? "right-[0%]" : "")}>

                <div className="max-[480px]:gap-5 max-[600px]:gap-8 max-[768px]:gap-15 max-[768px]:my-10 max-[600px]:my-10 my-5 flex flex-row justify-center items-center gap-35">
                    <p className="max-[480px]:text-[0.83rem] max-[600px]:text-[0.93rem] max-[768px]:text-[1.05rem] text-[1.2rem] font-semibold uppercase tracking-wider">Shopping Cart</p>

                    <img onClick={() => setIsOpen(false)} src={CloseIcon} alt="delete icon" className='max-[480px]:w-[15px] max-[600px]:w-[16px] max-[768px]:w-[17px] max-[480px]:h-[15px] max-[600px]:h-[16px] max-[768px]:h-[17px] hover:animate-spin hover:cursor-pointer w-[18px] h-[18px]' />
                </div>

                <div className="mt-10">
                    {Products.map((product, prodKey) => {
                        if (cartItems[product.id] !== 0) {
                            return (
                                <div key={prodKey}>
                                    <hr className="m-auto w-[90%] opacity-10" />

                                    <CartItem data={product} />
                                </div>
                            )
                        }
                    })}
                </div>

                <div className="flex flex-col justify-center items-center">
                    <hr className="m-auto w-[90%] opacity-10" />

                    <p className="max-[480px]:text-[1rem] max-[600px]:text-[1.1rem] max-[768px]:text-[1.2rem] mt-[30px] text-[1.4rem] ">Total: &#8369;{cartTotalAmount}</p>
                    <button className="max-[480px]:text-[0.8rem] max-[600px]:text-[0.9rem] max-[768px]:text-[0.95rem] max-[480px]:w-18 max-[600px]:w-20 max-[768px]:w-22 max-[480px]:h-10 max-[600px]:h-10 max-[768px]:h-11 hover:cursor-pointer hover:bg-amber-500 mt-[10px] border-1 border-gray-700 bg-amber-400 w-24 h-12 rounded-[8px] text-[1.1rem] text-gray-800 font-semibold">Checkout</button>
                </div>

            </div>

            {/* Side Nav Menu */}
            <div ref={componentRefSideNav} className={"max-[1024px]:block max-[480px]:w-[150px] max-[600px]:w-[200px] max-[768px]:w-[250px] max-[1024px]:w-[300px] hidden bg-[#fff3e3] w-[400px] h-screen absolute top-0 left-[-100%]  ease-in-out duration-[0.5s] z-50 pointer-events-auto " + (isOpenSideNav ? "left-[0%]" : "")}>

                <div className="mt-8 ml-3 flex flex-col justify-start items-start gap-10">
                    <img onClick={() => setIsOpenSideNav(false)} src="/src/assets/images/close.png" alt="close icon" className='max-[480px]:w-[18px] max-[480px]:h-[18px] max-[600px]:w-[19px] max-[600px]:h-[19px] max-[768px]:w-[20px] max-[1024px]:w-[22px] max-[768px]:h-[20px] max-[1024px]:h-[22px]' />
                    <Link to="/" className="max-[480px]:text-[1rem] max-[600px]:text-[1.2rem] max-[768px]:text-[1.3rem] max-[1024px]:text-[1.4rem] text-gray-700">Home</Link>
                    <Link to="/products" className="max-[480px]:text-[1rem] max-[600px]:text-[1.2rem] max-[768px]:text-[1.3rem] max-[1024px]:text-[1.4rem] text-gray-700">Our Products</Link>
                    <Link to="/about" className="max-[480px]:text-[1rem] max-[600px]:text-[1.2rem] max-[768px]:text-[1.3rem] max-[1024px]:text-[1.4rem] text-gray-700">About Us</Link>
                    <Link to="/contact" className="max-[480px]:text-[1rem] max-[600px]:text-[1.2rem] max-[768px]:text-[1.3rem] max-[1024px]:text-[1.4rem] text-gray-700">Contact Us</Link>
                </div>

            </div>

        </nav>
    )
}