const products = [
  {
    id: "1",
    name: "Garnele",
    description: "lalala",
    price: 12,
    category: "Eis",
  },
  {
    id: "2",
    name: "Pizza",
    description: "lalala",
    price: 14,
    category: "Tiefkühl",
  },
  {
    id: "3",
    name: "Magnum",
    description: "lalala",
    price: 14,
    category: "Tiefkühl",
  },
  {
    id: "4",
    name: "Solero",
    description: "lalala",
    price: 14,
    category: "Tiefkühl",
  },
];

export async function getAllProducts() {
  return products;
}

export async function getProductById(id) {
  return products.find((product) => product.id === id);
}
