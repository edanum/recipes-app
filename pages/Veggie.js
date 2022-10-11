import Image from "next/image"
import pizza from ".././public/pizza.jpeg";

export default function Veggie() {
  return (
    <>
      <h2>This is the Veggie-Page</h2>
      <Image
        src={pizza}
        alt="Picture of a bad pizza"
        width={500}
        height={500}
        layout="responsive"
      />
    </>
  );
}
