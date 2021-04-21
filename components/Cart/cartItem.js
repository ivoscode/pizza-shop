export default function CartItem(props) {
  console.log(props);
  return (
    <li className="flex justify-between items-center py-4 border-b">
      <h2 className="w-1/3">{props.name}</h2>
      <div className="w-1/3">
        <span>{`£${props.price.toFixed(2)}`}</span>
      </div>

      <div className=" w-1/6  flex">
        <button onClick={props.onAdd}>
          <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg>
        </button>
        <div className="mx-2 border text-center w-8">{props.amount}</div>
        <button onClick={props.onRemove}>
          <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
            <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg>
        </button>
      </div>
    </li>
  );
}
