type CartItemsProps = {
  cartItem: any;
}


const CartItem = ({cartItem}:CartItemsProps) => {

  const {photo, productId, name, price, quantity, stock}= cartItem;

  return (
    <div className="cart-item">
      <img src={photo} alt="" />
    </div>
  )
}

export default CartItem