export default function Card(props) {
  return (
    <div className="rounded bg-white border-gray-200 shadow-md overflow-hidden pb-3 relative">
      {props.children}
    </div>
  );
}
