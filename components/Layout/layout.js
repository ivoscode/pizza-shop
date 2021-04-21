import Header from "./header";

export default function Layout(props) {
  return (
    <div className="flex flex-col w-full  items-center ">
      <Header />
      <main className=" max-w-8xl w-full">{props.children}</main>
    </div>
  );
}
