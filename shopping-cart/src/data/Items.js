const productList = [
  {
    id: "1",
    title: "samsung",
    price: 99,
    image: "../../public/images/h1.jpg",
  },
  {
    id: "2",
    title: "Sony",
    price: 99,
    image: "../../public/images/h2.jpg",
  },
  {
    id: "3",
    title: "JBL",
    price: 99,
    image: "../../public/images/h3.jpg",
  },
  {
    id: "4",
    title: "Iphon",
    price: 99,
    image: "../../public/images/h4.jpg",
  },
];

function getProductData(id) {
  let productData = productList.find((item) => item.id === id);
  return productData;
}

export { productList, getProductData };
