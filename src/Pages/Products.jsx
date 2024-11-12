import { Fragment, useState } from "react";
import Button from "../components/Elements/button";
import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: 1500000,
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis,
          fugiat sit eaque maxime repudiandae dicta accusamus dolore
          voluptatibus distinctio architecto, cum molestiae iusto minus?
          Corporis excepturi commodi fuga distinctio nisi.`,
  },
  {
    id: 2,
    name: "Sepatu Kulit",
    price: 1500000,
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis,
          fugiat sit eaque maxime repudiandae dicta accusamus dolore
          voluptatibus distinctio architecto, cum `,
  },
  {
    id: 3,
    name: "Sepatu Coklat",
    price: 1000000,
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis,
          fugiat sit eaque maxime repudiandae dicta accusamus dolore
          voluptatibus distinctio architecto, cum `,
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      qty: 1,
    },
  ]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
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
        <div className="w-4/6 flex flex-wrap">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body name={product.name}>
                description={product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart}
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold  text-slate-700 ml-5 mb-2">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-5 ">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>
                      {product.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      {(product.price * item.qty).toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
