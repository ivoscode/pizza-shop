import Image from "next/image";
export default function Hero() {
  return (
    <div className="hero relative w-full">
      <Image
        alt={"Product Image"}
        src="/images/hero.png"
        layout="fill"
        objectFit="cover"
        objectPosition="center center"
        quality="50"
      />
    </div>
  );
}
