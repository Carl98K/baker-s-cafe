import '/src/index.css';
import { ShopContext } from '../context/shop-context';
import { useContext } from 'react';

export default function Breads(props) {
    const { id, productName, productImage, price } = props.data;

    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemAmount = cartItems[id];

    return (
        <div>

            <div className='flex flex-col justify-center items-center'>
                <div className='max-[480px]:w-[230px] max-[600px]:w-[250px] max-[768px]:w-[260px] max-[480px]:h-[230px] max-[600px]:h-[270px] max-[768px]:h-[260px] w-[280px] h-[250px]'>
                    <img src={productImage} alt="image of bread" className='w-full h-full object-cover shadow-xl rounded-[3px]' />
                </div>

                <p className='mt-5 max-[480px]:text-[1.3rem] max-[600px]:text-[1.4rem] max-[768px]:text-[1.6rem] text-[1.7rem] text-gray-700'>{productName}</p>

                <p className='mt-5 max-[480px]:text-[1.3rem] max-[600px]:text-[1.4rem] max-[768px]:text-[1.6rem] text-[1.7rem] text-gray-700'> &#8369; {price}</p>

                <button onClick={() => addToCart(id)} className='max-[480px]:w-[70px] max-[600px]:w-[80px] max-[768px]:w-[85px] max-[480px]:h-[40px] max-[600px]:h-[40px] max-[768px]:h-[45px] max-[1024px]:h-[45px] max-[480px]:text-[0.85rem] max-[600px]:text-[0.95rem] max-[768px]:text-[1rem] hover:cursor-pointer hover:bg-amber-500 mt-5 border-1 border-gray-700 bg-amber-400 w-[90px] h-[45px] rounded-[10px] text-[1.1rem] text-gray-800 font-semibold'>Add {cartItemAmount > 0 ? `(${cartItemAmount})` : ""}</button>
            </div>

        </div>
    )
}