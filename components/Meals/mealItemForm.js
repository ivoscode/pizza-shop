import { useRef, useState } from "react";
import Input from "../UI/input";

export default function MealItemForm(props) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form
      className="flex justify-around items-center"
      action=""
      onSubmit={submitHandler}
    >
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className="rounded-full py-2 px-5 cursor-pointer font-bold tracking-wider border-pink-800 border-2 hover:bg-pink-700 hover:text-white ">
        +Add
      </button>
      {!amountIsValid && <p>Please enter correct amount 1-5</p>}
    </form>
  );
}
