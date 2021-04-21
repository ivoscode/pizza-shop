import MealItem from "./mealItem";

export default function AvailableMeals() {
  const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Stone",
      description: "Our specialty",
      price: 22.99,
      img: "/images/stone.jpg",
    },
    {
      id: "m2",
      name: "Vegetable",
      description: "Finest  veggies!",
      price: 16.5,
      img: "/images/vegetable.jpg",
    },
    {
      id: "m3",
      name: "Margherita",
      description: "Best of Italy",
      price: 12.99,
      img: "/images/margaritta.jpg",
    },
    {
      id: "m4",
      name: "Mushroom",
      description: "Healthy...",
      price: 18.99,
      img: "/images/mushroom.jpg",
    },
  ];

  const mealsList = DUMMY_MEALS.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        img={meal.img}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });
  return (
    <section className=" lg:px-10">
      <div className=" my-11 text-center text-3xl tracking-widest font-bold">
        Order Now!
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-16 lg:gap-x-24 md:gap-y-16 lg:gap-y-24">
        {mealsList}
      </ul>
    </section>
  );
}
