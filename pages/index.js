import Link from "next/link";
import GridList from "./products/GridList";

export default function Home() {
  return (
    <div>
      <GridList>
        <li>
          <Link href="/products/Produkt1">Produkt 1</Link>
        </li>
        <li>
          <Link href="/products/Produkt2">Produkt 2</Link>
        </li>
      </GridList>

      <main>
        <div> Content</div>
      </main>
    </div>
  );
}
