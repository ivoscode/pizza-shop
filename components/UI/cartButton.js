import { useContext } from "react";
import CartContext from "../../store/cart-context";
import BagIcon from "../Cart/bagIcon";
export default function CartButton() {
  const ctx = useContext(CartContext);

  const numberOfCartItems =
    ctx.items &&
    ctx.items.reduce((curNumber, item) => {
      return curNumber + item.amount;
    }, 0);

  return (
    <div>
      <button className="relative" onClick={() => ctx.setIsCartOpened(true)}>
        <span>
          <BagIcon />
        </span>
        {numberOfCartItems > 0 && (
          <span className=" bagCount">{numberOfCartItems}</span>
        )}
      </button>
    </div>
  );
}
