import { Fragment } from "react";
import Button from "../components/Elements/button";
import CardProduct from "../components/Fragments/CardProduct";
import Counter from "../components/Fragments/Counter";

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
  {
    id: 3,
    name: "Sepatu Coklat",
    price: "Rp. 1.000.000",
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis,
          fugiat sit eaque maxime repudiandae dicta accusamus dolore
          voluptatibus distinctio architecto, cum `,
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
  return (
    <Fragment>
      <div className="flex gap-3 justify-end h-20 bg-slate-700 text-white items-center px-5">
        {email}
        <Button onClick={handleLogout} className="bg-slate-800">
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body name={product.name}>
              description={product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
      </div>
      <div className="w-full flex justify-center">
        <Counter></Counter>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
