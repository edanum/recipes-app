import GridList from "./GridList";
import Link from "next/link";
import Head from "next/head";
import { getAllProducts } from "../../services/productServices";

export async function getServerSideProps() {
  const products = await getAllProducts();

  return {
    props: { products },
  };
}

export default function Products({ products }) {
  return (
    <>
      {" "}
      <h1>Products</h1>
      {products.map((product) => {
        return (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        );
      })}
    </>
  );
}
