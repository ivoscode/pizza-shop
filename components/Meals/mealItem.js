import Image from "next/image";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Card from "../UI/card";
import MealItemForm from "./mealItemForm";

export default function MealItem(props) {
  console.log(props);
  const ctx = useContext(CartContext);

  const price = `£${props.price.toFixed(2)}`;

  const addToCartHandler = (enteredAmountNumber) => {
    ctx.addItem({
      id: props.id,
      name: props.name,
      amount: enteredAmountNumber,
      price: props.price,
    });
  };
  return (
    <Card>
      <Image
        alt={props.name || "Product Image"}
        className=""
        src={props.img}
        height={540}
        width={540}
        quality="100"
        layout="responsive"
      />
      <span className="absolute top-2 ml-2 p-2 mt-2 bg-gray-200  text-xl uppercase font-bold rounded-full">
        {price}
      </span>
      <div className="p-2">
        <h3 className="text-3xl mb-2">{props.name}</h3>
        <div>{props.description}</div>
      </div>
      <div className="p-2">
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </Card>
  );
}
