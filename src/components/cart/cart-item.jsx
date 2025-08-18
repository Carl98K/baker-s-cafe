import { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
import DeleteIcon from "/src/assets/images/trash-icon.png";

export default function CartItem(props) {
    const { id, productName, price } = props.data;

    const { cartItems, addToCart, removeFromCart, removeAllCart } = useContext(ShopContext);

    return (
        <div className='max-[768px]:grid-cols-1 max-[768px]:gap-3 mt-[20px] mb-[20px] grid grid-cols-3 items-center'>
            <div className='max-[768px]:ml-5 ml-7 flex flex-row justify-start'>
                <p className='max-[480px]:text-[0.8rem] max-[600px]:text-[0.9rem] max-[768px]:text-[0.95rem] text-[1rem] text-gray-800 font-semibold'>{productName}&nbsp; x {cartItems[id]}</p>
            </div>

            <div className='max-[768px]:ml-5 max-[768px]:justify-start max-[480px]:gap-2 flex flex-row gap-3 justify-center items-center'>
                <button onClick={() => { removeFromCart(id) }} className='max-[480px]:text-[0.8rem] max-[600px]:text-[0.8rem] max-[768px]:text-[0.9rem] max-[480px]:w-5 max-[600px]:w-7 max-[768px]:w-8 max-[480px]:h-5 max-[600px]:h-7 max-[768px]:h-8 hover:bg-gray-500 hover:cursor-pointer bg-gray-600 w-7 h-7 rounded-[5px] text-[1rem] text-white font-bold'>-</button>

                <button onClick={() => { addToCart(id) }} className='max-[480px]:text-[0.8rem] max-[600px]:text-[0.8rem] max-[768px]:text-[0.9rem] max-[480px]:w-5 max-[600px]:w-7 max-[768px]:w-8 max-[480px]:h-5 max-[600px]:h-7 max-[768px]:h-8 hover:bg-gray-500 hover:cursor-pointer bg-gray-600 w-7 h-7 rounded-[5px] text-[1rem] text-white font-bold'>+</button>
            </div>

            <div className="max-[768px]:ml-5 max-[768px]:justify-start mr-3 flex flex-row gap-2 justify-center items-center">
                <p className='max-[480px]:text-[1rem] max-[600px]:text-[1.05rem] max-[768px]:text-[1.1rem] text-[1rem] text-gray-800 font-semibold'>&#8369;{price}.00</p>

                <img onClick={() => { removeAllCart(id) }} src={DeleteIcon} alt="delete icon" className='max-[480px]:w-[13px] max-[600px]:w-[15px] max-[768px]:w-[16px] max-[480px]:h-[13px] max-[600px]:h-[15px] max-[768px]:h-[16px] hover:cursor-pointer w-[17px] h-[17px]' />
            </div>
        </div>
    )
}