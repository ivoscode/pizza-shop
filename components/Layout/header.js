import CartButton from "../UI/cartButton";

export default function Header(props) {
  return (
    <header className=" header-bg max-w-8xl h-20  w-full  z-20 flex justify-end items-center">
      <div className="mr-20">
        <CartButton />
      </div>
    </header>
  );
}
