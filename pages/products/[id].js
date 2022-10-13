import { getProductById } from "../../services/productServices";

export async function getServerSideProps(ctx) {
  const { id } = ctx.params;
  const product = await getProductById(id);

  return {
    props: product,
  };
}

export default function Product({ name, description, price, category }) {
  return (
    <>
      <h1>Produkt {name}</h1>
      <p>Preis: {price}</p>
      <h2>Details</h2>
    </>
  );
}
