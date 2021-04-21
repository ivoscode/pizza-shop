import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/modal";
import CartItem from "./cartItem";

export default function Cart(props) {
  const ctx = useContext(CartContext);
  console.log(ctx);
  const cartItemRemoveHandler = (id) => {
    ctx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    ctx.addItem({ ...item, amount: 1 });
  };
  const cartItems = (
    <ul>
      {ctx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        );
      })}
    </ul>
  );
  const totalAmount = `£${ctx.totalAmount.toFixed(2)}`;
  return (
    <>
      <Modal
        isOpened={ctx.isCartOpened}
        onClose={() => ctx.setIsCartOpened(false)}
      >
        {cartItems}
        <div className="my-5 font-bold">
          <span>Total Amount</span>
          <span className="ml-4">{totalAmount}</span>
        </div>
        <div className=" flex">
          <button
            className="rounded-full py-2 px-5 cursor-pointer font-bold tracking-wider hover:bg-gray-300 mr-6"
            onClick={() => ctx.setIsCartOpened(false)}
          >
            Close X
          </button>
          {ctx.items.length > 0 && (
            <button className="rounded-full py-2 px-5 cursor-pointer font-bold tracking-wider hover:border-pink-800 hover:bg-white hover:text-black border-2 bg-pink-700 text-white">
              Order
            </button>
          )}
        </div>
      </Modal>
    </>
  );
}
