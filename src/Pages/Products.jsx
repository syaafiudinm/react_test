import Button from "../components/Elements/button";
import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: "Rp. 1.500.000",
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis,
          fugiat sit eaque maxime repudiandae dicta accusamus dolore
          voluptatibus distinctio architecto, cum molestiae iusto minus?
          Corporis excepturi commodi fuga distinctio nisi.`,
  },
  {
    id: 2,
    name: "Sepatu Kulit",
    price: "Rp. 1.500.000",
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis,
          fugiat sit eaque maxime repudiandae dicta accusamus dolore
          voluptatibus distinctio architecto, cum `,
  },
];

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      {
        products.map(
          (product) => (
            <CardProduct>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body name={product.name}>
                description={product.description}
              </CardProduct.Body>
              <CardProduct.Footer price={product.price} />
            </CardProduct>
          )
        )
      }
    </div>
  );
};

export default ProductsPage;
