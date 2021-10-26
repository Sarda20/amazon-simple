import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, deleteFromDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Review from '../review/Review';
import { useHistory } from 'react-router';

const OrderReview = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const handleRemove = key => {
        const newcart = cart.filter(product => product.key !== key);
        setCart(newcart);
        deleteFromDb(key);
    }
    const history = useHistory();

    const handleOrder = () => {
        history.push('/shipping');
        // setCart([]);
        // clearTheCart();
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(product => <Review product={product} key={product.key} handleRemove={handleRemove}></Review>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>

                    <button onClick={handleOrder} className='btn-regular'>Proceed to Order</button>

                </Cart>
            </div>

        </div>
    );
};

export default OrderReview;