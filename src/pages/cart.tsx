import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import { useTable } from "react-table";
import CartItem from "../components/cart-item";

const cartItems = [];
const subtotal = 4000;
const tax = Math.round(subtotal*0.18);
const shippingCharges = 200;
const discount = 400;
const total = subtotal + tax + shippingCharges;


const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);

  useEffect(()=>{
    const timeoutId = setTimeout(() => {
      if(Math.random() > 0.5) setIsValidCouponCode(true);
      else setIsValidCouponCode(false);
    }, 1000);

    return ()=>{
      clearTimeout(timeoutId);
      setIsValidCouponCode(false)
    }
  }, [couponCode])


  return (
    <div className="cart">
      <main>
        {
          cartItems.map((i, idx)=>(
            <CartItem key={idx} cartItem={i}/>
          ))
        }
      </main>
      <aside>
        <p>Subtotal : ৳{subtotal}</p>
        <p>Shipping Charges : ৳{shippingCharges}</p>
        <p>Tax : ৳{tax}</p>
        <p>
          Discount: <em> - ৳{discount}</em>
        </p>
        <p>Total : ৳{total}</p>

        <input 
          type="text" 
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e)=> setCouponCode(e.target.value)}
        />

        {
          couponCode && (isValidCouponCode 
            ? 
            <span className="green">৳{discount} off using the <code>couponCode</code></span>
            :
            <span className="red">Invalid Coupon <VscError/></span>)
        }




      </aside>
    </div>
  )
}

export default Cart