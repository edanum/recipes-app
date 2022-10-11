import Image from "next/image";
import Link from "next/link";

const imageDessert = "https://images.unsplash.com/photo-1603236268617-d023914d9416?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"

export default function Dessert() {
  return (
    <>
      <h2>This is the Dessert-Page</h2>
      <Image
        src={imageDessert}
        alt="Picture of a bad pizza"
        width={500}
        height={500}
        layout="responsive"
      />
    </>
  );
}
